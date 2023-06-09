import React from "react";
import "./Entry.css";
import FavoriteButton from "../FavoriteButton/index.js";
export function Entry({ date, motto, notes, onToggleFavorite, isFavorite, id }) {
  return (
    <div className="entry">
      <div className="entry__date-container">
        <p className="entry-date">{date}</p>
      </div>
      <div className="entry__text-container">
        <h3 className="entry__title">{motto}</h3>
        <p className="entry__text">{notes}</p>
        <FavoriteButton onToggleFavorite={onToggleFavorite} isFavorite={isFavorite} id={id}/>
      </div>
    </div>
  );
}
