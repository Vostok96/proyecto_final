const {createOrder} = require('../repositories/order.repository')
const {getOneProduct} = require('../repositories/orderDetails.repository')
class OrderServices {
    static async createNewOrder(data) {
        try {
            return await createOrder(data);

        } catch (error){
            throw error;
        }
    }

static async addNewProduct(data){
    try{
        const product = await getOneProduct(data.product_id)

    } catch (error) {
        throw error
    }
}
}

module.exports = OrderServices;

