import type { NextApiRequest, NextApiResponse } from "next";
import loginController from "../../controllers/loginController";
import connectDB from "../../utils/connectDB";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await connectDB();
    await loginController(req, res);
  } catch (err) {
    console.log({ err });
  }
}
