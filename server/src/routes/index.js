// routes/index.js
const rand = require('../controller/randword')
const fs = require('fs');
const router = require('koa-router')()

router.get('/index', async (ctx, next) => {
  ctx.type = 'text/html';
  ctx.body = fs.createReadStream('./views/index.html');
});
router.get('/sse_wed', async (ctx, next) => {
  ctx.type = 'text/html';
  ctx.body = fs.createReadStream('./views/sse.html');
});
router.get('/sse', async (ctx, next) => {
  ctx.type = 'text/event-stream';
  ctx.set('Access-Control-Allow-Origin', '*');

    interval = setInterval(function () {
            ctx.res.write('event: test\n'); // 事件类型
            ctx.res.write("data: " + (new Date()) + "\n\n");   
    }, 1000);

    ctx.req.connection.addListener("close", function () {
      clearInterval(interval);
    }, false);
});
router.get('/getrand', async (ctx, next) => {
  ctx.type = 'application/json';
  ctx.body = JSON.stringify(rand.randword_text());
});


module.exports = router