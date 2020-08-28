import React from "react";
import { Link } from "react-router-dom";

function Game(props) {
  const game = props.game;
  const deleteGame = props.deleteGame;

  return (
    <div className="gameCard">
      <h2 className="gameTitle">{game.name}</h2>

      <img
        className="game_bgImage"
        src={game.background_image}
        alt={game.name}
        width="100%"
      ></img>

      <div className="gameDetails">
        <p>
          <b>released:</b> {game.released}{" "}
        </p>
        <p>
          <b>rating:</b> {game.rating}/5{" "}
        </p>
        <progress value={game.rating}  max="5" />

        <p>
          <b>genres:</b>{" "}
        </p>
        {game.genres.map((genre) => (
          <div key={genre.id}>
            <img src={genre.image_background} alt={genre.name} width="50px" />
            <p>{genre.name}</p>
          </div>
        ))}

        <div className="btn">
          <Link to={"/jeu/screenshots/" + game.id}>Screenshots</Link>
        </div>
        <div
          className="btn"
          id={game.id}
          name="btnDeleteGame"
          onClick={deleteGame}
        >
          Delete
        </div>
      </div>
    </div>
  );
}

export default Game;
