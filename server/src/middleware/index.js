middleware = new Object()
// logger
middleware.accessLog = async function(ctx, next) {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
};

middleware.getPara = async function(ctx, next) {
  await next();
  console.log(ctx.request.query);
}

// x-response-time
middleware.respTime = async function(ctx, next)  {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
  ctx.append('Link', '<http://127.0.0.1/>');

};

module.exports = middleware; 