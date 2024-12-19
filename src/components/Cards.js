import React from "react";
import "./Cards.scss";

const Cards = () => {
  return (
    <div className="cards-container">
      <div className="card">
        <h3>Total Users</h3>
        <p>1,234</p>
      </div>
      <div className="card">
        <h3>Total Sales</h3>
        <p>$12,345</p>
      </div>
      <div className="card">
        <h3>Total Revenue</h3>
        <p>$45,678</p>
      </div>
    </div>
  );
};

export default Cards;
