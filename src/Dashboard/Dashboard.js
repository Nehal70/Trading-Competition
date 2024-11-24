import React, {useState} from "react";
import "./Dashboard.css";
import StockWidget from "../widgets/StockWidget.js"
import KeyInput from "../widgets/KeyInput.js"
import EquitiesDash from "../widgets/EquitiesDash.js" 

const Dashboard = () => {

    const [text, setText] = useState(""); // Store input value
    const [message, setMessage] = useState(""); // Store message to display
    const predefinedNumber = "12345"; // The number to match with
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputSubmit = (data) => {
    setText(data); // Save the input value from KeyInput
    // Check if the input matches the predefined number
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
                User Info
                {!isSubmitted && <KeyInput onSubmit={handleInputSubmit} />} {/* Conditionally render input */}
                <p>{message}</p> {/* Display message based on the match */}
            </div>
            <div className="widget chart">Chart</div>
            <div className="widget current-stock">Current Stock: AAPL</div>
            <div className="widget equities">
              <EquitiesDash />
            </div>
            <div className="widget order-book">Order Book</div>
            <div className="widget position-info">Position Information</div>
            <div className="widget contest-info">Contest Information</div>
            <div className="widget total-pnl">Total PNL</div>
            <div className="widget recent-orders">Recent Orders</div>
      </div>
    );
  };
  
  export default Dashboard;