import React from "react";
export default function Search({ value, onChange, onKeyPress }) {
  return (
    <div className="form">
      <input
        type="text"
        placeholder="Enter City...."
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
        className="search"
      />
    </div>
  );
}
