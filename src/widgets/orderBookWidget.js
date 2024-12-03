import React, { useState } from "react";
import PriceLevelWidget from "../PriceLevelWidget.js"; // Your single price-level component
import "./OrderBookWidget.css"; // CSS for the widget
import sampleOrderBookData from "../SampleData/SampleOrderBookData.json"; // Import the JSON file

const OrderBookWidget = () => {
  const [selectedStock, setSelectedStock] = useState(Object.keys(sampleOrderBookData)[0]); // Default to the first stock

  const handleStockChange = (event) => {
    setSelectedStock(event.target.value);
  };

  return (
    <div className="order-book-widget">
      <h1>Order Book</h1>

      {/* Dropdown to select stock */}
      <select
        className="stock-selector"
        value={selectedStock}
        onChange={handleStockChange}
      >
        {Object.keys(sampleOrderBookData).map((ticker) => (
          <option key={ticker} value={ticker}>
            {ticker}
          </option>
        ))}
      </select>

      {/* Render price levels for the selected stock */}
      <div className="price-levels">
        {sampleOrderBookData[selectedStock].map((level, index) => (
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
