// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { connect } from "http2";
import type { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../utils/connectDB";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log("connecting to mongo");
   connectDB();
  console.log("connected");
  res.status(200).json({ name: "John Doe" });
}
