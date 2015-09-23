var http = require('http');
var url = process.argv[2];

//response object is a Node Stream object
////most relevant are 'data' 'error' and 'end'.
http.get(url, function (response) {
    response.setEncoding('utf8');
    response.on('data',function (data) {
        console.log(data); 
    
    });


    response.on('error', function (error) {
        console.log('There was an error ' + error.message);
    });
    
    //end should automatically be called by the http.get

}); 

