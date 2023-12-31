const {users} = require('../models')

const createUser = async (newUser) => {
    try {
    const user = await users.create(newUser);
    return user;

    } catch (error) {
        throw error
    }
    
}

const updateUser = async (userData, id) => {
    const user = await users.update(userData, {where: {
        id
    }});
    return user
}

const deleteUser = async (id) => {
    const user = await users.destroy({where:{id}})
    return user
}

module.exports = {
    createUser,
    updateUser
}