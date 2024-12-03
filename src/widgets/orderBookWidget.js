import React, { useState } from "react";
import PriceLevelWidget from "./PriceLevelWidget";
import "./OrderBookWidget.css";
import SampleOrderBookData from "../SampleData/SampleOrderBookData.json";

const OrderBookWidget = () => {
  const [selectedStock, setSelectedStock] = useState(Object.keys(SampleOrderBookData)[0]);

  const handleStockChange = (event) => {
    setSelectedStock(event.target.value);
  };

  const stockData = SampleOrderBookData[selectedStock] || [];

  return (
    <div className="order-book-widget">
      <h1>Order Book</h1>

      {/* Dropdown to select stock */}
      <select className="stock-selector" value={selectedStock} onChange={handleStockChange}>
        {Object.keys(SampleOrderBookData).map((ticker) => (
          <option key={ticker} value={ticker}>
            {ticker}
          </option>
        ))}
      </select>

      {/* Header Row */}
      <div className="price-level-header">
        <span className="header price-header">Price</span>
        <span className="header buy-header">Buy</span>
        <span className="header sell-header">Sell</span>
      </div>

      {/* Render Price Levels */}
      <div className="price-levels">
        {stockData.map((level, index) => (
          <PriceLevelWidget
            key={index}
            price={level.price}
            buyAmount={level.buy_amount}
            sellAmount={level.sell_amount}
          />
        ))}
      </div>
    </div>
  );
};

export default OrderBookWidget;

