import type { NextApiRequest, NextApiResponse } from "next";
import loginController from "../../controllers/loginController";
import connectDB from "../../utils/connectDB";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    await connectDB();
    await loginController(req, res);
  } catch (err) {
    console.log({ err });
  }
}
