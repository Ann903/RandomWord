var Koa = require('koa');
var app = new Koa()
var router = require('koa-router')();

router.get('/', function (ctx, next) {});
app.use(router.routes())