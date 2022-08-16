const { Schema, model } = require('mongoose');

const expenseSchema = new Schema(
	{
		amount: Number,
		note: String,
	},
	{
		timestamps: true,
	}
);

module.exports = model('Expense', expenseSchema);
