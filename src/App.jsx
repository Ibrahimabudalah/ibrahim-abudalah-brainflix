import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";


class App extends React.Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Home />
      </div>
    );
  }
}
export default App;
