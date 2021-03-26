const db = require('../db')
const Site_class = require('../api/site')
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

    async getAllUsers(){
        try{

        }
        catch(error){
            console.log(error)
        }
    }

    //GET User with ID

    //GET Users with Site_ID

    //Create/POST new USER 

    //UPDATE a user with ID

    //DELETE a user

}