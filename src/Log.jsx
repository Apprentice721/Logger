import React, { useEffect, useState } from "react";
import { getRecords } from "./resources/dbApi";

export default function Log({ updated, recordsUpdated }) {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    getRecords()
      .then((res) => {
        setRecords(res);
      })
      .catch((err) => console.log("API Call Error: " + err));
  }, [updated]);

  return (
    <>
      <table style={{ width: "100%", marginTop: "10px" }}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Description</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {records.map((r) => (
            <tr key={r.id}>
              <td>{r.date}</td>
              <td>{r.category}</td>
              <td>{r.description}</td>
              <td>{r.start}</td>
              <td>{r.stop}</td>
              <td>{}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
