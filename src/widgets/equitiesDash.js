import React from 'react'
import sampleStockWidgetData from "../SampleData/sampleStockWidgetData.json";
import "../Dashboard.css";



const equitiesDash = () => {
    const allTickers = sampleStockWidgetData.map(stock => stock.ticker);
    return (
        <div className="widget equities">
          {allTickers.map(stock => (
            <StockWidget ticker={stock.ticker} />
          ))}
        </div>
      );
}