import type { NextApiRequest, NextApiResponse } from "next";
import isAuth from "../../controllers/isAuth";
import User from "../../models/user";
import connectDB from "../../utils/connectDB";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export default async function updateRecords(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { userID } = req.query;
  const { _id, name, email, role, password } = req.body;
  const bearerToken: string = req.headers.authorization || "";
  console.log({ bearerToken });
  try {
    await connectDB();
    const user = await isAuth(bearerToken.split(" ")[1]);
    console.log({ user });
    const encryptedPassword = await bcrypt.hash(password, 10);
    const token = jwt.sign(
      { _id, name, email, role },
      process.env.TOKEN_KEY || "",
      {
        expiresIn: "2h",
      }
    );
    const updatedUserObject = {
      _id: user._id,
      name,
      email,
      role,
      encryptedPassword,
      token,
    };
    if (user.role === "admin" || user.role === "manager") {
      let updatedUser = await User.findOneAndUpdate(
        { _id: userID },
        updatedUserObject
      );
      res.json(updatedUser);
    } else if (user._id === userID) {
      let updatedUser = await User.findOneAndUpdate(
        { _id: user._id },
        updatedUserObject
      );
      res.json(updatedUser);
    } else {
      res.json({ message: "Can not update user" });
    }
  } catch (err) {
    console.log({ err });
    res.json({ message: err });
  }
}
