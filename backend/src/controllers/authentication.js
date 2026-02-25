import UserModel from "../models/userModel.js";
import CheckHash from "../middleware/comparepasswordHash.js";
import EncryptPassword from "../middleware/hashPassword.js";
import GenerateToken from "../utils/jwtTokenCreation.js";
import TestPasswordStrenght from "../middleware/CheckPasswordStrenght.js";
import TestEmail from "../middleware/CheckEmailFormat.js";

async function LoginUser(req, res) {
  try {
    const { email, password } = req.body;

    if (!email) {
      return res.status(400).json({ message: "please input an email address" });
    } else {
      const userDetails = await UserModel.findOne({ email: email });

      if (userDetails.email) {
        if (email === userDetails.email) {
          if (!password) {
            return res.status(400).json({ message: "please input a password" });
          } else {
            if (CheckHash(password, userDetails.password)) {
              const token = await GenerateToken(userDetails._id);
              return res.status(200).json({
                message: `${userDetails.name} logged in successfully`,
                token: token,
              });
            } else {
              return res
                .status(400)
                .json({ message: "invalid email or password" });
            }
          }
        } else {
          return res
            .status(400)
            .json({ message: "invalid  email or password" });
        }
      } else {
        return res.status(200).json({ message: "user does not exist" });
      }
    }
  } catch (err) {
    console.log("failed to log user in");
  }
}

async function SignupUser(req, res) {
  try {
    const userDetails = req.body;

    if (!userDetails.name || !userDetails.email || !userDetails.password) {
      return res
        .status(401)
        .json({ message: "please enter all  provided fields" });
    }

    const checkemail = TestEmail(userDetails.email);
    if (checkemail !== true) {
      return res
        .status(401)
        .json({ message: "invalid email format", error: checkemail });
    }

    const checkpassword =  TestPasswordStrenght(userDetails.password)
    if(checkpassword !== true){
      return res.status(401).json({message:"password does not meet strenght requirements",error:checkpassword})
    }

    const DoesUserExist = await UserModel.findOne({email:userDetails.email})
    if(DoesUserExist){
      return res.status(401).json({message:"user with this email already exists"})
    }

    if(checkpassword === true){
      const HashedPassword = await EncryptPassword(userDetails.password)
      await UserModel.create({...userDetails,password:HashedPassword})
      return res.status(201).json({message:"user successfully signed up..."})
    }

  } catch (err) {
    console.log("failed to create user");
  }
}

export { LoginUser, SignupUser };
