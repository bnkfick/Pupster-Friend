create-react-app (dir/project name)
cd into dir/project name directory
git remote -v 
    returns nothing.  shows that the current dir is not hooked to github
code .
    opens vscode
git add .
    didn't work
rm -rf .git
    remove create-react-app git created local repository
git init
git add .
git commit -m "initial files"
git remote -v 
    should now show git association with fetch and push
Go to GitHub and create new repository
No gitignore and no readme
copy repo name
goto command line and link local with origin
git remote add origin https://github.com/bnkfick/Pupster-Friend.git
git remote -v 
    shows git repo now
git push -u origin master
    pushes local created react app files to github
yarn add axios react-router-dom
yarn start

remove from src/app.js
remove everyting in between <div className="App"></div>
remove from src/app.js
    import logo from './logo.svg';
    import './App.css';
Remove file logo.svg
Remove file App.test.js
Remove file App.css

remove from index.js
    import './index.css';
Remove file index.css

In App.js
add import { BrowserRouter as Router, Route } from "react-router-dom"

in src dir create components
in src dire create utils

in components dire create NavBar.js, About.js, Discover.js, Search.js

In components/NavBar.js

import React from "react";

const NavBar = () => {
    return (
        {/*insert HTML/JSX here*/}
    )
}
export default NavBar;

then insert HTML/JSX snippet

also in NavBar.js add
import { Link } from "react-router-dom";

App.js
add
import NavBar from ".components/Navbar";
add/wrap 
      <div className="App">
      in <Route></Route>

index.html
insert above title in head
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/css/bootstrap.min.css" />

insert barebones About, Discover and Search

import React from "react";

const About = () => {
    return (
        <h1>About</h1>
    )
}

export default About;  

============================
in App.js
import About from "./components/About";
import Discover from "./components/Discover";
import Search from "./components/Search";
============================

add routes in App.js
  render() {
    return (
      <Router>
        <NavBar></NavBar>
        <Route exact path ="/" component={About} />
        <Route exact path ="/about" component={About} />
        <Route exact path ="/discover" component={discover} />
        <Route exact path ="/search" component={search} />
      </Router>
    );
  }
err on the side of lowercase in urls

make API.js in the utils folder
import axios from "axios";

export default {
    getRandomDog: () => {
        return axios.get("https://dog.ceo/api/breeds/image/random");
    }
}

then  in Discover.js
make it a class that extends component
add state with image, count and matched = false
create a getDogImage function
    set state with image
add componentDidMount 
    call getDogImage

Add image tag to render
Add buttons to rende


Add to Discover.js
import API from "../utils/API";

Make Discover a React Component 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
