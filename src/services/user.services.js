const {createUser} = require('../repositories/user.repository');

class UserServices {
    static async createNewUser(newUser){
        try{
            const user = await createUser(newUser);
            return user;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserServices;