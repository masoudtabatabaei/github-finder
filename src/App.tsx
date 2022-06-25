import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Dashboard } from "./layouts/Dashboard";
import { Users } from "./components/Users";

function App() {
  return (
    <Dashboard>
      <Users />
    </Dashboard>
  );
}

export default App;
