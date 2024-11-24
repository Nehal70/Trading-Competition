import React from 'react'
import sampleStockWidgetData from "../SampleData/sampleStockWidgetData.json";
import "../Dashboard/Dashboard.css";
import StockWidget from "./StockWidget.js";



const equitiesDash = () => {
    const allTickers = sampleStockWidgetData.map(stock => stock.ticker);
    return (
        <div className="widget equities">
          {allTickers.map(ticker=> (
            <StockWidget ticker={ticker} />
          ))}
        </div>
      );
}

export default equitiesDash;