var http = require('http');


var loganswer = function (string) {
    console.log(string);
};
var answerarr = [];


var acquire = function(url){http.get(url, callback);
};

var callback = function (response) {
    
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
        // answerarr.push({url : answer}); 
        console.log(answer);
    });

    response.on('finished', function (finished) {
        console.log('finished');
    });
    
        
};




var inputlen = process.argv.length;

    for (i = 2; i < inputlen; i += 1) {
        acquire(process.argv[i]);
   
    } 

   // GET.on('finished', function (finished) {
     //   console.log('finished');
   // });

