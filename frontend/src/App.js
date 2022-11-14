import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import Home from "./pages/Home";

export const SERVER_ADDRESS = "http://localhost:3001";

function App() {
  return (
    <div style={{ backgroundColor: "#E8E8E8", minHeight: "100vh" }}>
      <div className="container py-5">
        <Home />
      </div>
    </div>
  );
}

export default App;
