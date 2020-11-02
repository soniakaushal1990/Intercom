const Joi = require('joi');



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