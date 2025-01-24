import React from 'react';
import './Contestdash.css';
import SampleAnnouncements from '../SampleData/SampleAnnouncementss.json';
import Announcement from './Announcement.js';
import DataFinder from "../HelperClasses/DataFinder";

const Contestdash = () => {
  return (
    <div className="Contestdash">
      {DataFinder.getAllAnouncements().map((item) => (
        <Announcement key={item.id} text={item.text} />
      ))}
    </div>
  );
};

export default Contestdash;
