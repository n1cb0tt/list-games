import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";

import GameList from "./components/GameList";
import Screenshots from "./components/Screenshots";

import "./App.css";

function App() {
  const [lstGames, setLstGames] = useState([]);

  useEffect(() => {
    axios
      .get("https://wild-games.herokuapp.com/api/v1")
      .then((res) => {
        console.log(res.data[0]);
        setLstGames(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1>Game List</h1>
      <Switch>
        <Route exact path="/">
          <GameList lstGames={lstGames} setLstGames={setLstGames} />
        </Route>
        <Route
          path="/jeu/screenshots/:gameId"
          render={(props) => <Screenshots {...props} lstGames={lstGames} />}
        />
      </Switch>
    </div>
  );
}

export default App;
