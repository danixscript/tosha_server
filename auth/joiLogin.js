const joi = require("joi");

const loginUser = joi.object({
  
  name: joi.string().required().messages({
    "string.required": `"name"`,
  }),

  password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{8,30}$"))
      .required()
      .messages({
        "string.pattern.base": "password must be min 8 max 30  and no simbuls",
      }),
      remember:joi.string()


});

const createUserSchema = (data) => {
  return loginUser.validateAsync(data, { abortEarly: false });
};

module.exports.createUserSchema = createUserSchema;
