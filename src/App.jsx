import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import axios from "axios";
import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Page from "./pages/Page/Page";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/page" component={Page} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
