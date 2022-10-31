import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import axios from "axios";
import SignUp from "./components/auth/SignUp";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <SignUp />
      </div>
    );
  }
}

export default App;
