const express = require('express');
const { getPhone, getPhones, createPhone } = require('../controllers/phones');
const phonesRouter = express.Router();
phonesRouter.get('/', getPhones);
phonesRouter.get('/:id', getPhone);
phonesRouter.post('/', createPhone);

module.exports = phonesRouter;
