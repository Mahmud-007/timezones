import type { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../utils/connectDB";
import isAuth from "../../controllers/isAuth";
import Record from "../../models/record";
import { resolve } from "path";

export default async function records(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token: string = req.headers.authorization || "";
  console.log({ token });
  try {
    await connectDB();
    const user = await isAuth(token.split(" ")[1]);
    console.log({ user });
    if (user.role === "admin") {
      const records = await Record.find({});
      console.log({ records });
      res.status(200).json({ records });
    } else if (user.role === "user") {
      const records = await Record.find({ user: user._id });
      console.log("hre", { records });
      res.status(200).json({ records });
    } else {
      res.status(403).json({ message: "Not authorized to read records" });
    }
  } catch (err) {
    console.log(err);
  }
}
