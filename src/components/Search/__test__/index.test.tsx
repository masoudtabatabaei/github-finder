import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import { Search } from "..";
import * as themes from "../../../theme.styled";

test("Check search button is disabled if the input is empty",() => {
    const mockHandler = jest.fn();
    render(<ThemeProvider theme={themes.Classic}>
        <Search keyword="" view="grid" changeView={mockHandler} onSearch={mockHandler}/>
    </ThemeProvider>);
    const searchBtn = screen.getByRole('button', { name: /Search/i });
    expect(searchBtn).toBeDisabled();
});

test("Check search button isn't disabled if the input isn't empty",() => {
    const mockHandler = jest.fn();
    const notEmptyKeyword = "test";
    render(<ThemeProvider theme={themes.Classic}>
        <Search keyword={notEmptyKeyword} view="grid" changeView={mockHandler} onSearch={mockHandler}/>
    </ThemeProvider>);
    const searchBtn = screen.getByRole('button', { name: /Search/i });
    expect(searchBtn).not.toBeDisabled();
});