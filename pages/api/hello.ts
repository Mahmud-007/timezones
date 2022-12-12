import type { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../utils/connectDB";
import isAuth from "../../controllers/isAuth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token: string = req.headers.authorization || "";
  console.log({ token });
  try {
    await connectDB();
    const user = await isAuth(token.split(" ")[1]);
    console.log({ user });
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
}
