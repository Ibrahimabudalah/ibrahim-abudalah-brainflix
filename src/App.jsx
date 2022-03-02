import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        {/* <Home /> */}
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
