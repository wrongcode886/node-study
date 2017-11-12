var buffer1 = new Buffer("I LOVE YOU");
var buffer2 = new Buffer(10);
buffer1.copy(buffer2);
console.log("buffer2 content: " + buffer2.toString());