const UserModel = require('../models/User');

const expenseController = {
	create: async (req, res) => {
		const response = await UserModel.updateOne(
			{ _id: '62fbf6b192734c942a5f7efe' },
			{
				$push: {
					expense: req.body,
				},
			}
		);
		res.send(response);
	},
};

module.exports = expenseController;
