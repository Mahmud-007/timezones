import type { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../utils/connectDB";
import signupController from "../../controllers/signupController";

type Data = {
  name: string;
};

export default async function signup(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req.body);
  try {
    await connectDB();
    await signupController(req, res);
  } catch (err) {
    console.log({ err });
  }
}
