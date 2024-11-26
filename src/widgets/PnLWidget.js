import React, { useState } from 'react'
import PnLWidget from "./PnLWidget.css";
import samplePnLData from "../SampleData/samplePnlData.json";
import sampleStockWidgetData from "../SampleData/sampleStockWidgetData.json";

const PnLDashBoard = () => {

    
    const calculatePnL = () => { // Function to calculate PnL for each trade
      // Iterate over user trades
      const pnlResults = samplePnLData.map(trade => {
        // Find the matching market price for the trade's ticker compare those to
        const marketData = sampleStockWidgetData.find(stock => stock.ticker === trade.ticker);
  
        if (!marketData) {
          console.warn(`Market data not found for ticker: ${trade.ticker}`);
          return { ...trade, pnl: 0 }; // No market data, no PnL
        }
  
        const marketPrice = marketData.price; // Current market price
        let pnl = 0;
  
        // Calculate PnL based on whether the trade is a buy or sell
        if (trade.is_buy) { // checks if trqde is a buy , the pnl is calculated by subracting trade price from market price
          pnl = (trade.price - marketPrice) * trade.quantity;
        } else if (trade.is_sell) { // checks if trade is a sell, the pnl is calculated by subracting market price from trade price
          pnl = (marketPrice - trade.price) * trade.quantity;
        }
        
  
        // Return trade details with calculated PnL and if loss or buy
        return { ...trade, pnl: pnl.toFixed(2), result : (pnl > 0 ? "Profit" : "Loss")};
      });
  
      return pnlResults;
    };
  // Calculate all PnL results
  const pnlData = calculatePnL();
  const totalPnl = pnlData.reduce((total, trade) => total + parseFloat(trade.pnl), 0);

  return (
    <div className="pnl-dashboard">
      <h2>PnL Dashboard</h2>
  
      {/* Display the Total PnL */}
      <div className="total-pnl">
        <strong>Total PnL: </strong>
        <span className={totalPnl >= 0 ? "positive" : "negative"}>
          ${totalPnl.toFixed(2)}
        </span>
      </div>
  
      {/* PnL Table */}
      <div className = "pnl-table-container">
        <div className="pnl-table">
            <div className="pnl-row header">
            <div>Ticker</div>
            <div>Action</div>
            <div>Trade Price</div>
            <div>Market Price</div>
            <div>Quantity</div>
            <div>PnL</div>
        </div>
        {pnlData.map((trade, index) => {
          const marketData = sampleStockWidgetData.find(stock => stock.ticker === trade.ticker);
          return (
            <div className="pnl-row" key={index}>
              <div>{trade.ticker}</div>
              <div>{trade.is_buy ? "Buy" : "Sell"}</div>
              <div>${trade.price.toFixed(2)}</div>
              <div>${marketData ? marketData.price.toFixed(2) : "N/A"}</div>
              <div>{trade.quantity}</div>
              <div className={trade.pnl >= 0 ? "positive" : "negative"}>
                ${trade.pnl}
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
};

export default PnLDashBoard;