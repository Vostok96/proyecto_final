const userRoutes = require('./user.routes');
const orderRoutes = require('./order.routes')

const apiRouter = (app) => {
    app.use(userRoutes);
    app.use(orderRoutes);
};


module.exports = apiRouter;

