# Deep-Thoughts

Socal media discussion website created using web development tools relating to the MERN stack - MongoDB, ExpressJS, ReactJS, NodeJS and npm packages and query languages from GraphQL and Apollo server.

## GitHub URL

* https://github.com/ktrnthsnr/deep-thoughts

## React Website in GitHub


## Table of Contents

* [Description](#description)
* [Technology](#technology)
* [Installations](#installations)
* [Usage](#usage)
* [Testing](#testing)
* [Contribution](#contribution)
* [React](#react)

## Description

This project is focused on full-stack web development using MERN stack tools, languages, and npm libraries, with emphasis on GraphQL, a query language for APIs and runtime for completing queries, and the Apollo client and npm packages which will integrate GraphQL into the Express.js server. This specific repo will involve setting up the data connection between a React front-end development server and a GraphQL development server API.

* QueryQL application brief intro 
    * On the server side, the social media discussion app contains two models under server/models/* - one model for Thought, the other to track a User. Reactions are nested inside the Thought model.
    * The development server will use Mongoose for all its MongoDB data handling, which run through the server/config/connection.js, and is exported through mongoose.connection.
    * The connection is imported by the server/server.js.    
    * Seeder dummy data can be generated via the server/seeders/seeds.js file by the Faker.js library.
    * To access the GraphQL API, schemas were created. Located under server/schemas, this location contains the type definitions (queries) and resolvers (response) which the QueryQl API accesses to perform the CRUD (create, read, update, delete) operations.
    * The Apollo server is connected to the Express.js server, as defined in the server directorty under server.js.
    * QueryQL queries can be run in the QueryQL Playground. See the `Usage` section below for more info on starting the nodemon server, quering the db, and viewing the results in the localhost.
    * On the client side, the initial structure of the frontend is built by the Create React App tool, created by running `npx create-react-app client`
    * To connect the client to server, the Apollo Provider and Apollo Client are imported into the App.js in the client directory, and the Apollo hooks are imported under src\pages\Home.js where the backend server can move user data to the client's components.


## Technology

Node.js, JavaScript, ES6, npm MongoDB, Mongoose, Express.js, React.js, GraphQL, GraphQL Playground, Apollo Server, Apollo-Client, graphql-tag, apollo-server-express, apollo-boost, React Router, react-router-dom, apollo/react-hooks, if-env, concurrently, jsonwebtoken, jwt-decode, faker, nodemon, bcrypt, moment

## Installations

- Prereq: install VSCode, Node.js, and MongoDB
- After cloning the GitHub repo to your local drive, run the following in the VSCode command-line terminal
- Install all components listed within the package.json file for npm
    - Server 
    - $ `cd server`
    - $ `npm i`
     - Client
    - $ `cd client`
    - $ `npm i`

- Otherwise, for custom individual component installations, install the npm packages per each server and client:

### Server installations
- Npm packages installed under the /server folder:
    - Under the /server folder, create a .gitignore file in the root and add `node_modules` to this file
    - Apollo Server library
        - $ `npm i apollo-server-express`
    - For user authentication, to be able to encode a JSON object into a tokenized string, install JSON Web Token (JWT) package
        - $ `npm install jsonwebtoken`

### Client installations
- Npm packages installed under the /client folder:
     - Under the /client folder, create a .gitignore file in the root and add `node_modules` to this file
     - Create the React App tool if cloned the repo, by running in the bash terminal
        - $ `cd client`
        - $ `npx create-react-app .` 
        - (New installs without repo cloning, run $ `npx create-react-app client`)

  - Installed additional dependent npm packages
    - apollo-boost `npm i apollo-boost graphql graphql-tag @apollo/react-hooks` 
        - This installs these, so no need to install
            - apollo-boost
            - graphql-tag 
            - graphql
            - @apollo/apollo-hooks

    - jest-dom `npm install @testing-library/react @testing-library/jest-dom --save-dev`
    - bootstrap `npm i bootstrap`
    - popper  `npm i popper.js`
    - jQuery `npm i jquery`
    - jwt-decode `npm i jwt-decode`
    - react-bootstrap `npm i react-bootstrap`
    - react-dom `npm i react-dom`
    - react-router-dom `npm i react-router-dom`
    - react-scripts `npm i react-scripts`
  - For the refactor to GraphQL and Apollo server, these packages were installed
    - React Router `npm i react-router`
    - nodemon `npm i nodemon`
    - apollo/react-hooks `npm i @apollo/react-hooks`
    - if-env `npm i if-env`
    - concurrently `npm i concurrently`
    - graphql-tag `npm i graphql-tag`
    - Apollo-Client `npm i apollo client` --

## Usage


### Website
- The website has been deployed to GitHub.
	![insert](./insert.jpg "insert")

### Local install, seed and usage 

#### Server directory - GraphQL server API

- To view the site locally on the development server, first install the npm packages
    - $ `npm i` or `npm install`
- Then seed the data
    - $ `npm run seed`
- Start the MongoDB
    - $ `mongod`
- To test the Apollo server sider connections to the Express.js, (to test the schemas and server.js), run the following 
    - $ `cd server`
    - $ `npm run watch`
- Use GraphQL Playground server environment, view locally at 
- $ `http://localhost:3001/graphql`
- Sample queries can be copied to GraphQL Playground from the ./GraphqlPlayground-queries.md. 
- Graphql allows for queries and any file changes without having to restart the server. The config is setup in the package.json to run nsodeman, "watch": "nodemon".

- Here are the server side dependencies as seen under /server/package.json
```
"dependencies": {
    "bcrypt": "^4.0.1",
    "express": "^4.17.1",
    "faker": "^4.1.0",
    "jsonwebtoken": "^8.5.1",
    "moment": "^2.24.0",
    "mongoose": "^5.9.9"
      }
},
"devDependencies": {
    "nodemon": "^2.0.3"
```

#### Client directory - React front-end development server
- If cloning to your local drive, install the npm packages 
    - $ `cd client`
    - $ `npm i` or `npm install`
- Then start up the app. The React app client starts up by running from the client directory
    - $ `cd client`
    - $ `npm start`
- The default browser in your React environment, 
    - `http://localhost:3000/`

- Why is the React website's content empty? To populate the React frontend data, you'll need to run the dev server at the same time under a second terminal bash window, cd server, then  `npm start` and populate the tables through a GraphQL query.

- Here is a walkthrough of the application showing both the React /client and GraphQL /server started and connecting through the Apollo server\client and Express.js:
https://drive.google.com/file/d/1K3YQd_e1wYWERb5So4wgaccVD6zOiQZK/view

- Here are the client side dependencies as seen under /client/package.json

```
"dependencies": {
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.5.0",
    "@testing-library/user-event": "^7.2.1",
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "react-scripts": "3.4.1"
      }
```

## Testing

The development server is running under the server directory, React under the client directory. To test for the client, run both servers, cd to each directory, then enter `npm start` in bash.
See Usage, under client or server for further information and detail.

## Contribution

ktrnthsnr

### ©️2020 ktrnthsnr


## React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

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
