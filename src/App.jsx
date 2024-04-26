import React from "react";
import "./App.css";
import Watch from "./component/Watch";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Watch />
      </div>
    );
  }
}

export default App;
