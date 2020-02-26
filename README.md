## MY MISSION 2120

### `ABOUT PROJECT`
This is single page React application (online challenge task) thats lists consumers of a organisation. Each consumer will have details such as company name, date of first purchase, total budget, budget spent and budget left. <br/> User can select any consumer and change the total budget allocated. The budget spent is not editable, only total budget allocated for any selected consumer is editable. The changed total budget must always be greater than or equal to budget spent. <br/> <br/>
All the budget values are displayed in German locale format with 2 decimals points.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

To set up the node modules folder, please use npm install.<br />

### `npm run dev`

I have created mock api using json-server. It runs the mock api in [http://localhost:4000](http://localhost:4000).  <br />
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view app in the chrome browser. <br/> <br/>
<b><u>Use `npm run dev` to run api url and application both parallely and to get data from api to application. Without running api, data will not be fetched into the application</u></b>

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

## Other Details

### `create-react-app`
Application is built from scratch using command `npx create-react-app billie_mission_app`

### `redux`
is used in this application for managing application state.

### `react-redux and redux-thunk`
React components read data from a Redux store, and dispatch actions to the store to update data.

### `react-bootstap and toastr`
- react-bootstap is used as front-end framework for styling and layout.
- toastr is used for user notifications and messages.

### `SUPPORTED BROWSERS`
Application is best viewed in latest chrome browser, please refer to `development` section in package.json for supported browsers. <u>Application is not supported in Internet explorer.</u>
