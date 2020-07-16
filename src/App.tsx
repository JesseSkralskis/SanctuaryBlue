import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Landing from "./components/Landing";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
