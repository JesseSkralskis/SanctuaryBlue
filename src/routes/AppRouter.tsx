import React from "react";
import { Switch, Router, Route } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import Landing from "../components/Landing";
import "../style/styles.scss";
import About from "../components/About";
import { Shopping } from "../components/Shopping";
export const history = createHistory();

const AppRouter: React.FC = () => {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route path="/" exact={true} component={Landing} />
          <Route path="/aboutUs" component={About} />
          <Route path="/shopping" component={Shopping} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
