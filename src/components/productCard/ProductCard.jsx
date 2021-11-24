import React from "react";
import "./productCard.scss";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <>
      <div className="card">
        <Link to="/">
          <div className="card-image">
            <img
              className="img"
              alt="test"
              src="https://raw.githubusercontent.com/luisDanielRoviraContreras/img/master/files/1.png"
            />
            <img
              className="bg"
              alt="test"
              src="https://raw.githubusercontent.com/luisDanielRoviraContreras/img/master/files/1.png"
            />
          </div>
          <div className="card-text">
            <h3>Nike</h3>
            <p>
              The Nike SuperRep Go shoes combine comfortable foam cushioning,
            </p>
          </div>
        </Link>
        <div className="card-price">10$</div>
        <div className="card-btn">
          <button className="add">Add To Cart</button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
