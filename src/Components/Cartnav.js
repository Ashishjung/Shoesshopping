import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { productcontext } from "./Cartcontext";
import "./Cart.css";
const Cartnav = () => {
  let { getdata, RemovecartItem, incrementValue, decrementValue } =
    useContext(productcontext);
  if (getdata.length === 0) {
    return (
      <>
        <header>
          <NavLink to="/" className="navlink">
            <h1>Shoes Shopping</h1>
          </NavLink>
        </header>
        <p className="items-count">You Have 0 items in Your shopping Cart</p>
      </>
    );
  }
  return (
    <>
      <header>
        <NavLink to="/" className="navlink">
          <h1>Shoes Shopping</h1>
        </NavLink>
      </header>
      <p className="items-count">
        You Have {getdata.length} items in Your shopping Cart
      </p>
      <section className="cart-datas">
        <div className="cart-data-box">
          {getdata.map((allitem) => {
            return (
              <>
                <div className="shoe-cart-box">
                  <img src={allitem.img} alt="img" className="cart-img" />
                  <h2>{allitem.name}</h2>
                  <div className="input-box">
                    <i
                      className="dec"
                      onClick={() => {
                        decrementValue(allitem.id);
                      }}
                    >
                      -
                    </i>
                    <input
                      type="text"
                      className="text-box"
                      placeholder={allitem.quantity}
                    />
                    <i
                      className="inc"
                      onClick={() => {
                        incrementValue(allitem.id);
                      }}
                    >
                      +
                    </i>
                  </div>
                  <h2>${allitem.showdata}</h2>
                  <i
                    class="uil uil-trash-alt"
                    onClick={() => {
                      RemovecartItem(allitem.id);
                    }}
                  ></i>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Cartnav;
