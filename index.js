const Koa = require('koa');

const controller = require('./controller');

const bodyParser = require('koa-bodyparser');

const rest = require('./rest');

const app = new Koa();

app.use(async (ctx, next) => {
    await next();
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello, World!</h1>'
})
// 解析body参数的koa-bodyparser
app.use(bodyParser());

// 接口返回数据简化
app.use(rest.restify());

// koa-router的Middleware
app.use(controller());

app.listen(3030);
console.log('app start at port 3030....')