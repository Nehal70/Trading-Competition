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
    const[price, setPrice] = useState('');
    const[amount, setAmount] = useState(10);

    const handleBuy = () => {
        const orderType = (!price || Number(price) === 0) ? "Market" : `Limit (Price:  + ${price})`;
        console.log(
            `Buy order placed for ${amount} shares of ${selectedStock}  at a price of ${price} with order type: ${orderType}.`
        );
    };

    const handleSell = () => {
        const orderType = price === (!price || Number(price) === 0) ? "Market" : `Limit (Price: ${price})`;
        console.log(
            `Sell order placed for ${amount} shares of ${selectedStock} at a price of ${price} with order type: ${orderType} order.`
        );
    }
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
                <input
                    type="number"
                    className="quantity-input"
                    value={amount}  // Display the current state value (default is 100)
                    onChange={(e) => setAmount(Number(e.target.value))} // Update state as user types
                    placeholder="Quantity"
                />
                <input
                    type="number"
                    className="price-input"
                    value={price}  // Display the current state value
                    onChange={(e) => setPrice(Number(e.target.value))} // Update state as user types
                    placeholder="Enter Price(If Blank Market Order)"
                />
                <button className="buy-button" onClick={handleBuy}>
                    Buy {!price || Number(price) === 0 ? "Market" : `Limit (${price})`}
                </button>
                <button className="sell-button" onClick={handleSell}>
                    Sell {!price || Number(price) === 0  ? "Market" : `Limit (${price})`}
                </button>
            </div>.
        </div>
        
    );
};

export default CurrentPositionWidget;
