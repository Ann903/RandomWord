const Koa = require('koa');
const app = new Koa();

const middleware = require('./middleware')
// middleware work as a stack, last of top, first of bottom. 
app.use(middleware.accessLog)
app.use(middleware.respTime)
app.use(middleware.getPara)

const routes = require('./routes')
app.use(routes.routes()).use(routes.allowedMethods())


app.listen(3000);