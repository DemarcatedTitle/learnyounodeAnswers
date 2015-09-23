

fs.readdir(process.argv[2], function (err, list) {
    list.forEach(function (item, index, array){
        if (path.extname(item).slice(1) === process.argv[3] ){
            console.log(item);
        }
});

}); 

