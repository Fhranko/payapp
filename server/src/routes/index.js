const { Router } = require('express');
const router = Router();
const User = require('../models/User');

const jwt = require('jsonwebtoken');

const userController = require('../controllers/user.controller');
const expenseController = require('../controllers/expense.controller');

router.get('/', (req, res) => {
	res.send('hello world');
});

// Users
router.post('/signup', async (req, res) => {
	const { email, password } = req.body;
	const newUser = new User({ email, password });
	await newUser.save();

	// Token
	const token = jwt.sign({ _id: newUser.id }, 'secretKey');

	res.send({ token });
});

router.post('/signin', async (req, res) => {
	const { email, password } = req.body;
	const user = await User.findOne({ email });

	if (!user) return res.status(401).send("The email doesn't exists");

	if (user.password !== password)
		return res.status(401).send('Incorrect user or password');

	const token = jwt.sign({ _id: user.id }, 'secretKey');

	res.send({ token });
});

router.post('/user', userController.create);
router.get('/user/:email', userController.find);
router.get('/users', userController.all);

// expenses

router.post('/expense', expenseController.create);

// middlewares
function verifyToken(req, res, next) {
	if (!req.headers.authorization) {
		return res.status(401).send('Unauthorize Request');
	}

	const token = req.headers.authorization.split('')[1];

	if (token === 'null') {
		return res.status(401).send('Unauthorize Request');
	}

	const payload = jwt.verify(token, 'secretKey');

	next();
}

module.exports = router;
