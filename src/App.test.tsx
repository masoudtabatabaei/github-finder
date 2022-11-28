import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("App Test", () => {
    render(<App/>);
    const hasText = screen.getByText(/Github/i);
    expect(hasText).toBeInTheDocument();
});