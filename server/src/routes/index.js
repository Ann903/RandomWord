// routes/index.js
const rand = require('../controller/randword');
const fs = require('fs');
const router = require('koa-router')();
const stream = require('stream');

router.get('/index', async (ctx, next) => {
  ctx.type = 'text/html';
  ctx.body = fs.createReadStream('./views/index.html');
});

router.get('/sse_wed', async (ctx, next) => {
  ctx.type = 'text/html';
  ctx.body = fs.createReadStream('./views/sse.html');
});

router.get('/getrand_sse', async (ctx, next) => {
  ctx.set({
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });
  ctx.status = 200;
  const fstream = new stream.PassThrough()
  // here koa will pipe the ctx.res to stream and end the ctx.res when ever the stream ends.
  ctx.body = fstream; 
  let counter = 5;
  const t = setInterval(() => {
    fstream.write(`data: ${JSON.stringify(rand.randword_text())}\n\n`);
    counter --;
    if (counter === 0) {
      console.log('end')
      fstream.write('event: pause\n\n');
      fstream.end();
      clearInterval(t);
    }
  }, 5200);
});
router.get('/getrand', async (ctx, next) => {
  ctx.type = 'application/json';
  ctx.body = JSON.stringify(rand.randword_text());
});

router.get('/getrand_db', async (ctx, next) => {
  ctx.type = 'application/json';
  ctx.body = JSON.stringify(await rand.randword());
});


module.exports = router