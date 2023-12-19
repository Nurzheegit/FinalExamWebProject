import React from "react";
import "./sports-card.css";
import { Link } from "react-router-dom";

const SportCard = ({ tournament, stadium, country, start, match, query}) => {
  return (
    <div class="sport-item-card">
      <div href="#" class="sport-card-item-container">
        <div class="ag-courses-item_bg"></div>
        <Link to={`/weather?q=${query}`}>
        <div class="sport-item-card-title">
          {match} <br />
          {`${tournament}, ${stadium}, ${country}`}
        </div>

        <div class="sport-item-card-body">
          Start: <span class="sport-item-card-body-item">{start}</span>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default SportCard;
