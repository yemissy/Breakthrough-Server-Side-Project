const db = require('../db')
const Site_class = require('./site')
// CRUD (create, read, update, delete) 

/* .get - read , .post - create, .put - update 
.delete - detele  


To create a user /site/:siteId/user
*/

class Users extends Site_class {
    constructor(id,first_name, last_name, email, phone_number, first_dose_date, second_dose_date, site_id){
        super(site_id)
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
        const user  = await db.any("SELECT * FROM users WHERE id = $1", id)
        return user;
    }

    //GET Users with Site_ID

    //Create/POST new USER 
    static async createUser(){
        const newUser  = await db.any("INSERT INTO USERS (first_name, last_name, email, phone_number, first_dose_date, second_dose_date, site_id) VALUES ($1, $2, $3, $4, $5, $6, $7)", [
            this.first_name,
            this.last_name,
            this.email,
            this.phone_number,
            this.first_dose_date,
            this.second_dose_date,
            this.site_id
        ])
        return newUuser;
    }



    //UPDATE a user with ID

    //DELETE a user

}
module.exports = Users;