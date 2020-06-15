// routes/index.js
const rand = require('../controller/randword');
const fs = require('fs');
const router = require('koa-router')();
const stream = require('stream');


router.get('/', async (ctx, next) => {
  if (ctx.cookies.get('name') == undefined) {
    ctx.redirect('/login')
  } else {
    ctx.body = 'hey, there ' + ctx.cookies.get('name')
  }
});

router.get('/login', async (ctx, next) => {
    loginInfo = ctx.request.query
    console.log(loginInfo.username)
    console.log(loginInfo.password)
    if (loginInfo.username === 'ann' && loginInfo.password === '123') {
        ctx.cookies.set(
            'name', 
            'ann',
            {
              // domain: 'localhost',  // 写cookie所在的域名
              // path: '/index',       // 写cookie所在的路径
              maxAge: 10 * 60 * 1000, // cookie有效时长
              expires: new Date('2017-02-15'),  // cookie失效时间
              httpOnly: false,  // 是否只用于http请求中获取
              overwrite: false  // 是否允许重写
            }
          )
          ctx.body = 'login in success' 
    } else {
        ctx.status = 401
        ctx.body = 'login in fail'  
    }
});

router.get('/chk_cookie', async (ctx, next) => {
  if (ctx.cookies.get('name') == undefined) {
    ctx.body = "i don't know you!"
  } else {
    ctx.body = 'hey, there ' + ctx.cookies.get('name')
  }
});

router.get('/get_cookie', async (ctx, next) => {
  ctx.cookies.set(
    'name', 
    'ann',
    {
      // domain: 'localhost',  // 写cookie所在的域名
      // path: '/index',       // 写cookie所在的路径
      maxAge: 10 * 60 * 1000, // cookie有效时长
      expires: new Date('2017-02-15'),  // cookie失效时间
      httpOnly: false,  // 是否只用于http请求中获取
      overwrite: false  // 是否允许重写
    }
  )
  ctx.body = 'cookie is ok'
});



module.exports = router