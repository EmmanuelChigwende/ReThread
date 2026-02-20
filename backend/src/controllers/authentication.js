import UserModel from "../models/userModel.js";
import CheckHash from "../middleware/comparepasswordHash.js";
import EncryptPassword from "../middleware/hashPassword.js";
import GenerateToken from "../utils/jwtTokenCreation.js";
import TestPasswordStrenght from "../middleware/CheckPasswordStrenght.js";

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
    const name = req.body.name;
    const userEmail = req.body.email;
    const password = req.body.password;

    if (!userEmail || !password || !name) {
      return res
        .status(400)
        .json({ message: "please input email ,password and name" });
    } else {
      const Exists = await UserModel.findOne({ email: userEmail });

      if (Exists) {
        return res.status(400).json({ message: "user already exists" });
      } else {
        try {
          const CheckPasswordStrenght = TestPasswordStrenght(password);

          if (CheckPasswordStrenght !== true) {
            return res.status(400).json({ CheckPasswordStrenght});
          } else {
            const hashedPassword = await EncryptPassword(password);
            console.log(hashedPassword);

            await UserModel.create({
              name: name,
              email: userEmail,
              password: hashedPassword,
            });
            return res
              .status(200)
              .json({ message: "user created successfully" });
          }
        } catch (err) {
          return console.log("failed to strenght check password",err)
        }
      }
    }
  } catch (err) {
    console.log("failed to signup user", err);
  }
}

export { LoginUser, SignupUser };
