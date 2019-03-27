const server = require('paige-app-server');
const createApp = require('paige-app-boilerplate');
const db = require('paige-app-db');
const routes = require('./routes');

// Initialize db connection
db();

const app = createApp({
  routes,
});

server({
  app,
});
