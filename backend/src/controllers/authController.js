import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../lib/utils.js";
import cloudinary from "../lib/cloudinary.js";

export const signup = async (req, res) => {
  try {
    const newUserd = req.body;
    if (!newUserd.fullName || !newUserd.email || !newUserd.password) {
      return res.status(400).json({ message: "provide all the details" });
    }
    if (newUserd.password.length < 6) {
      return res
        .status(400)
        .json({ message: "password must be greater than 6" });
    }
    const user = await User.findOne(
      { email: newUserd.email });

    const userN = await User.findOne({
      fullName: newUserd.fullName
    })
    if (userN) return res.status(400).json({ message: "username is taken!please try another one" });
    if (user) return res.status(400).json({ message: "email is taken!please try another one" });
    //hash
    const hasedpass = await bcrypt.hash(newUserd.password, 10);
    newUserd.password = hasedpass;
    const newUser = new User(newUserd);
    if (newUser) {
      await newUser.save();
      generateToken(newUser._id, res);
      res.status(201).json({ ...newUser.toObject() });
    } else {
      res.status(400).send({ message: "invalid data" });
    }
  } catch (error) {
    console.log("error in signup controller", error.message);
    res
      .status(500)
      .json({ message: "Internal Server ERror", errors: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "invalid crendentials" });
    }
    const isCorrect = await bcrypt.compare(password, user.password);
    if (!isCorrect)
      return res.status(400).json({ message: "Invalid Credntials" });
    generateToken(user._id, res);
    res.status(201).json({
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}; export const logout = (req, res) => {
  try {
    const isProd = process.env.NODE_ENV === "production";

    res.clearCookie("jwt", {
      httpOnly: true,
      sameSite: isProd ? "none" : "lax",
      secure: isProd,
      path: "/",
    });

    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { profilePic } = req.body;
    const userId = req.user._id;
    if (!profilePic) {
      return res.status(400).json({ message: "proficPic is required my frnd" });
    }
    const uploadRes = await cloudinary.uploader.upload(profilePic);
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        profilePic: uploadRes.secure_url,
      },
      { new: true }
    );
    res.status(201).json(updatedUser);
  } catch (error) {
    console.log("error in updateProfilePic controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const checkAuth = (req, res) => {
  try {
    res.status(200).json(req.user);
  } catch (error) {
    console.log("error in check auth controller", error.message);
    res.status(500).json({ messgae: "INternal Server Error" });
  }
};

export const getUsers = async (req, res) => {
  try {
    let users = [];
    users = await User.find();
    res.status(200).json({ users });
    console.log(users);
  } catch (error) {
    console.log("error in getUsers auth controller", error.message);
    res.status(500).json({ messgae: "Internal Server Error" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    let email = req.params.email;
    let dbres = await User.findOneAndDelete({ email: email });
    res.status(200).json({ message: "deleted this:", payload: dbres });
  } catch (error) { }
};
