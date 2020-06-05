import React from "react";
import { Button } from "./components/button/button";

function App() {
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        <Button variant="contained">Default</Button>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="text">Default</Button>
        <Button variant="text" color="primary">
          Primary
        </Button>
        <Button variant="outlined">Default</Button>
        <Button variant="outlined" color="tertiary">
          Hello
        </Button>
      </div>
    </div>
  );
}

export default App;
