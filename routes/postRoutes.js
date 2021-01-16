const express = require('express');
const { checkAuth } = require('../middlewares');
const { Event } = require('../db');
const router = express.Router();
module.exports = router;
