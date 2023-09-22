import React from "react";
import ToDo from "./Components/ToDo";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <ToDo heading="My Todo" />
    </div>
  );
};

export default App;
