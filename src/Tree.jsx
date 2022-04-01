import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Sky from "./Sky";
import Branches from "./Branches";
import Ground from "./Ground";
import Log from "./Log";
import Logs from "./Logs";
import Boards from "./Boards";
import "./Forest.css";

export default function Tree() {
  const [updated, setUpdated] = useState(true);

  return (
    <>
      <div className="content">
        <Sky />
        <div
          className="menu"
          style={{
            display: "table-cell",
            height: "441.33px",
            width: "170px",
            verticalAlign: "top",
            minWidth: "140px",
          }}
        >
          <Branches recordsUpdated={setUpdated} />
        </div>
        <div
          className="main"
          style={{
            display: "table-cell",
            width: "87%",
            padding: "0 20px 0 20px ",
          }}
        >
          <Routes>
            <Route
              path="/"
              element={<Log updated={updated} recordsUpdated={setUpdated} />}
            />
            <Route path="/logs" element={<Logs />} />
            <Route path="/boards" element={<Boards />} />
          </Routes>
        </div>
      </div>
      <Ground />
    </>
  );
}
