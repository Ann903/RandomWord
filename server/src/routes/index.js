// routes/index.js
const rand = require('../controller/randword')
const fs = require('fs');
const router = require('koa-router')()

router.get('/index', async (ctx, next) => {
  ctx.type = 'text/html';
  ctx.body = fs.createReadStream('./views/index.html');
});

router.get('/getrand', async (ctx, next) => {
  ctx.type = 'application/json';
  ctx.body = JSON.stringify(rand.randword());
});


module.exports = router