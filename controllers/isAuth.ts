import jwt from "jsonwebtoken";
import { User } from "../src/type";

export default async function isAuth(token: string) {
  if (!token) {
    return false;
  }
  try {
    const decoded = await jwt.verify(
      token,
      process.env.TOKEN_KEY || ""
    );
    const user = decoded.user;
    console.log("decode", decoded);
    return user;
  } catch (err) {
    console.log({ err });
    return false;
  }
}
