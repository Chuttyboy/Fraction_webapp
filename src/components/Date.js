import React, { useState } from "react";
import ReactDOM from "react-dom";
import RangePicker from "react-range-picker";


import "./styles.css";

const PickerWithCustomePlaceholder = () => {
  const placeholder = ({ startDate, endDate }) => {
    if (!startDate) {
      return <div className="placeholder"> Select date and time range </div>;
    }
    return (
      <div className="placeholderWrap">
        <div className="placeholder">From - {startDate.toLocaleString()}</div>
        {endDate && (
          <div className="placeholder">To - {endDate.toLocaleString()}</div>
        )}
      </div>
    );
  };
  return (
    <RangePicker
      placeholder={placeholder}
      selectTime
      onDateSelected={(f, l) => {
        console.log(f, l);
      }}
      onClose={() => {
        console.log(" closed ");
      }}
    />
  );
};

function App() {
  const onDateChanges = (date, date2) => console.log(" date is ", date, date2);
  return (
    <div className="App">
      <h3> Select Date Range</h3>
      <RangePicker onDateSelected={onDateChanges} />
      <br />
      <br />
      <br />
      <h3>With custom placeholder</h3>
      <PickerWithCustomePlaceholder />
      <br />
      <br />
      <br />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
