const model = require('../model');

var User = model.User;

var hello = async (ctx, next) => {
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>hello world</h1>'
}

module.exports = {
    'GET /api/hello': hello 
}