import jwt from "jsonwebtoken";

export default async function isAuth(token: string) {
  if (!token) {
    return false;
  }
  try {
    const decoded = await jwt.verify(token, process.env.TOKEN_KEY || "");
    const user: any = decoded.user || "";
    return user;
  } catch (err) {
    console.log({ err });
    return false;
  }
}
