const carsRouter = require('express').Router();
const { getCars } = require('../controllers/cars');
const { middleware1 } = require('../middlewares');
const errorMiddleware = require('../middlewares/error');

carsRouter.get('/', errorMiddleware, middleware1, getCars);

module.exports = carsRouter;
