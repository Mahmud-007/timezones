import jwt from "jsonwebtoken";

interface userType {
  _id: string;
  name: string;
  email: string;
  role: string;
  password: string;
  token: string;
}

const defaultUser: userType = {
  _id: "",
  name: "",
  email: "",
  role: "",
  password: "",
  token: "",
};

export default async function isAuth(token: string) {
  let decoded = defaultUser;
  try {
    decoded = jwt.verify(token, process.env.TOKEN_KEY || "")  as userType;
    // const user: any = decoded || "";
    // console.log({decoded, user})
    return decoded;
  } catch (err) {
    console.log({ err });
    return decoded;
  }
}
