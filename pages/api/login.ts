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
  console.log("connecting to mongo");
  await connectDB();
  await loginController(req, res);
  res.status(200).json({ name: "John Doe" });
}
