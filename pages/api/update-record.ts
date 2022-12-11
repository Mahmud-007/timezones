import type { NextApiRequest, NextApiResponse } from "next";
import isAuth from "../../controllers/isAuth";
import Record from "../../models/record";
import connectDB from "../../utils/connectDB";

type Data = {
  message: string;
};

export default async function updateRecords(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { recoredID, recUserID } = req.query;
  const token: string = req.headers.authorization || "";
  console.log({ token });
  try {
    await connectDB();
    const user = await isAuth(token.split(" ")[1]);
    console.log(user);
    if (user._id === recUserID || user.role === "admin") {
      let updatedRecord = await Record.findOneAndUpdate(
        { _id: recoredID },
        req.body
      );
      res.json(updatedRecord);
    } else {
      res.json({ message: "Not authorized to update a Record" });
    }
  } catch (err) {
    console.log({ err });
  }
}