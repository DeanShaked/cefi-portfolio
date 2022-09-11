import React, { useEffect } from "react";
import "./App.css";

const App = () => {
  return (
    <div>
      <h1>{process.env.REACT_APP_API_KEY}</h1>
      <h1>{process.env.REACT_APP_API_SECRET}</h1>
    </div>
  );
};

export default App;
