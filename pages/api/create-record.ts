import type { NextApiRequest, NextApiResponse } from "next";
import isAuth from "../../controllers/isAuth";
import Record from "../../models/record";
import connectDB from "../../utils/connectDB";

type Data = {
  name: string;
};

export default async function createRecord(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { name, city, timezone } = req.body;
  console.log(req.body)
  const { recoredID, recUserID } = req.query;
  const token: string = req.headers.authorization || "";
  try {
    await connectDB();
    const user = await isAuth(token.split(" ")[1] );
    console.log(user);
    const record = new Record({ name, city, timezone, user:user._id });
    await record.save();
    console.log("Record Created");
    res.json(record);
  } catch (err) {
    console.log({ err });
  }
}
