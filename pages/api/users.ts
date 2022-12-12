import type { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../utils/connectDB";
import isAuth from "../../controllers/isAuth";
import User from "../../models/user";

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
    if (user.role === "admin" || user.role === "manager") {
      const users = await User.find({});
      console.log({ users });
      res.status(200).json({users});
    }
    else{
        const users = await User.find({user:user._id});
        console.log({ users });
        res.status(200).json({users});
    }
  } catch (err) {
    console.log({err});
    res.status(200).json({err});

  }
}
