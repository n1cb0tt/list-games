import React, { useState } from "react";

import Game from "./Game";

function GameList(props) {
  const lstGames = props.lstGames;
  const setLstGames = props.setLstGames;
  const [filter, setFilter] = useState(false);
  const filterValue = 4.5;

  const deleteGame = (e) => {
    let gameId = parseInt(e.target.id);
    setLstGames((prevState) => {
      return prevState.filter((game) => game.id !== gameId);
    });
  };

  return (
    <div className="gameList">
      <div
        className="btn"
        id="btnFilterGame"
        name="btnFilterGame"
        onClick={() => setFilter((prevState) => !prevState)}
      >
        {filter ? "All Games" : "Best Games"}
      </div>
      <p>
        {
          lstGames.filter((game) => !filter || game.rating >= filterValue)
            .length
        }
        /{lstGames.length + " game"}
        {lstGames.length > 1 ? "s" : ""}
      </p>
      {lstGames
        .filter((game) => !filter || game.rating >= filterValue)
        .map((game, i) => (
          <Game key={i} game={game} deleteGame={deleteGame} />
        ))}
    </div>
  );
}

export default GameList;
