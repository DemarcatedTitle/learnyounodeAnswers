var fs = require('fs');
var dir = process.argv[2];

var countIt = function (err, data) {

    var arr = data.split('');
    var count = 0;
    arr.forEach(function (item, index, array) {
    if (item === '\n') {
        count += 1;
    }});
    console.log(count);


};
fs.readFile(dir, 'utf8', countIt);
