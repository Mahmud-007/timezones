import type { NextApiRequest, NextApiResponse } from "next";
import Record from "../../models/record";
import connectDB from "../../utils/connectDB";

type Data = {
  name: string;
};

export default async function createRecord(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { name, city, timezone, user } = req.body;
  console.log(req.body)
  try {
    await connectDB();
    const record = new Record({ name, city, timezone, user });
    await record.save();
    console.log("Record Created");
    res.json(record);
  } catch (err) {
    console.log({ err });
  }
}
