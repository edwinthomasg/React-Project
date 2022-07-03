const bcrypt = require('bcrypt')
const Admin = require('../model/Admin')
const { adminLoginValidationSchema } = require('../validation/ValidationSchema')
const { sendAdminToken } = require('../utils/jwtToken')
require('dotenv').config()

/**To login as a admin */
const loginAdmin = async(req, res) => {
    let admin
    const { adminEmail, adminPassword } = req.body
    console.log(req.body)
    try{
        let options = { abortEarly : false }
        const loginResult = await adminLoginValidationSchema.validateAsync({
            adminEmail,
            adminPassword
        },options)
        admin = await Admin.findOne({ adminEmail : loginResult.adminEmail })
        if(admin == null) 
           throw "No account exists with this email id"
        if(! (bcrypt.compareSync(loginResult.adminPassword, admin.adminPassword)))
            throw "Password doesn't match"
        const message = "Succesfully logged in"
        sendAdminToken(admin, 200, res, message);    
    }
    catch(err){
        return res.status(404).json({ errorMessage : err })
    }
}
/**To deactivate my profile */
const deleteAdminProfile = async(req,res) => {
    let admin
    let adminId = req.params.adminId
        try{
            if(adminId.length == 24)
            admin = await Admin.findByIdAndDelete(adminId)
            else throw `Invalid Object Id`
            if(admin != null)
            return res.status(200).json({ message : "Succesfully deleted" })
        }
        catch(err) {
            return res.status(404).json({ errorMessage : err })
        } 
    return res.status(404).json({error : "Unable to delete this id"}) 
}
module.exports = {
    loginAdmin,
    deleteAdminProfile
}