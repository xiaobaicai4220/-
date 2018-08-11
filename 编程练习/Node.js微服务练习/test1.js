var plugin = function(options){
	var seneca = this;

	//获取所有商品列表
	seneca.add({area:"product",action:"fetch"},function(args,done){
		var products = this.make("products");
		products.list$({},done);
	});

	//获取指定类别的商品列表
	seneca.add({area:"product",action:"fetch",criteria:"byCategory"},function(args,done){
		var products = this.make("products");
		products.list$({category:args.category},done);
	});

	//根据id获取商品
	seneca.add({area:"product",action:"fetch",criteria:"byId"},function(args,done){
		var product = this.make("products");
		product.load$(args.id,done);
	});

	//添加商品
	seneca.add({area:"product",action:"add"},function(args,done){
		var products = this.make("products");
		products.category = args.category;
		products.name = args.name;
		products.description = args.description;
		products.price = args.price;
		products.save$(function(err,product){
			done(err,products.data$(false));
		});
	});

	//根据id删除指定商品
	seneca.add({area:"product",action:"remove"},function(args,done){
		var product = this.make("products");
		product.remove$(args.id,function(err){
			done(err,null);
		});
	});

	//通过id获取商品信息并编辑
	seneca.edit({area:"product",action:"edit"},function(args,done){
		seneca.act({area:"product",action:"fetch",criteria:"byId",id:args.id},function(err,result){
			result.data$(
			{
				name:args.name,
				category:args.category,
				description:args.desription,
				price:args.price
			}
			);
			result.save$(function(err,product){
				done(product.data$(false));
			});
		});
	});
}
module.exports = plugin;
