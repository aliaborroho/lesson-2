var express = require('express');
var request = require('request');
var cors = require('cors');
var app = express();

app.use(cors());

app.get('/*', function (req, res) {
  var path = req.originalUrl;


  request('https://api.forecast.io/forecast/4e83a1d3fd0a488fa6b455961502d3173' + path).pipe(res);
});


app.listen(process.env.PORT || 3000);
