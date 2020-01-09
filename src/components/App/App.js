import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../elements/Header/Header";
import Home from "../Home/Home";
import NotFound from "../elements/NotFound/NotFound";
import Movie from "../Movie";

export default function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header></Header>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/:movieId" component={Movie} exact />
          <Route component={NotFound} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}
