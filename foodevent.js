const getDistance = require('./distance').getDistance;
/**
 * Creates a new Intercom Food and Drink Event
 * 
 * @class 
 * 
 */


function IntercomFoodEvent() {
    this.officeLatitude = 53.339428;
    this.officeLongitude = -6.257664;
    this.minDistance = 100;
}




/**
 * Funtion to filter customers within a given distance
 * @param {Object[]} customerList 
 * @param {number}  customerList[].user_id Customer id
 * @param {string}  customerList[].name name of the customer
 * @param {number}  customerList[].latitude latitude of the customer
 * @param {number}  customerList[].longitude longitude of the customer
 * @returns {Object[]} Array of Objects 
 */
IntercomFoodEvent.prototype.filterCustomersWithinEventRange = function (customersList) {
    try {
        let filteredCustomers = [];
        customersList.forEach(customer => {

            let distance = getDistance(this.officeLatitude, this.officeLongitude, customer.latitude, customer.longitude);
            if (distance <= this.minDistance) {
                let user_details = {
                    "user_id": customer.user_id,
                    "name": customer.name
                };
                filteredCustomers.push(user_details);
            }
        })
        return filteredCustomers;
    } catch (error) {
        throw error;
    }
}

module.exports = IntercomFoodEvent;