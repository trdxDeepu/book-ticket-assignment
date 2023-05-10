import React from "react";
import { Link } from "react-router-dom";

import "./showlist.css";

function ShowList({ shows }) {
  return (
    <div className="shows-list">
      <h1>Show List</h1>
      <div className="card-list">
        {shows.map((show) => (
          <div className="card-item" key={show.show.id}>
            <Link to={`/summary/${show.show.id}`} className="card-link">
              <div className="card-image">
                <img
                  src={show.show.image?.medium}
                  alt={show.show.name}
                />
              </div>
              <div className="card-details">
                <h2 className="card-title">{show.show.name}</h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowList;
