
const fs = require('fs');

function addMapping(router, mapping){
    for(var url in mapping){
        if(url.startsWith('GET ')){
            var path = url.substring(4);
            router.get(path, mapping[url]);
        }else if(url.startsWith('POST ')){
            var path = url.substring(5);
            router.post(path, mapping[url]);
        }else{
            console.log(`invalid URL: ${url}`);
        }
    }
}

function addControllers(router, controllers_dir){
    var files = fs.readdirSync(__dirname + '/'+controllers_dir);

    var js_files = files.filter((f) => {
        return f.endsWith('.js');
    })

    for(var f of js_files){
        var mapping = require(__dirname + '/' + controllers_dir + '/' + f);
        addMapping(router, mapping);
    }

}

 module.exports = function(dir){
    var controllers_dir = dir || 'controllers', 
        router = require('koa-router')();
    addControllers(router, controllers_dir);

    return router.routes();
 }