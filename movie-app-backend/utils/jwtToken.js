const sendUserToken = (user, statusCode, res, message) => {
    const token = user.generateJsonWebToken();
    const options = {
      expires: new Date(
        Date.now() + 5 * 60 * 1000 
      ),
      httpOnly: true
    };
  
    return res.status(statusCode).cookie("userToken", token, options).json({ accessToken : token });
  };
const sendAdminToken = (admin, statusCode, res, message) => {
    const token = admin.generateJsonWebToken();
    const options = {
      expires: new Date(
        Date.now() + 5 * 60 * 1000 
      ),
      httpOnly: true
    };
  
    return res.status(statusCode).cookie("adminToken", token, options).json({ accessToken : token });
  };
  
  module.exports = {
    sendUserToken,
    sendAdminToken
  };