import React from "react";
import "./App.scss";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "../src/pages/Home/Home";
import Upload from "./pages/Upload/Upload";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/videos/:id" render={(routerProps) => <Home {...routerProps}/>} />
          <Route exact path="/upload" component={Upload} />
          <Route render={() => <h1>PAGE NOT FOUND</h1>} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
