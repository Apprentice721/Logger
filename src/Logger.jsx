import React, { useEffect, useState } from "react";
import { getTime } from "./resources/time.jsx";
import { writeDb } from "./resources/dbApi.jsx";

const emptyRecord = {
  date: "",
  category: "",
  description: "",
  start: "",
  stop: "",
};

let startStop = true;

export default function Logger({ recordsUpdated }) {
  const [timeRecord, setTimeRecord] = useState(emptyRecord);

  useEffect(() => {
    if (timeRecord.stop !== "") {
      writeDb(timeRecord);
      recordsUpdated(true);
      setTimeRecord((timeRecord) => {
        return {
          date: getTime().monthDate,
          category: "",
          description: "",
          start: "",
          stop: "",
        };
      });
    }
  }, [timeRecord]);

  function startStopTimer() {
    let currentTime = getTime(startStop);
    setTimeRecord((timeRecord) => {
      return {
        ...timeRecord,
        date: currentTime.monthDate,
      };
    });

    startStop ? setStartTime(currentTime) : setStopTime(currentTime);
  }

  function setStartTime(currentTime) {
    setTimeRecord((timeRecord) => {
      return {
        ...timeRecord,
        start: currentTime.hourMin,
      };
    });

    startStop = !startStop;
  }

  function setStopTime(currentTime) {
    if (timeRecord.category === "") {
      alert("Please enter a category.");
      return;
    }
    if (timeRecord.description === "") {
      alert("Please enter a description.");
      return;
    }

    setTimeRecord((timeRecord) => {
      return {
        ...timeRecord,
        stop: currentTime.hourMin,
      };
    });

    startStop = !startStop;
  }

  function handleChange(event) {
    event.persist();
    setTimeRecord((timeRecord) => {
      return {
        ...timeRecord,
        [event.target.id]: event.target.value,
      };
    });
  }

  return (
    <>
      <div style={{ textAlign: "bottom" }}>
        <h1 style={{ display: "inline", marginRight: "10px" }}>Timer</h1>
        <button
          style={{ background: startStop ? "#00ee00" : "#ff0000" }}
          onClick={() => {
            startStopTimer();
          }}
        >
          Start/Stop
        </button>
      </div>
      <label>
        <h3>Category: </h3>
      </label>
      <input
        id="category"
        type="text"
        value={timeRecord.category}
        onChange={handleChange}
      />
      <label>
        <h3>Description: </h3>
      </label>
      <input
        id="description"
        type="text"
        value={timeRecord.description}
        onChange={handleChange}
      />
    </>
  );
}
