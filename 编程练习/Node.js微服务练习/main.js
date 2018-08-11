var seneca = require("seneca")()
	.use('email')
	.use('sms')

seneca.act({channel:'sms',action:'pending'},function(){})

