import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Navbar } from "../../Navbar";
import { BrowserRouter as Router } from "react-router-dom";

test("Navbar check logo exists", () => {
    render(<Router><Navbar/></Router>);
    const hasText = screen.getByText(/Github/i);
    expect(hasText).toBeInTheDocument();
});

test("Navbar menu items exist", () => {
    render(<Router><Navbar/></Router>);
    const homeButton = screen.getByText(/Home/i);
    const aboutButton = screen.getByText(/About/i);

    expect(homeButton).toBeInTheDocument();
    expect(aboutButton).toBeInTheDocument();
});