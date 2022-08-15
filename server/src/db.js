const mongoose = require('mongoose');

mongoose
	.connect('mongodb://localhost/payapp', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then((db) => {
		console.log('Database id connected');
	})
	.catch((err) => {
		console.log(err);
	});
