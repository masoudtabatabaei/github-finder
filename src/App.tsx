import { Dashboard } from "./layouts/Dashboard";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { PanelRoutes } from "./routes";
import "./App.css";

function App() {
  return <PanelRoutes/>;
}

export default App;
