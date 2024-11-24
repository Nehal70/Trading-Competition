import React from 'react';
import './Contestdash.css';
import SampleAnnouncements from '../SampleData/SampleAnnouncements.json';
import Announcement from './Announcement.js';

const Contestdash = () => {
  return (
    <div className="Contestdash">
      {SampleAnnouncements.map((item) => (
        <Announcement key={item.id} text={item.text} />
      ))}
    </div>
  );
};

export default Contestdash;
