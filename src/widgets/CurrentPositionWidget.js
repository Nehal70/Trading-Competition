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
    const[orderType, setOrderType] = useState('Market');
    const[amount, setAmount] = useState(100);

    const handleBuy = () => {
        console.log('Buy order placed for ${selectedStock} with order type: ${orderType}')
    };

    const handleSell = () => {
        console.log(`Sell order placed for ${selectedStock} with order type: ${orderType}`);
    };

    return (
        <div className = "widget-container">

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

            
            <div className="buy-sell-widget">
                <select
                    className="order-type-dropdown"
                    value={orderType}
                    onChange={(e) => setOrderType(e.target.value)}
                >
                    <option value="market">Market</option>
                    <option value="limit">Limit</option>
                    <option value="stop">Stop</option>
                </select>
                <button className="buy-button" onClick={handleBuy}>
                       Buy {orderType.toUpperCase()}
                </button>
                <button className="sell-button" onClick={handleSell}>
                    Sell {orderType.toUpperCase()}
                </button>
            </div>.
        </div>
        
    );
};

export default CurrentPositionWidget;
