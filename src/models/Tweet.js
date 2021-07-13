import strictTransportSecurity from "helmet/dist/middlewares/strict-transport-security";
import { Schema, model } from "mongoose";

const tweetSchema = Schema(
  {
    username: { type: String, require: true },
    id_user: { type: String, require: true },
    comment: { type: String, require: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Tweet", tweetSchema);
