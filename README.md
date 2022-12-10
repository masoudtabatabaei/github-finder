# GitHub Finder

Github Finder is a web application that developed by `ReactJs` and `TypeScript`.
<br/> Using it you can get a Github's user by using search it's username (by using `https://docs.github.com/en/rest/search#search-users` API endpoint)
<br/>

## Available Scripts

In the project directory, you can run:
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Project Repository:
[https://github.com/masoudtabatabaei/github-finder](https://github.com/masoudtabatabaei/github-finder)

## Features
- Search user by using apart or whole of it's username.
- Ability to toggle display mode (grid view or table view).
- Pagination (get chunk of data based of page size and page number changes).
- Ability to like a user and add it to favorites list (by using browser Localstroage)
- Ability share search results by share project url (search filters put on url queryparams)
- Change Page title by move between pages (Home, About and ...)

## Project Structure

```
|-- public
|-- src
  |-- assets
  |-- components
  |-- utils
  |-- hooks
  |-- layouts
  |-- pages
  |-- routes
  |-- types
```

## Dependencies
- [ReactJs](https://reactjs.org/) : version 18.2.0
- [TypeScript](https://www.typescriptlang.org/) : version 4.7.4
- [Axios](https://axios-http.com/) : used for make XMLHttpRequests from the browser.
- [react-router-dom](https://reactrouter.com/en/v6.3.0) : used for implement routing in project.
- [font-awesome](https://fontawesome.com/) : used for apply font icons.
- [styled-component](https://styled-components.com/) : used for implementing styles.

## Todos
- [x] Create user page profile details
- [x] Use styled-component to refactor styles
- [x] Ability toggle Theme
- [x] Write Tests