import React, { useState } from 'react'
import "./PnLWidget.css";
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
          pnl = (marketPrice - trade.price) * trade.quantity;
        } else if (trade.is_sell) { // checks if trade is a sell, the pnl is calculated by subracting market price from trade price
          pnl = (trade.price - marketPrice) * trade.quantity;
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
      {/* Display Total PnL */}
      <div className="total-pnl">
        <strong>Total PnL: </strong>
        <span className={totalPnl >= 0 ? "positive" : "negative"}>
          ${totalPnl.toFixed(2)}
        </span>
      </div>
  
      {/* PnL Table */}
      <div className="pnl-table-container">
        <table className="pnl-table">
          {/* Table Header */}
          <thead>
            <tr className="header">
              <th>Ticker</th>
              <th>Action</th>
              <th>Trade Price</th>
              <th>Market Price</th>
              <th>Quantity</th>
              <th>PnL</th>
            </tr>
          </thead>
  
          {/* Table Body */}
          <tbody>
            {pnlData.map((trade, index) => {
              const marketData = sampleStockWidgetData.find(
                (stock) => stock.ticker === trade.ticker
              );
              return (
                <tr key={index}>
                  <td>{trade.ticker}</td>
                  <td>{trade.is_buy ? "Buy" : "Sell"}</td>
                  <td>${trade.price.toFixed(2)}</td>
                  <td>${marketData ? marketData.price.toFixed(2) : "N/A"}</td>
                  <td>{trade.quantity}</td>
                  <td className={trade.pnl >= 0 ? "positive" : "negative"}>
                    ${trade.pnl}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
  
  
};

export default PnLDashBoard;