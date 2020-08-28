import React from "react";
import { Link } from "react-router-dom";

function Screenshots(props) {
  const gameId = parseInt(props.match.params.gameId);
  const lstGames = props.lstGames;

  return (
    <div>
      <div className="btn">
        <Link to="/">home</Link>
      </div>
      <h2>
        Screenshots of {lstGames.filter((game) => game.id === gameId)[0].name}
      </h2>
      {lstGames
        .filter((game) => game.id === gameId)[0]
        .short_screenshots.map((screenshot, i) => (
          <img
            className="screenshot"
            key={i}
            src={screenshot.image}
            alt={"screenshot" + i}
          />
        ))}
    </div>
  );
}

export default Screenshots;
