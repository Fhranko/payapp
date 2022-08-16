const UserModel = require('../models/User');

const userController = {
	find: async (req, res) => {
		const found = await UserModel.find({ email: req.params.email });
		res.send(found);
	},
	all: async (req, res) => {
		const found = await UserModel.find();
		res.send(found);
	},
	create: async (req, res) => {
		const newUser = new UserModel(req.body);
		const savedUser = await newUser.save();
		res.send(savedUser);
	},
};

module.exports = userController;
