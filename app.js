//Requires Modules
var express = require('express')(); //Requires Express module for Routing and REST management

var JSON2 = require('JSON2');
var data = {'zica': 2, 'treta': 4}
var obj = JSON2.stringify(data)
console.log(obj)
var obj = JSON.parse(obj);
console.log(obj);


/*

express.get('/', function(req, res){
  res.send('hello world');
});

express.listen(3000);*/