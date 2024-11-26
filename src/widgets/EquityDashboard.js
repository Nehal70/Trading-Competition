import React, { useState } from 'react'
import sampleStockWidgetData from "../SampleData/sampleStockWidgetData.json";
import "../Dashboard/Dashboard.css";
import StockWidget from "./StockWidget.js";

const EquitiesDashboard = ({ selectedStock, setSelectedStock }) => {



    const handleStockClick = (ticker) => {
      setSelectedStock(ticker);
    }

    const allTickers = sampleStockWidgetData.map(stock => stock.ticker);
    return (
        <>
         {allTickers.map(stock => (
            <div 
              onClick={() => handleStockClick(stock)} 
            >
              <StockWidget ticker={stock} />
            </div>
          ))}   
        </>
      );
}

export default EquitiesDashboard; 