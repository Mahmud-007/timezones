import type { NextApiRequest, NextApiResponse } from "next";
import { isJSDocAuthorTag } from "typescript";
import connectDB from "../../utils/connectDB";
import isAuth from "../../controllers/isAuth";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    await connectDB();
    await isAuth(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjM5MmQ2MTcwNjA2MjEyNmQzNDA3ZTYxIiwiZW1haWwiOiJhZG1pbkBsc2ZzYWR0cmVkLmNvbSIsImlhdCI6MTY3MDU3Mzg2OSwiZXhwIjoxNjcwNTgxMDY5fQ.UWBky6SLZkMBW3mbIxknLW0cYB3mlzkKRaQu0pMTBdc"
    );
    res.status(200).json({ name: "John Doe" });
  } catch (err) {
    console.log(err);
  }
}
