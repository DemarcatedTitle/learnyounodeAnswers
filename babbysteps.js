var len = process.argv.length;
var num = 0;

for (i = 2; i < len; i += 1) {
    var item = parseInt(process.argv[i]);
    num = num + item;
} 
console.log(num);
