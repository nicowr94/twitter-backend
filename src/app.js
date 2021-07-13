import express from "express";
import cors from "cors";
import morgan from "morgan";
import pkg from "../package.json";
import { createUser } from "./libs/initialSetup";

import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/users.routes";
import tweetRoutes from "./routes/tweet.routes";

const app = express();
createUser(); //proximamente
app.set("pkg", pkg);

//settings
app.set("port", process.env.PORT || 4000);
app.use(morgan("dev"));

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.json({
    author: app.get("pkg").author,
    description: app.get("pkg").description,
    version: app.get("pkg").version,
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/tweet", tweetRoutes);

export default app;
