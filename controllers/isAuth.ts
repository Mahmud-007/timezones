import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

export default async function isAuth(token: string) {
  if (!token) {
    return false;
  }
  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY || "");
    // req.user = decoded;
    console.log({ decoded });
  } catch (err) {
    return false;
  }
  return true;
}
