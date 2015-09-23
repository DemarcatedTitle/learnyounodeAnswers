var fs = require('fs');
var count = 0;
var dir = fs.readFileSync(process.argv[2], 'utf8');
var arr = dir.split('');


arr.forEach(function (item, index, array) {
    if (item === '\n') {
        count += 1;
    }
});

console.log(count);



