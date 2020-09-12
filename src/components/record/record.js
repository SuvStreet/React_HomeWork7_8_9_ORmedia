import React from "react";

const Record = ({ ItemsInfo, field, label }) => {
    return (
      <li className="list-group-item">
        <span className="term">{label}</span>
        <span>{ItemsInfo[field]}</span>
      </li>
    )
}

export default Record;