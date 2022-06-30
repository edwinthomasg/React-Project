const sendToken = (user, statusCode, res, message) => {
    const token = user.generateJsonWebToken();
    const options = {
      expires: new Date(
        Date.now() + 5 * 60 * 1000 
      ),
      httpOnly: true
    };
  
    return res.status(statusCode).cookie("token", token, options).json({
      success: message,
      user,
      token,
    });
  };
  
  module.exports = sendToken;