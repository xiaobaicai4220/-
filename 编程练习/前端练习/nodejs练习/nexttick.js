var dns = require('dns');
console.log("Resolving www.baidu.com ...");
dns.resolve4('www.baidu.com',function(err,addresses){
	console.log('IPV4 addresses: ' + JSON.stringify(addresses,false,' '));
	addresses.forEach(function(addr){
		dns.reverse(addr,function(err,domains){
			console.log('Reverse for '+addr + ':' + JSON.stringify(domains));
		});
	});
});