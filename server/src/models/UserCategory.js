const { Schema, model } = require('mongoose');

const userCategorySchema = new Schema(
	{
		user: {
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
		categories: [
			{
				type: Schema.Types.ObjectId,
				name: String,
			},
		],
	},
	{
		timestamps: true,
	}
);
module.exports = model('UserCategory', userCategorySchema);
