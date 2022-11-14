import React, { useEffect } from "react";

import Post from "../components/Post";
import ControlPanel from "../components/ControlPanel";

function Home() {
  return (
    <div className="d-flex flex-column align-items-center">
      <h1>CRUD Functionality</h1>
      <ControlPanel />
    </div>
  );
}

export default Home;
