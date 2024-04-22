
const validations = require("../validators/index");
const services = require( "../services/user");
const response = require("../utilities/response");
const responseCode = require("../utilities/responseCode");

async function signUp(req, res, next) {
    try {
        console.log("Hello from  Signup controller");
      await validations.user.validateSignUp(req);
      let user = await services.signUp(req.body);
      return response.sendSuccessResponse(  
        req,
        res,
        user,
        responseCode.CREATED,
        process.lang.OTP_SEND_SUCCESS
      );
    } catch (error) {
      next(error);
    }
  }



  module.exports = {
    signUp,
  }