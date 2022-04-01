import React, { useState, useEffect } from "react";
import logo from "./resources/Tree3.png";
import { getWeek } from "./resources/time.jsx";

export default function Sky() {
  const [weekNumber, setWeekNumber] = useState(0);

  useEffect(() => {
    setWeekNumber((weekNumber) => {
      return getWeek().weekNumber;
    });
  }, [weekNumber]);

  return (
    <header className="sky">
      <img src={logo} alt="Tree Logo"></img>
      <p>Logger</p>

      <div style={{ marginLeft: "auto", marginRight: "20px" }}>
        <h4>Week #: {weekNumber}</h4>
        <h4>Weekly Hours: {}</h4>
        <h4>Total Hours: {}</h4>
      </div>
    </header>
  );
}
