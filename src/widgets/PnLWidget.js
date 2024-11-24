import React from 'react';
import PnLWidget from "./PnLWidget.css";
import samplePnLData from "../SampleData/samplePnLData.json";
import sampleStockWidgetData from "../SampleData/sampleStockWidgetData.json";


const PnLDashBoard = ({ ticker }) => {

    const stock = samplePnLData.find(stock => stock.ticker === ticker);
    


}
