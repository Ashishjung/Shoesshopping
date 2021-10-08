import React, { useContext } from "react";
import "./Allproduct.css";
import { NavLink } from "react-router-dom";
import "./Allproduct.css";
import { productcontext } from "./Cartcontext";
const Navbar = () => {
  let { getdata } = useContext(productcontext);
  return (
    <>
      <header>
        <h1>Shoes Shopping</h1>
        <div className="cart-box">
          <NavLink to="/gocart" className="navlink">
            <i className="uil uil-shopping-cart-alt"></i>
            
            <p>{getdata.length}</p>
          </NavLink>
        </div>
      </header>
    </>
  );
};

export default Navbar;
