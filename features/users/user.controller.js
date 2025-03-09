import UserModel from "./user.model.js";

export default class UserController {
  signup(req, res) {
    try {
      console.log(req.body);
      const { name, email, password } = req.body;
      const newUser = UserModel.register(name, email, password);
      return res
        .status(201)
        .send({ msg: "New user added sucessfully", Newuser: newUser });
    } catch (error) {
      console.log("Error:", error);
      return res.status(500).send({ msg: "Internal server error" });
    }
  }
  signin(req, res) {
    try {
      console.log(req.body);
      const { email, password } = req.body;
      const user = UserModel.login(email, password);
      if (user) {
        return res.status(200).send({ msg: "login sucessfull" });
      } else {
        return res.status(401).send({ msg: "Invalid Credentials" });
      }
    } catch (error) {
      console.log("Error:", error);
      return res.status(500).send({ msg: "Internal server error" });
    }
  }
}
