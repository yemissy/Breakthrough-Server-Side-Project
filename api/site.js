const db = require('../db')

class Site { 
  constructor({id,address,start_date,status}) {
    // Does the constructor have anything? 
    /* 
    should have the properties of the fileds  
    O.R.M - object relational mapping
     */
    this.id = id
    this.address = address; 
    this.start_date = start_date;
    this.status = status;   
  }

  // get all sites 
  static async getAll() {
      const sites = await db.any('select * from sites;')
       return sites;    
  }

  // get a specific site  
  /* [array insttance at 0] */
  static async find(id) {
    const [site] = await db.any('SELECT * FROM sites WHERE id = $1', id)

    if(site) {
      console.log(new this(site))
      return new this(site)
    }  
    // add else 

  }

  getUsers(){
    //const id = this.id; 
    // select all from users where site id is equal id 

  }

  // filter all active sites/ inactive sites 
  filter(status){

  }

  // static add a site to the database 
  create() {

  } 

  // most likely static 
  delete(site_id) {

  } 


}

module.exports = Site; 