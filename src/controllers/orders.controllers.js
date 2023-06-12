const OrderServices = require('../services/orders.services')

const createOrder = async(req, res) => {
    try{
        const {user_id} = req.body;
        const order  = await OrderServices.createNewOrder({user_id});
        res.status(201).json(order);
    } catch (error) {
        res.status(400).json(error);
    }
};

const addProductsToOrder = async(req, res) => {
    try {
       const {order_id, product_id, price, quantity} = req.body;
       await OrderServices.addProduct({order_id, product_id, price, quantity});
       res.status(201).send(); 
    } catch (error) {
        res.status(400).json(error);
    } 
};

module.exports = {
    createOrder,
};

