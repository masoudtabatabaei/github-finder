import { BrowserRouter as Router, Route, Routes as RoutesWrapper } from "react-router-dom";
import { About } from "../pages/About";
import { Home } from "../pages/Home";
import { Navbar } from "@components/Navbar";
import { Dashboard } from "../layouts/Dashboard";
import { ROUTE_CONSTANT } from "./route-constant";

export const Routes = () => {
  return (
    <Router>
      <Navbar />
      <Dashboard>
        <RoutesWrapper>
          <Route path={ROUTE_CONSTANT.ROOT.ABSOLUTE} element={<Home />}></Route>
          <Route path={ROUTE_CONSTANT.ABOUT.ABSOLUTE} element={<About />}></Route>
        </RoutesWrapper>
      </Dashboard>
    </Router>
  );
}