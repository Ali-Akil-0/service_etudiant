var express = require('express');
const { error } = require('jquery');
const app = require('../api/app');
var mysql = require='mysql';

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    passwoek: '',
    databse:'mysql'
});
connection.connect(function(){
    if(!!error){
        console.log("err")
    }
    else {
        console.log("testing success");
    }
});
app.get('/', function(req,res){
        connection.query("Select* from test1" ,function(error,row,fields){
          
        });
        
        });
app.listen(1337);