import React from "react";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="bg-slate-800">
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </div>
  );
};

export default App;
