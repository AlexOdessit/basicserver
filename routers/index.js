// router - special middleware which helps doing routing
const express = require('express');
const phonesRouter = require('./phonesRouter');
const carsRouter = require('./carsRouter');
const rootRouter = express.Router();

rootRouter.use('/phones', phonesRouter);
rootRouter.use('/cars', carsRouter);

module.exports = rootRouter;
