import { NextFunction, Request, Response } from "express";

import { IUserOutput } from "./../utils/auth.interface";
import { registerUser } from "../services/auth.service";
import { successResponse } from "../helpers/responseUtil";

class AuthController {
  static async registerUserHandler(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const response: IUserOutput = await registerUser(req.body);
      return successResponse(res, 201, "registration successful", response);
    } catch (error) {
      next(error);
    }
  }
}

export default AuthController;
