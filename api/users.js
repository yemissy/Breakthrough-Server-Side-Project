const db = require('../db')
// CRUD (create, read, update, delete) 

/* .get - read , .post - create, .put - update 
.delete - detele  


To create a user /site/:siteId/user
*/

class Users{
    constructor({id,first_name, last_name, email, phone_number, first_dose_date, second_dose_date}){
        this.id = id
        this.first_name = first_name
        this.last_name = last_name
        this.email = email
        this.phone_number = phone_number
        this.first_dose_date = first_dose_date
        this.second_dose_date = second_dose_date
    }
    //GET All Users

    static async getAllUsers(req, res){
        try{
            const users  = await db.any("SELECT * FROM users;")
            return users;
        }
        catch(error){
            res.send(error)
        }
    }
    //GET User with ID
    static async getUserWithId(id){
        const user  = await db.one("SELECT * FROM users WHERE id = $1", id)
        return user;
    }

    //GET Users with Site_ID

    //Create/POST new USER 
    async createUser(site_id){
        console.log(site_id, 'line 43')
        console.log(this.first_name, 'line 44')
        await db.none("INSERT INTO Users (first_name, last_name, email, phone_number, first_dose_date, second_dose_date, site_id) VALUES ($1, $2, $3, $4, $5, $6, $7)", [
            this.first_name,
            this.last_name,
            this.email,
            this.phone_number,
            this.first_dose_date,
            this.second_dose_date,
            site_id
        ])
    }
    //UPDATE a user with ID
    //Can only update phone number for now
    static async updateUser(user_id, update){
        await db.none("UPDATE users SET phone_number = $2, first_name = $3, email = $4 WHERE id = $1", [user_id, update.phone_number, update.first_name, update.email]); 
    }


    //DELETE a user
    static async deleteUser(id){
        const user  = await db.none("DELETE FROM USERS WHERE id = $1", id)
        return user;
    }


}
module.exports = Users;