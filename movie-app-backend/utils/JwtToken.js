const sendUserToken = (user) => {
    const token = user.generateJsonWebToken();
    const options = {
      expires: new Date(
        Date.now() + 30 * 60 * 1000 
      ),
      httpOnly: true
    };
    return ({
      token,
      options
    })
  };
const sendAdminToken = (admin) => {
    const token = admin.generateJsonWebToken();
    const options = {
      expires: new Date(
        Date.now() + 30 * 60 * 1000 
      ),
      httpOnly: true
    };
    return ({
      token,
      options
    })
  };
  
  module.exports = {
    sendUserToken,
    sendAdminToken
  };