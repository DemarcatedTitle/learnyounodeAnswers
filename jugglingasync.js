var http = require('http');
var completedRequests = 0;

var loganswer = function (string) {
    console.log(string);
};
var answerarr = [];


var acquire = function(url){http.get(url, callback);
};

var callback = function (response, i) {
    
    var received = [];
    response.setEncoding('utf8');
    response.on('data', function (data) {
        received.push(data);
    });
    response.on('error', function (error) {
        console.log('There was an error ' + error.message);
    });
    response.on('end',function (end) {
        var answer = received.join('');
        var url = response;
        completedRequests += 1;
        urlarr[i] = answer;
        if (completedRequests === inputlen - 2) {
            
            
        }
    });

    
        
};

var orderIt = function () {}; 
var urlarr = process.argv.slice(2);
var i = 0;
var inputlen = urlarr.length;
    for (i;i < inputlen; i += 1) {
        acquire(urlarr[i]);
        
    } 
console.log(urlarr);


   // GET.on('finished', function (finished) {
     //   console.log('finished');
   // });

