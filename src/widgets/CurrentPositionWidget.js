import React, { useState } from 'react';
import sampleStockWidgetData from "../SampleData/sampleStockWidgetData.json";
import samplePnlData from "../SampleData/samplePnlData.json";
import "./CurrentPositionWidget.css";

const CurrentPositionWidget = () => {
    const [currentStock, setCurrentStock] = useState("NVDA");
    const stock = sampleStockWidgetData.find(stock => stock.ticker === currentStock);
    const stockPosition = samplePnlData.find(position => position.ticker === currentStock);

    const currentPrice = stock.price;
    const buyPrice = stockPosition.price;
    const quantity = stockPosition.quantity * (stockPosition.is_sell == true ? -1 : 1);
    const totalGainLoss = ((currentPrice - buyPrice) * quantity).toFixed(2); // Calculate total gain/loss and round to 2 decimal places
    const pnlChange = totalGainLoss >= 0 ? 'pnL-positive' : 'pnL-negative';

    return (
        <div className="position-widget">
            <span className="ticker">{currentStock}</span>
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
