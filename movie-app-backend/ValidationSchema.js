const Joi = require('joi')

const registerValidationSchema = Joi.object({
    userName : Joi.string()
                  .min(3)
                  .max(30)
                  .pattern(new RegExp('^[a-zA-Z ]+$'))
                  .required(),
    userEmail : Joi.string()
                   .email()
                   .lowercase()
                   .pattern(new RegExp('^([a-z]+[\.-\d]*)@([a-z-]+)\.([a-z\-]{2,8})(\.[a-z]{2,8})?$'))
                   .required(),

    userPassword : Joi.string()
                      .min(8)
                      .pattern(new RegExp('^[a-zA-Z0-9]{8,20}$'))
                      .required(),
    userConfirmPassword : Joi.ref('userPassword')          
})

module.exports = {
    registerValidationSchema
}