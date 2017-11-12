var buffer1 = new Buffer('i love you');
// 剪切缓冲区
var buffer2 = buffer1.slice(0,4);
console.log("buffer2 content: " + buffer2.toString());