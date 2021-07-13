import jwt from "jsonwebtoken";
import config from "../config";
import User from "../models/User";

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];

    console.log(token);
    if (!token) return res.status(403).json({ message: "Not token provided" });

    const decoded = jwt.verify(token, config.SECRET);
    req.userId = decoded.id;

    const user = await User.findById(req.userId, { password: 0 });
    if (!user) return res.status(404).json({ message: "Not user found" });

    console.log(user);
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
