"use server";
import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import bcrypt from "bcryptjs";
import { auth, signIn, signOut } from "./auth";
import { ObjectId } from "mongodb";

export const login = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);
  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    console.log(err);
    if (err.message.includes("CredentialsSignin")) {
      return { error: "Invalid Username or Password" };
    }
    throw err;
  }
};
export const handleLogOut = async () => {
  await signOut();
};
export const register = async (prevState, formData) => {
  const { username, email, password, passwordRepeat } =
    Object.fromEntries(formData);
  if (password != passwordRepeat) {
    return { error: "Invlaid password" };
  }
  try {
    connectToDb();
    const user = await User.findOne({ username });
    if (user) {
      return { error: "User already exists!" };
    }
    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashpassword,
      count: 0,
    });
    await newUser.save();
    console.log("ddbb");
    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};
export const voteCount = async (prevState, formData) => {
  const { candidate_name } = Object.fromEntries(formData);

  try {
    const candidate = await Post.findOne({ candidate_name });
    await Post.deleteOne({ candidate_name });
    const party = candidate.party;
    const img = candidate.img;
    const description = candidate.description;
    const count = candidate.count + 1;
    const updateCandidate = new Post({
      candidate_name,
      party,
      img,
      description,
      count,
    });
    await updateCandidate.save();
    const session = await auth();
    const userid = new ObjectId("" + session?.user?.id);
    await User.findByIdAndUpdate(userid, { count: 1 }, { new: true });
    //console.log("Saved to DB");
    revalidatePath("/dashboard");
    revalidatePath("/result");
    return { success: true };
  } catch (err) {
    console.log(err);
  }
};
export const addCandidate = async (prevState, formData) => {
  const { candidate_name, img, party, description } =
    Object.fromEntries(formData);
  try {
    const addCandidate = new Post({
      candidate_name,
      party,
      img,
      description,
      count: 0,
    });
    await addCandidate.save();
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong" };
  }
};
export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDb();
    await Post.findByIdAndDelete(id);
    revalidatePath("/admin");
    revalidatePath("/dashboard");
  } catch (err) {
    console.log(err);
  }
};
