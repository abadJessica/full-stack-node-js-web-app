import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  user: String,
  password: String
});

const User = mongoose.model("User", userSchema);

async function authenticateUser(username, password) {
  const user = await User.findOne({ user: username, password: password });
  return user ? true : false;
}

export default {
  authenticateUser
};