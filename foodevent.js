const getDistance = require('./distance').getDistance;
const Customer = require('./customer');
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
 * Function to filter customers
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