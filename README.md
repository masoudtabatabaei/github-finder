# GitHub Finder

Github Finder is a web application that developed by `ReactJs` and `TypeScript`.
<br/> Using it you can get a Github's user by using seearch it's username (by using `https://docs.github.com/en/rest/search#search-users` API endpoint)
<br/>

## Available Scripts

In the project directory, you can run:
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.


## Features
- Search user by using apart or whole of it's username.
- Ability to toggle display mode (grid view or table view).
- Pagination (get chunk of data based of page size and page number changes).
- Ability to like a user and add it to favorites list.
- Ability share search results by share project url (search filters affect project URL by adding queryparams)
- Change Page title by move between pages (Home, About and ...)

## Project Structure

```
|-- public
|-- src
  |-- assets
  |-- components
  |-- hooks
  |-- layouts
  |-- routes
  |-- types
```

## Todos
- [ ] Ability toggle Theme
- [ ] Save a certain filter (for example: by click on saved item queryparams changed and a new result was appeared)
- [ ] Tests