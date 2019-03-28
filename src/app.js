const app = require('paige-app-boilerplate');
const { db } = require('paige-app-db');
const router = require('./routes');

// Initialize db connection
db();

app({ router });
