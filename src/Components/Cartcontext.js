import React, { createContext } from "react";
import Navbar from "./Navbar";
import Allproduct from "./Allproduct";
import { shoesdetail } from "./Allitems";
import Cart from "./Cart";
import { Switch, Route } from "react-router-dom";

import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
export const productcontext = createContext();
// Get data from local Storage
const getstorageItem = () => {
  let getdata = localStorage.getItem("lists");
  if (getdata) {
    return JSON.parse(getdata);
  } else {
    return [];
  }
};
const Cartcontext = () => {
  let [data, setdata] = useState(shoesdetail);
  let [getdata, setgetdata] = useState(getstorageItem());
  // SendData to cart
  function SendtoCart(id) {
    let getlist = data.filter((elem) => {
      return elem.id === id;
    });
    setgetdata((prevval) => {
      return [...prevval, ...getlist];
    });
  }
  // Send item to localstorage
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(getdata));
  }, [getdata]);

  // Remove Itemfromcart
  function RemovecartItem(id) {
    let removecartData = getdata.filter((elem) => {
      return elem.id !== id;
    });
    setgetdata(removecartData);
  }
  // inCrement data start
  let [final, setFinal] = useState();
  function incrementValue(id) {
    let getval = getdata.map((elements) => {
      if (elements.id === id) {
        return {
          ...elements,
          quantity: elements.quantity + 1,
          showdata: elements.quantity * elements.price,
        };
      }
      return elements;
    });
    setgetdata(getval);
  }

  // Lets Decrement Value
  function decrementValue(id) {
    let getval = getdata
      .map((elements) => {
        if (elements.id === id) {
          return {
            ...elements,
            quantity: elements.quantity - 1,
            showdata: elements.showdata - elements.price,
          };
        }
        return elements;
      })
      .filter((items) => {
        return items.quantity !== 0;
      });
    setgetdata(getval);
  }
  // useEffect(() => {

  //   setgetdata(price);
  // }, [getdata]);
  return (
    <>
      <productcontext.Provider
        value={{
          data,
          SendtoCart,
          getdata,
          RemovecartItem,
          incrementValue,
          decrementValue,
          final,
        }}
      >
        <Switch>
          <Route path="/gocart">
            <Cart />
          </Route>
          <Route path="/">
            <Navbar />
            <Allproduct />
          </Route>
        </Switch>
      </productcontext.Provider>
    </>
  );
};

export default Cartcontext;
