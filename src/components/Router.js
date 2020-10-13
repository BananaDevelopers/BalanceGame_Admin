import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import CreateGame from "routes/Admin/CreateGame";
import EditGame from "routes/Admin/EditGame";
import GameDetail from "routes/Admin/GameDetail";
import GameList from "routes/Admin/GameList";
import AdminLogin from "routes/Admin/AdminLogin";
import Results from "routes/Admin/Results";
import GameStart from "routes/Client/GameStart";
import Navigation from "components/Navigation";
import Gaming from "routes/Client/Gaming";
import GameResult from "routes/Client/GameResult";

const AppRouter = ({ isAdmin, refreshUser, userObj }) => {
  return (
    <Router>
      {isAdmin && <Navigation />}
      <Switch>
        {isAdmin ? (
          <>
            <Route exact path="/createGame" component={CreateGame} />
            <Route exact path="/gameList" component={GameList} />
            <Route exact path="/gameDetail/:id" component={GameDetail} />
            <Route exact path="/editGame/:id" component={EditGame} />
            <Route exact path="/results/:id" component={Results} />
          </>
        ) : (
          <>
            <Route exact path="/" component={GameStart} />
            <Route exact path="/admin" component={AdminLogin} />
            <Route exact path="/game" component={Gaming} />
            <Route exact path="/game/result" component={GameResult} />
          </>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;