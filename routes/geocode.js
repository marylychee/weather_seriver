'use strict';

var express = require('express');
var router = express.Router();

router.get('/geocode', function(req, res) {
  res.send('Lat Long test');
});
