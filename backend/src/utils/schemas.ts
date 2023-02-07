import Joi from "joi";

export const RegisterSchema = Joi.object({
  firstName: Joi.string().required().min(1).max(999),
  lastName: Joi.string().required().min(1).max(999),
  email: Joi.string().required().email(),
  password: Joi.string()
    .required()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    )
    .min(8),
});

export const LoginSchema = Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string().required().min(8),
});
