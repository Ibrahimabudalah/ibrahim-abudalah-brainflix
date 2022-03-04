import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./components/DefaultVideo/DefaultVideo";
import Page from "./pages/Upload/Upload";

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
