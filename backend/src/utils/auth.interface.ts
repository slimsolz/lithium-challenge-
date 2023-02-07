import { Optional } from "sequelize";

interface IUserAttributes {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IUserInput extends Optional<IUserAttributes, "id"> {}
export interface IUserOutput extends Omit<IUserAttributes, "password"> {}
