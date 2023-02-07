import { IUserInput } from "../utils/auth.interface";
import { IUserOutput } from "./../utils/auth.interface";
import { hashPassword } from "./../helpers/encrypt";
import jwt from "jsonwebtoken";
import model from "../models";

require("dotenv").config();

const Model: any = model;
const { User } = Model;

export async function registerUser(input: IUserInput): Promise<IUserOutput> {
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
