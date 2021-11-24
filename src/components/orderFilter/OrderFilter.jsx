import React from "react";
import "./orderFilter.scss";

const OrderFilter = () => {
  return (
    <div>
      <div className="brand">
        <div className="brand-header">
          <h3>
            Price
            <span className="text-remove-selected text-right">
              Remove filter
            </span>
          </h3>
        </div>
        <ul className="list-group flex-row  flex-wrap">
          <li className="list-group-item flex-fill">
            <label className="custom-radio-btn">
              Low to high
              <input
                value="asc"
                type="radio"
                name="orderByPrice"
                className="custom-radio-btn__input"
              />
              <span className="custom-radio-btn__span"></span>
            </label>
          </li>
          <li className="list-group-item flex-fill">
            <label className="custom-radio-btn">
              High to low
              <input
                value="desc"
                type="radio"
                name="orderByPrice"
                className="custom-radio-btn__input"
              />
              <span className="custom-radio-btn__span"></span>
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OrderFilter;
