var http = require('http');
var url = process.argv[2];


var logLen = function (string) {
    console.log(string.length);
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
        logLen(answer);
        console.log(answer);
        var test = response.url; 
        console.log(Object.keys(response));
        console.log(test);

    });
};
//console.log(process.argv);


http.get(url, callback);

