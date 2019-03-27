const express = require('express');

const router = express.Router();

require('./login')(router);

module.exports = router;
