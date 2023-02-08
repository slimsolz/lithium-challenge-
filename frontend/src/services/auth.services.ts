import axios from "axios";

const REGISTER_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/register`;
const LOGIN_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`;

interface IUserAttributes {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface ILoginAttributes
  extends Pick<IUserAttributes, "email" | "password"> {}

export const register = async (
  data: IUserAttributes
): Promise<Record<string, any>> => {
  const response = await axios.post(REGISTER_URL, data);
  return response.data;
};

export const login = async (
  data: ILoginAttributes
): Promise<Record<string, any>> => {
  const response = await axios.post(LOGIN_URL, data);
  return response.data;
};

export const saveUser = (user: IUserAttributes) => {
  const fullName = `${user.firstName} ${user.lastName}`;
  localStorage.setItem("user", JSON.stringify(fullName));
};

export const isLoggedIn = () => {
  let user = localStorage.getItem("user") as string;
  return !!user ? JSON.parse(user) : null;
};

export const logOut = () => {
  localStorage.removeItem("user");
};
