const Joi = require('joi');


/**
 * Funtion to validate each customer inside the customer list
 * @param {Object[]} customerList 
 * @param {number}  customerList[].user_id User Id of the customer
 * @param {string}  customerList[].name name of the customer
 * @param {number}  customerList[].latitude latitude of the customer
 * @param {number}  customerList[].longitude longitude of the customer
 * @returns {void}
 */
const customerListValidation = function (customerList) {
    let customerSchema = Joi.object({
        user_id: Joi.number().required(),
        name: Joi.string(),     
        latitude: Joi.number().min(0).max(90).required(),
        longitude: Joi.number().min(-180).max(180).required()
    });
    let schema = Joi.array().items(customerSchema).required().min(1);

    const validation = schema.validate(customerList);
    if(validation.error) {
        throw validation.error.details;
    }
   
}





module.exports = {
    customerListValidation
}