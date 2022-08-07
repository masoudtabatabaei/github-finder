import { Dashboard } from "./layouts/Dashboard";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import "./App.css";

function App() {
  return <Router>
    <Navbar />
    <Dashboard>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </Dashboard>  
  </Router>;
}

export default App;
