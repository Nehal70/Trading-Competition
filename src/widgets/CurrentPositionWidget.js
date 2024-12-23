import React, { useState } from 'react';
import sampleStockWidgetData from "../SampleData/sampleStockWidgetData.json";
import samplePnlData from "../SampleData/samplePnlData.json";
import "./CurrentPositionWidget.css";

const CurrentPositionWidget = ({ selectedStock }) => {
    const stock = sampleStockWidgetData.find(stock => stock.ticker === selectedStock);
    const stockPosition = samplePnlData.find(position => position.ticker === selectedStock);

    let currentPrice = "N/A";
    let buyPrice = "N/A";
    let quantity = "N/A"
    let totalGainLoss = "N/A"
    let pnlChange = "N/A"

    if (stock != null && stockPosition != null) {
        console.log("if reached")
        currentPrice = stock.price;
        buyPrice = stockPosition.price;
        quantity = stockPosition.quantity * (stockPosition.is_sell == true ? -1 : 1);
        totalGainLoss = ((currentPrice - buyPrice) * quantity).toFixed(2); // Calculate total gain/loss and round to 2 decimal places
        pnlChange = totalGainLoss >= 0 ? 'pnL-positive' : 'pnL-negative';
    }

    return (
        <div className="position-widget">
            <span className="ticker">{selectedStock != null ? selectedStock : "Select a Stock"}</span>
            <table className="position-table">
                <tr>
                    <td>Current Price: </td>
                    <td>{currentPrice}</td>
                </tr>
                <tr>
                    <td>Buy Price: </td>
                    <td>{buyPrice}</td>
                </tr>
                <tr>
                    <td>Quantity: </td>
                    <td>{quantity}</td>
                </tr>
                <tr>
                    <td>Total PnL: </td>
                    <td className={pnlChange}>{totalGainLoss}</td>
                </tr>
            </table>
        </div>
    );
};

export default CurrentPositionWidget;
