
var http = require("http");



http.createServer(function (req, res) {
  var fileName = "." + req.url;

  if (fileName === "./stream") {
    res.writeHead(200, {
      "Content-Type":"text/event-stream",
      "Access-Control-Allow-Origin": '*',
    });
    // res.write("retry: 10000\n");
    // res.write("event: connecttime\n");
    // res.write("data: " + (new Date()) + "\n\n");
    // res.write("data: " + (new Date()) + "\n\n");
// 


    

    interval = setInterval(function () {
    // stream.write('event: test\n'); // 事件类型
        // res.write('event: test\n'); // 事件类型
            // console.log("名字是："+answer);
            // 不加close，则不会结束
            // res.write('event: test\n'); // 事件类型
            res.write("data: " + (new Date()) + "\n\n"); 
        // res.write("data: " + (new Date()) + "\n\n");
    //   stream.write(`id: ${+new Date()}\n`); // 消息ID
    //   stream.write(`data: ${i}\n`); // 消息数据
    //   stream.write('retry: 10000\n'); // 重连时间
    //   stream.write('\n\n'); // 消息结束
  
    }, 1000);

    req.connection.addListener("close", function () {
      clearInterval(interval);
    }, false);
  }
}).listen(8844, "127.0.0.1");