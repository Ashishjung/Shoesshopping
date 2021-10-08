import React, { useContext } from "react";
import "./Allproduct.css";
import { productcontext } from "./Cartcontext";
const Allproduct = () => {
  let { data, SendtoCart } = useContext(productcontext);
  return (
    <>
      <div className="product-box">
        {data.map((elements, indx) => {
          return (
            <>
              <div className="data-boxes" key={elements.id}>
                <img src={elements.img} alt="shoes" className="shoes-img"></img>
                <div className="shoe-detail">
                  <h2>{elements.name}</h2>
                  <h2>${elements.price}</h2>
                </div>
                <h6>{elements.color}</h6>
                <h5
                  onClick={() => {
                    SendtoCart(elements.id);
                  }}
                >
                  Add to cart
                </h5>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Allproduct;
