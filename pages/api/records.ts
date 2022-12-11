import type { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../utils/connectDB";
import isAuth from "../../controllers/isAuth";
import Record from "../../models/record";

export default async function records(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { recoredID, recUserID } = req.query;
  const token: string = req.headers.authorization || "";
  console.log({ token });
  try {
    await connectDB();
    const user = await isAuth(token.split(" ")[1]);
    console.log({ user });
    if (user.role === "admin") {
      const records = await Record.find({});
      console.log({ records });
      res.status(200).json({records});
    }
    else{
        const records = await Record.find({user:user._id});
        console.log({ records });
        res.status(200).json({records});
    }
  } catch (err) {
    console.log(err);
  }
}
