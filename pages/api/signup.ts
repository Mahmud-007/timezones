import type { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../utils/connectDB";
import signupController from "../../controllers/signupController";

export default async function signup(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.body);
  try {
    await connectDB();
    await signupController(req, res);
  } catch (err) {
    console.log({ err });
  }
}
