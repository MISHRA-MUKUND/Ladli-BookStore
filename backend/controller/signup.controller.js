import User from "../model/signup.model.js";
import bcryptjs from "bcryptjs";
export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const existUser = await User.findOne({ email: email });
    if (existUser) {
      return res.status(400).json({ message: "user already existed" });
    } else {
      const hashPassword = await bcryptjs.hash(password, 10);
      const newUser = new User({
        fullname,
        email,
        password: hashPassword,
      });
      await newUser.save();
      res.status(201).json({ message: "user created successfully",user:{
        _id: newUser._id,
        fullname: newUser.fullname,
        email: newUser.email,
      } });
    }
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const ismatch = await bcryptjs.compare(password, user.password);
    if (!user || !ismatch) {
      res.status(400).json({ message: "Invalid Username or Password" });
    } else {
      res.status(200).json({
        user: {
          _id: user._id,
          fullname: user.fullname,
          email: user.email,
        },
        message: "Login Successfully",
      });
    }
  } catch (error) {
    console.log("Error :",error);
    res.status(500).json({message:"Internal Server Error"});
  }
};
