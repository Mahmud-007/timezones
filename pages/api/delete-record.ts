import type { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../utils/connectDB";
import isAuth from "../../controllers/isAuth";

type Data = {
  message: string;
};

export default async function deleteRecord(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    await connectDB();
    const payload = await isAuth(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYzOTRhYjUyOTdmN2M5YzFiODBlMmZjMCIsIm5hbWUiOiJNYWhtdWQiLCJlbWFpbCI6Im1haG11ZDY3OTlAZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmIkMTAkY0JlQndIMFVNMVk4b1Yyb3hGOFIuT3ovWkVLVnlXV3BIZVIxdkluTmxqMWJoRFRLcWhERC4iLCJfX3YiOjB9LCJpYXQiOjE2NzA3Mzc4NTYsImV4cCI6MTY3MDc0NTA1Nn0.xFkkw79DmGD5UJqRDYsKrhSDV8bNbxOd-956agh8Tdk"
    );
    console.log({ payload });
    res.status(200).json(payload);
  } catch (err) {
    console.log(err);
  }
}
