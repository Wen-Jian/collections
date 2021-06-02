import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import List from "./src/components/List";
import Content from "./src/components/Content";
import { Provider } from "react-redux";
import store from "./src/store";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/:id">
          <Content />
        </Route>
        <Route path="/">
          <List />
        </Route>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
