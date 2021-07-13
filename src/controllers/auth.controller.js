import User from "../models/User";
import jwt from "jsonwebtoken";
import config from "../config";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  console.log("aqui");

  const newUser = new User({
    username,
    email,
    password: await User.encryptPassword(password),
  });

  const saveUser = await newUser.save();
  const token = jwt.sign({ id: saveUser._id }, config.SECRET, {
    expiresIn: 86400, //24 horas
  });

  res.status(200).json(token);
};

export const signin = async (req, res) => {
  console.log("comenzamos el singin");
  const userFound = await User.findOne({ email: req.body.email });
  if (!userFound) return res.status(400).json({ message: "User not found" });

  const matchPassword = await User.comparePassword(
    req.body.password,
    userFound.password
  );
  if (!matchPassword)
    return res.status(401).json({ token: null, message: "Invalid password" });

  console.log(userFound);
  const token = jwt.sign({ id: userFound._id }, config.SECRET, {
    expiresIn: 86400, //24 horas
  });
  res
    .status(200)
    .json({
      token: token,
      user: { name: userFound.username, id: userFound._id },
    });
};
