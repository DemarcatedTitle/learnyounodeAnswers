var http = require('http');
var url = require('url');
var completedRequests = 0;
var urlArr = process.argv.slice(2);
var inputlen = urlArr.length;

function loganswer (x) {
    for (y = 0; y < inputlen; y +=1) {

        //console.log(answerArr[i]);
}
}

//perhaps the answer I was looking for in passing the appropriate counter/tracking variable is a .bind on the callback function (getCallback) and then assigning it to a variable in the callback so that response can use it. And with this method, a iife isn't required to take place 3 times. 

var acquire = function(test){return function(test){
    //console.log('acquire function  ' + test);
    var xyz = test;
    http.get(urlArr[xyz], getCallback.bind( {i: test} ));

}(test);};

var getCallback = function (response){ 
    //callback takes place after the for loop   is already at 3
    // 
    var received = [];
    response.setEncoding('utf8');
    var test = this.i; 

    response.on('data', function (data) {
        received.push(data);
    });

    response.on('error', function (error) {
        console.log('There was an error ' + error.message);
    });   
    
    response.on('end',function () {
        var answer = received.join('');
        received.push();
        answerArr[test] = answer;
        completedRequests += 1;
        if (completedRequests === inputlen) {
            answerArr.forEach(function(index, currentvalue, arr){
                console.log(index);
            });
        }
        });        

};
        
        //)(test);};//(response);};



//function test (url, index, arr) {
//    console.log(index);
//    acquire(index);
//}

//var testing = urlArr.map(test);


   // GET.on('finished', function (finished) {
     //   console.log('finished');
   // });

var answerArr = [];
var z = 0;
//var iife = function() {
//    var i = 0;
//    for (i; i < inputlen; i += 1) {
//        var test = i;
//        //acquire(index);
//        (function(test) { // lets create a function who has a single argument "test"
//        // inside this function test will refer to the functions argument
//        // not the var test from the loop above
//        http.get(urlArr[test],function(response){
//        var received = [];
//        response.setEncoding('utf8');
//
//        response.on('data', function (data) {
//            received.push(data);
//        });
//
//        response.on('error', function (error) {
//            console.log('There was an error ' + error.message);
//        });   
//        
//        response.on('end',function (end) {
//            var answer = received.join('');
//            var host = response.req._headers.host;
//            answerArr[test] = answer; 
//             
//            console.log('iife + ' + test);
//            completedRequests += 1;
//            if (completedRequests === inputlen) {
//                for (a in answerArr) {
//                    console.log(answerArr[a]);
//                }
//            }
//            });        
//        });})(test);
//         }};
//iife();


var noniife = function() {
    var i = 0;
    for (i; i < inputlen; i += 1) {
        var test = i;
        (acquire(i));
         }};
noniife();
//console.log(typeof http.get);


