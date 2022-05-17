
// 文件读取   相关

// 阻塞  与  非阻塞  区别



var fs = require("fs");

// 第一种
// var data = fs.readFileSync("./text.txt");

//第二种
fs.readFile('./text.txt',function(err,data){
    if(err)return console.log(err);
    
    console.log(data.toString());
});



console.log('end!')