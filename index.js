var express = require('express');

//app setup
var app = express();
var server = app.listen(4000, function(){
  console.log('im listening')
});

//static files
app.use(express.static('public'));