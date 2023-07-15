import React, { useState } from "react";
import { DateRange } from "react-date-range";
import moment from "moment";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
// import "./styles.css";

function App() {
  const now = moment();
  const [dateRange, setDateRange] = useState([
    {
      startDate: now.toDate(),
      endDate: now.toDate(),
      key: "selection",
    },
  ]);
  const [startTime, setStartTime] = useState(now.format("HH:mm"));
  const [endTime, setEndTime] = useState(now.format("HH:mm"));

  const handleSelect = (ranges: any) => {
    setDateRange([ranges.selection]);
  };

  const handleStartTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStartTime(event.target.value);
  };

  const handleEndTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEndTime(event.target.value);
  };

  const selectedStartDate = moment(dateRange[0].startDate).format("DD-MM-YYYY");
  const selectedEndDate = moment(dateRange[0].endDate).format("DD-MM-YYYY");

  return (
    <div className="App">
      <h1>Date Picker</h1>
      <div className="date-range-container">
        <div className="time-range-container">
          <label>Start Time:</label>
          <input
            type="time"
            className="time-input"
            value={startTime}
            onChange={handleStartTimeChange}
          />
          <label>End Time:</label>
          <input
            type="time"
            className="time-input"
            value={endTime}
            onChange={handleEndTimeChange}
          />
        </div>
        <DateRange
          minDate={now.toDate()}
          // maxDate={null}
          ranges={dateRange}
          onChange={handleSelect}
          className="time-range-container"
          color="red"
          


        />
      </div>
      <div className="selected-range-container">
        <p>
          Selected Start Date: {selectedStartDate}
          <br />
          Selected End Date: {selectedEndDate}
          <br />
          Selected Start Time: {startTime}
          <br />
          Selected End Time: {endTime}
        </p>
      </div>
    </div>
  );
}

export default App;
