import { NextFunction, Request, Response } from "express";
import { login, register } from "../services/auth.service";

import { IUserOutput } from "./../utils/auth.interface";
import { successResponse } from "../helpers/responseUtil";

class AuthController {
  static async registerUserHandler(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const response: IUserOutput = await register(req.body);
      return successResponse(res, 201, "registration successful", response);
    } catch (error) {
      next(error);
    }
  }

  static async loginHandler(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await login(req.body);
      return successResponse(res, 200, "login successful", response);
    } catch (error) {
      next(error);
    }
  }
}

export default AuthController;
