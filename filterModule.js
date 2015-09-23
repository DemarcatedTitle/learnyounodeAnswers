//  * Export a single function that takes exactly the arguments described.
//  * Call the callback exactly once with an error or some data as described.
//  * Don't change anything else, like global variables or stdout.
//  * Handle all the errors that may occur and pass them to the callback.

var fs = require('fs');
var path = require('path');
module.exports = function (dir, ext, callback) {
    fs.readdir(dir,(function (err, data) {
        if (err)
            return callback(err);
        var answer = [];
        data.forEach(function (item, index, array){
            if (path.extname(item).slice(1) === ext ){
                answer.push(item);
                
            }
        });
        callback(null, answer);

   }));
};


function bar (callback) {
      foo(function (err, data) {
        if (err)
          return callback(err) ;// early return
    
        // ... no error, continue doing cool things with `data`
    
        // all went well, call callback with `null` for the error argument
    
        callback(null, data);
      });
    }


