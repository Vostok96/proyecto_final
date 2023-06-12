const UserServices = require('../services/user.services');

const createUser = async (req, res, next) => {
    try {
        const user = req.body;  
        await UserServices.createNewUser(user);
        res.status(201).send()
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports = {
    createUser
}