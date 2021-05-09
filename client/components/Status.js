import React from "react";
import "./Status.css";

const Status = ({ currentStatus }) => {
  const style =
    currentStatus.slice(-9) === "incorrect"
      ? { color: "red" }
      : { color: "green" };
  return (
    <div className="status">
      <h2 className="status-title">Status</h2>
      <p style={style} className="status-message">
        {currentStatus}
      </p>
    </div>
  );
};

export default Status;
