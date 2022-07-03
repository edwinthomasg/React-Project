const sendUserToken = (user, statusCode, res, message) => {
    const token = user.generateJsonWebToken();
    const options = {
      expires: new Date(
        Date.now() + 5 * 60 * 1000 
      ),
      httpOnly: true
    };
  
    return res.status(statusCode).cookie("userToken", token, options).json({
      success: message,
      user,
      token,
    });
  };
const sendAdminToken = (admin, statusCode, res, message) => {
    const token = admin.generateJsonWebToken();
    const options = {
      expires: new Date(
        Date.now() + 5 * 60 * 1000 
      ),
      httpOnly: true
    };
  
    return res.status(statusCode).cookie("adminToken", token, options).json({
      success: message,
      admin,
      token,
    });
  };
  
  module.exports = {
    sendUserToken,
    sendAdminToken
  };