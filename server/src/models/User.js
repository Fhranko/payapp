const { Schema, model } = require('mongoose');

const expenseSchema = new Schema({
	amount: {
		type: Number,
		validate: () => Promise.reject(new Error('Oops!')),
	},
	note: String,
	date: Date,
});

const userSchema = new Schema(
	{
		email: { type: String, required: true },
		password: String,
		expense: [expenseSchema],
	},
	{
		timestamps: true,
	}
);
module.exports = model('User', userSchema);
