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
  try {
    await connectDB();
    const user = await isAuth(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYzOTRhYjUyOTdmN2M5YzFiODBlMmZjMCIsIm5hbWUiOiJNYWhtdWQiLCJlbWFpbCI6Im1haG11ZDY3OTlAZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmIkMTAkY0JlQndIMFVNMVk4b1Yyb3hGOFIuT3ovWkVLVnlXV3BIZVIxdkluTmxqMWJoRFRLcWhERC4iLCJfX3YiOjB9LCJpYXQiOjE2NzA3Mzc4NTYsImV4cCI6MTY3MDc0NTA1Nn0.xFkkw79DmGD5UJqRDYsKrhSDV8bNbxOd-956agh8Tdk"
    );
    console.log(user);
    const record = new Record({ name, city, timezone, user:user._id });
    await record.save();
    console.log("Record Created");
    res.json(record);
  } catch (err) {
    console.log({ err });
  }
}
