import React, {useState} from "react";
import "./Dashboard.css";
import StockWidget from "../widgets/StockWidget.js"
import KeyInput from "../widgets/KeyInput.js"
import EquityDashboard from "../widgets/EquityDashboard.js" 
import ChartWidget from '../widgets/ChartWidget.js';
import EquitiesDashboard from "../widgets/EquityDashboard.js" 
import CurrentPositionWidget from "../widgets/CurrentPositionWidget.js";
import Contestdash from "../widgets/Contestdash.js"
import PnLWidget from "../widgets/PnLWidget.js";
import RecentOrdersWidget from "../widgets/RecentOrdersWidget.js";
import samplePnlData from "../SampleData/samplePnlData.json";
import BuyButton from "../widgets/BuySellWidget.js";
import OrderBookWidget from "../widgets/OrderBookWidgetss.js";
import DataFinder from "../HelperClasses/DataFinder";

const Dashboard = () => {
    

    const [selectedStock, setSelectedStock] = useState("NVDA");
    const [text, setText] = useState(""); // Store input value
    const [message, setMessage] = useState(""); // Store message to display
    const predefinedNumber = "12345"; // The number to match with
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputSubmit = (data) => {
      setText(data); 
      let outputMSG = ""; // Use 'let' for reassignment
      let result = false; // Use 'let' for reassignment
  
      // Proper destructuring for object
      [outputMSG, result] = DataFinder.initializeKey(data);
      // Process result
      if (result) {
          setMessage(outputMSG);
          setIsSubmitted(true);
      } else {
          setMessage(outputMSG);
          setIsSubmitted(true);
      }
    /** 
    if (data === predefinedNumber) {
      setMessage("John Doe | GATech | #001");
    } else {
      setMessage("Sorry, that's not the correct number.");
    }
    setIsSubmitted(true);
    */
    };

    const handleStockClick = (stock) => {
      setSelectedStock(stock);
    };
  
    //const filteredOrders = samplePnlData.filter((order) => order.ticker === selectedStock);
    const filteredOrders = DataFinder.getDataFilter(samplePnlData, 'ticker', selectedStock);

    return (
      <div className="dashboard">
            <div className="widget user-info">
                User Authentication
                {!isSubmitted && <KeyInput onSubmit={handleInputSubmit} />} {/* Conditionally render input */}
                <p>{message}</p> {/* Display message based on the match */}
            </div>
            <div className="widget chart"><ChartWidget selectedStock={selectedStock}/></div>
            <div className="widget current-stock">
              <BuyButton selectedStock={selectedStock}></BuyButton>
            </div>
            <div className="widget equities">
              <EquityDashboard selectedStock={selectedStock} setSelectedStock={setSelectedStock}/>
            </div>
            <div className="widget order-book"><OrderBookWidget selectedStock={selectedStock} orders={samplePnlData}/></div>
            <div className="widget position-info">
              <CurrentPositionWidget selectedStock={selectedStock}/>
            </div>
            <div className="widget contest-info">Contest Information
              <Contestdash/>
            </div>
            <div className="widget total-pnl"><PnLWidget/></div>
            <div className="widget recent-orders">Recent Orders
              <RecentOrdersWidget orders={filteredOrders}/></div>
      </div>
    );
  };
  
  export default Dashboard;
