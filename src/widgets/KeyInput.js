import React, { useState } from 'react'
import axios from 'axios'

const KeyInput = ({ onSubmit }) => {
    const [text, setText] = useState(""); // Store input value
  
    const handleChange = (e) => {
      setText(e.target.value); // Update state with new input value
    };
  
    const handleSubmit = (e) => {
      e.preventDefault(); // Prevent form submission from refreshing page
      // Send input data to parent component via callback
      onSubmit(text);
    };
  
    return (
      <div>
        <input 
          type="text" 
          value={text} 
          onChange={handleChange} 
          placeholder="Enter a number" 
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    );
  };
  

export default KeyInput; 