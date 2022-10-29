import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default App;
