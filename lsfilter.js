var fs = require('fs');
var answer = [];
var filterModule = require('./filterModule.js');
var dir = process.argv[2];
var ext = process.argv[3];
var loggit = function (err, answer){
    answer.forEach(function (item, index, array){
        console.log(item);
    }); 
    

};

filterModule(dir, ext, loggit);


