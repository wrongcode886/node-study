var fs = require("fs");
fs.readFile('input.txt', function(err,data){
	if(err){ 
		 console.log(err.stack);
		 return;
	} 
	console.log(data.toString());
});
console.log("非阻塞程序执行结束");