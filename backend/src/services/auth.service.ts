import { ILoginAttributes, IUserInput } from "../utils/auth.interface";
import { hashPassword, verifyPassword } from "./../helpers/encrypt";

import { BadRequestResponse } from "./apiError";
import { IUserOutput } from "./../utils/auth.interface";
import jwt from "jsonwebtoken";
import model from "../models";

require("dotenv").config();

const Model: any = model;
const { User } = Model;

export async function register(input: IUserInput): Promise<IUserOutput> {
  const { firstName, lastName, email, password } = input;
  const hashedPassword = await hashPassword(password);

  const user = await User.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });

  return {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
  };
}

export async function login(
  input: ILoginAttributes
): Promise<{ token: string }> {
  const { email, password } = input;

  const user = await User.findOne({ email: email.toLowerCase() });
  if (user && (await verifyPassword(password, user.password))) {
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      },
      process.env.JWT_SECRET_KEY as string,
      { expiresIn: process.env.TOKEN_EXPIRATION as string }
    );

    return { token };
  } else {
    throw new BadRequestResponse("invalid credentials");
  }
}
