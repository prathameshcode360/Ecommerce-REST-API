import UserModel from "../features/users/user.model.js";

export default function basicAuth(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(401).send({ msg: "Unauthorized User" });
  }
  const base64Credentials = authHeader.replace("Basic", "").trim();
  const decodedCredentials = Buffer.from(base64Credentials, "base64").toString(
    "utf-8"
  );
  const creds = decodedCredentials.split(":");
  const user = UserModel.getAll().find(
    (u) => u.email == creds[0] && u.password == creds[1]
  );
  if (!user) {
    return res.status(401).send({ msg: "Invalid Credentials" });
  }
  next();
}
