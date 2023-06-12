const {Router} = require('express');
const {createOrder} = require('../controllers/orders.controllers')

const router = Router();

router.post("/orders", createOrder);

module.exports = router;