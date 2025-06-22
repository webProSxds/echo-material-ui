### `Prod Url`

https://webprosxds.github.io/echo-material-ui/

### `npm start`

Runs the app in the development mode.\
http://localhost:3000

### `npm run build`

Builds the app for production to the `build` folder.\

## Learn More

npm install react-scripts@latest

npm install -g serve
serve -s build
serve -s build -l 4000
serve -h


const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(9000);

####

### api url
https://echo-api-y6n3.onrender.com/