const express = require('express');
const userRouter = require('./users');

// import userRouter from './users.js'

const router = express.Router();

router.use('/users', userRouter);

module.exports = router;