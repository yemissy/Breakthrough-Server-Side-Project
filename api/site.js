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
    const site = await db.one('SELECT * FROM sites WHERE id = $1', [id])
      return new this(site)
  }

  // filter all active sites/ inactive sites - appoints avalibity 
  static async filter(siteStatus){
    const filteredSites = await db.any('SELECT * FROM sites WHERE status = $1', [siteStatus]); 
    return filteredSites; 
  }

  // filter by start_Date 

  async addSite() {

    await db.none('INSERT INTO sites (address, start_date, status) VALUES ($1, $2, $3)', [this.address,this.start_date,this.status])

    return { message: "success"}
  } 

  // most likely static 
  static async delete(site_id) {
    await db.none('DELETE FROM sites WHERE id = $1',[site_id]); 
  } 

  static async changeStatus(site_id, newStatus) {
    await db.none('UPDATE sites SET status=$1 WHERE id = $2', [newStatus, site_id]); 
  }

  static async getUsers(site_id) {
    console.log("inside getUser function")
    const users = await db.any(`SELECT * FROM users WHERE site_id = ${site_id}`)
    return users; 
    
  }
}

module.exports = Site; 