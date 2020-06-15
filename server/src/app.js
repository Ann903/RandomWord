const Koa = require('koa');
const app = new Koa();

const middleware = require('./middleware')
// middleware work as a stack, last of top, first of bottom. 

// 添加跨域头


app.use(async (ctx, next) => {
    ctx.req.url = ctx.req.url.replace('//','/')
    // console.log(ctx.req.url)
    ctx.set('Access-Control-Allow-Origin','*')
    await next();
})

app.use(middleware.accessLog)
app.use(middleware.respTime)
app.use(middleware.getPara)

const routes = require('./routes')
app.use(routes.routes()).use(routes.allowedMethods())

const login = require('./routes/login')
app.use(login.routes()).use(login.allowedMethods())

app.listen(3000);