const {order_details} = require('../models')

const getOneProduct = (product_id) => {
    const product = order_details.findOne({
        where: {product_id},
    });
    return product;
};

module.exports = {getOneProduct}