import type { NextApiRequest, NextApiResponse } from "next";
import User from "../models/user";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

type Data = {
  name: string;
};

export default async function signupController(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { name, email, role, password } = req.body;
    if (!(email && password && name)) {
      res.status(400).send("All input is required");
    }
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }
    const encryptedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email: email.toLowerCase(),
      password: encryptedPassword,
      role,
    });
    const token = jwt.sign({ name, email, role }, process.env.TOKEN_KEY || "", {
      expiresIn: "2h",
    });
    user.token = token;
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err });
  }
}
