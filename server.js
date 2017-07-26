import express from 'express';
import request from 'request';
import {config} from 'dotenv';

config();

const app = express();
const port = process.env.PORT || 8000;
const {env: {DARKSKY_API_KEY}} = process;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/weather', function(req, res) {
	const {lng, lat} = req.query;

	request(`https://api.darksky.net/forecast/${DARKSKY_API_KEY}/${lat},${lng}`,
		function(error, response, body) {
			const data = JSON.parse(body);

			res.send(data);
		});
})

app.listen(port, function() {
	console.log('Listening on port', port);
});
