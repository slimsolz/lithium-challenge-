import { LoginSchema, RegisterSchema } from "../utils/schemas";
import { errorResponse, successResponse } from "../helpers/responseUtil";
import express, { Request, Response } from "express";

import AuthController from "../controllers/auth.controller";
import validationMiddleware from "../middlewares/validation.middleware";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  successResponse(res, 200, "lithium challenge api");
});

router.post(
  "/auth/register",
  validationMiddleware(RegisterSchema),
  AuthController.registerUserHandler
);

router.post(
  "/auth/login",
  validationMiddleware(LoginSchema),
  AuthController.loginHandler
);

router.all("*", (req: Request, res: Response) => {
  errorResponse(res, 404, "404 route not found.");
});

export default router;
