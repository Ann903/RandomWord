const Koa = require('koa');
const app = new Koa();

const middleware = require('./middleware/index')
app.use(middleware.accessLog)
app.use(middleware.getPara)
app.use(middleware.respTime)

const routes = require('./routes/index')
app.use(routes.routes()).use(routes.allowedMethods())


// // response
// app.use(async ctx => {
//   ctx.response.body = 'Hello World';
//   // console.log(ctx.response)
// });

app.listen(3000);