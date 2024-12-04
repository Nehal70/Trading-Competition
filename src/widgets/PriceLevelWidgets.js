import React from "react";
import "./PriceLevelWidgets.css";

const PriceLevelWidget = ({ price, buyAmount, sellAmount }) => {
  return (
    <div className="price-level-widget">
      <span className="price">{price}</span>
      <span className="buy-amount">{buyAmount}</span>
      <span className="sell-amount">{sellAmount}</span>
    </div>
  );
};

export default PriceLevelWidget;

