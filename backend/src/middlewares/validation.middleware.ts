import { NextFunction, Request, Response } from "express";

import Joi from "joi";
import { errorResponse } from "../helpers/responseUtil";

export default (schema: Joi.ObjectSchema) =>
  (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);

    if (!error) return next();

    const { details } = error;
    let message = details[0].message.replace(/['"]+/g, "");
    if (details[0].type === "string.pattern.base") {
      message =
        "Password must contain a minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character";
    }

    return errorResponse(res, 422, message);
  };
