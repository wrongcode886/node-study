var buf = new Buffer("www.baidu.com");
var json = buf.toJSON(buf);
console.log(json);