import jwt from "jsonwebtoken";
import {UserType} from "../src/type";

const defaultUser: UserType = {
  _id: "",
  name: "",
  email: "",
  role: "",
  password: "",
  token: "",
};

export default async function isAuth(token: string) {
  let decoded = defaultUser;
  try {
    decoded = jwt.verify(token, process.env.TOKEN_KEY || "") as UserType;
    return decoded;
  } catch (err) {
    console.log({ err });
    return decoded;
  }
}
