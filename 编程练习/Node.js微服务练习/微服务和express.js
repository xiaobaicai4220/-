var Seneca  = require("seneca");
var Express = require("express");
var Web     = require("seneca-web");

var seneca = Seneca();
var app = Express();

var config = {
    routes:{
        prefix : "/my-api",
        pin: "role:api,cmd:*",
        map:{
            bazinga: {
                GET: true
            },
			xiaobaicai:{
				GET:true
			}
        }
    },
	routes:{
		prefix:"/hello",
		pin:"role:hello,cmd:*",
		map:{
			xiaobaicai:{
				GET:true
			}
		}
	}
};

seneca.use(Web, { adapter: require('seneca-web-adapter-express'), context: app })
seneca.act("role:web", config);
seneca.add("role:api,cmd:bazinga", bazinga);
seneca.add("role:api,cmd:xiaobaicai",xiaobaicai);
seneca.add("role:hello,cmd:xiaobaicai",xiaobaicai);

app.listen(3000);


function bazinga(args, done){

    done(null, {
        bar: "Bazinga!"
    });
}

function xiaobaicai(args,done){
	console.log(args);
	done(null,{
		xiaobaicai:"xiaobaicai"
	});
}
	