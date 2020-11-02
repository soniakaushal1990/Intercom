/**
 * Create a new customer
 * @class
 */

const Customer = function (user_id, name, latitude, longtitude) {
    this.user_id = user_id,
        this.name = name,
        this.latitude = latitude,
        this.longitude = longtitude
}


const compare = function (a, b) {
    if (a.user_id < b.user_id) {
        return -1;
    }
    if (a.user_id > b.user_id) {
        return 1;
    }
    return 0;
}



/**
 * 
 */

module.exports = { Customer , compare } ;