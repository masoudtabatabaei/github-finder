import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  a {
    text-decoration: none;
  }

  .main_container {
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
  }
  
  input {
    border: none;
    padding: 8px 12px;
    border-radius: 4px;
    height: 45px;
  }
  
  input:focus {
    outline: none;
  }
  
  button {
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .table_container {
    width: 100%;
    overflow-x: auto;
  }
  
  table {
    border-collapse: collapse;
    width: 100%;
    margin-bottom: 10px;
  }
  
  td,
  th {
    border: 1px solid #ddd;
    padding: 4px 10px;
    text-align: left;
  }
  
  th {
    background-color: #464646;
    padding: 8px 10px;
    color: #fff;
  }
  
  tr:nth-child(even) {
    background-color: #eee;
  }
`;