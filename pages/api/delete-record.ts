import type { NextApiRequest, NextApiResponse } from "next";
import isAuth from "../../controllers/isAuth";
import Record from "../../models/record";
import connectDB from "../../utils/connectDB";

export default async function updateRecords(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { recoredID, recUserID } = req.query;
  const token: string = req.headers.authorization || "";
  console.log({ token });
  try {
    await connectDB();
    const user = await isAuth(token.split(" ")[1]);
    console.log(user);
    if (user._id === recUserID || user.role === "admin") {
      await Record.deleteOne({ _id: recoredID });
      res.json({ message: "One Record deleted" });
    } else {
      res.json({ message: "Not authorized to delete a Record" });
    }
  } catch (err) {
    console.log({ err });
  }
}
