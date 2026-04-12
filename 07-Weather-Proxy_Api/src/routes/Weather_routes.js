const express = require('express');
const router = express.Router();


const weatherController = require('../controller/Weather_controller');

router.get('/', weatherController.getWeather);

module.exports = router;