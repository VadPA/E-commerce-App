const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config()

const router = require('./routes/index');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use(router);

app.listen(5000, () => console.log('Server was started on port 5000'))