const express = require('express');
const app = express();
const cors = require('cors');

require('./db');

app.use(cors());

app.use(express.json());

app.use('/api', require('./routes/index'));

app.listen(3000);
