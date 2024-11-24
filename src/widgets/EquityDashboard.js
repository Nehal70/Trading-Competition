import React from 'react'
import sampleStockWidgetData from "../SampleData/sampleStockWidgetData.json";
import "../Dashboard/Dashboard.css";
import StockWidget from "./StockWidget.js";

const EquitiesDashboard = () => {
    const allTickers = sampleStockWidgetData.map(stock => stock.ticker);
    console.log(allTickers)
    return (
        <>
          {allTickers.map(stock => (
            <StockWidget ticker={stock} />
          ))}
        </>
      );
}

export default EquitiesDashboard; 