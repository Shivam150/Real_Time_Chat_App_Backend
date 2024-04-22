const joi = require( 'joi' );

const validateSchema = async (inputs , schema) => {
    try {
        const { error, value } = schema.validate(inputs);
        if (error){
            throw error.details ? error.details[0].message.replace(/['"]+/g, "") : "";
        }
        else {
            return false;
        }
    } catch (error) {
        throw error;
    }
};

const validateSignUp = async (req, property = "body") => {
    const schema = joi.object({
      email: joi.string().optional(),
      password: joi.string().optional(),
      fullName: joi.string().optional(),
      profilePic: joi.string().optional(),
      bio: joi.string().optional(),
    });
    return await validateSchema(req[property], schema);
  };





  module.exports = {
    validateSignUp,
  }

