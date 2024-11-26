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

const Dashboard = () => {
    

    const [selectedStock, setSelectedStock] = useState(null);
    const [text, setText] = useState(""); // Store input value
    const [message, setMessage] = useState(""); // Store message to display
    const predefinedNumber = "12345"; // The number to match with
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputSubmit = (data) => {
    setText(data); 
    if (data === predefinedNumber) {
      setMessage("John Doe | GATech | #001");
    } else {
      setMessage("Sorry, that's not the correct number.");
    }
    setIsSubmitted(true);
  };

    return (
      <div className="dashboard">
            <div className="widget user-info">
                User Authentication
                {!isSubmitted && <KeyInput onSubmit={handleInputSubmit} />} {/* Conditionally render input */}
                <p>{message}</p> {/* Display message based on the match */}
            </div>
            <div className="widget chart"><ChartWidget/></div>
            <div className="widget current-stock">Current Stock: {selectedStock}</div>
            <div className="widget equities">
              <EquityDashboard selectedStock={selectedStock} setSelectedStock={setSelectedStock}/>
            </div>
            <div className="widget order-book">Order Book</div>
            <div className="widget position-info">
              <CurrentPositionWidget selectedStock={selectedStock}/>
            </div>
            <div className="widget contest-info">Contest Information
              <Contestdash/>
            </div>
            <div className="widget total-pnl">Total PNL<PnLWidget/></div>
            <div className="widget recent-orders">Recent Orders</div>
      </div>
    );
  };
  
  export default Dashboard;