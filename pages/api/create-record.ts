import type { NextApiRequest, NextApiResponse } from "next";
import isAuth from "../../controllers/isAuth";
import Record from "../../models/record";
import connectDB from "../../utils/connectDB";

export default async function createRecord(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, city, timezone } = req.body;
  console.log(req.body);
  const token: string = req.headers.authorization || "";
  try {
    await connectDB();
    const user = await isAuth(token.split(" ")[1]);
    console.log({ user });
    const record = new Record({ name, city, timezone, user: user._id });
    await record.save();
    console.log("Record Created");
    res.json(record);
  } catch (err) {
    console.log({ err });
    res.json(err);
  }
}
