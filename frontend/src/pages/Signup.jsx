import React from "react";
import RethreadLogo from "../assets/RethreadLogo.webp";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  function HandleUserInput(e) {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  }

  function CreateUserAccount() {
    setLoading(true);

    const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!EmailRegex.test(userDetails.email)) {
      setLoading(false);
      return toast.error("invalid email format");
    }

    const passwordRegex = {
      hasupper: /[A-Z]/,
      haslower: /[a-z]/,
      hasnumber: /[0-9]/,
      hasspecial: /[!@#$%^&*()_+=]/,
    };
    if (userDetails.password.length <= 8) {
      setLoading(false);
      return toast.error("password must be more than 8 characters");
    }

    if (!passwordRegex.haslower.test(userDetails.password)) {
      setLoading(false);
      return toast.error("password should include lowercase characters");
    }

    if (!passwordRegex.hasnumber.test(userDetails.password)) {
      setLoading(false);
      return toast.error("password should include atleast one number");
    }

    if (!passwordRegex.hasspecial.test(userDetails.password)) {
      setLoading(false);
      return toast.error(
        "password should include alteast one special character",
      );
    }

    if (!passwordRegex.hasupper.test(userDetails.password)) {
      setLoading(false);
      return toast.error(
        "password should inlcude atleast one Uppercase character",
      );
    }

    axios
      .post("http://localhost:5000/api/SignUP", userDetails)
      .then((res) => {
        toast.success(res.data.message)
        navigate("/Signin")
      })
      .catch((err) => {
        if(err.status === 409){
          toast.error("user with this email already exists" || "something went wrong");
        }
        else{
          toast.error(err.message,"something went wrong")
        }
      })
      .finally(() => setLoading(false));
  }

  return (
    <div className="h-full w-full p-2 grid">
      <h1 className="flex  items-center justify-center text-center font-heading mb-[10px]">
        <img className="h-[60px]" src={RethreadLogo} alt="rethread logo" />
      </h1>
      <div className="w-full h-[350px] shadow-lg p-5 rounded-[10px]">
        <h1 className=" text-[1.5rem] text-heading font-bold mb-[10px]">
          Create Account
        </h1>
        <div className="grid gap-2  mb-[10px] text-[1.2rem]">
          <div className="grid gap-2">
            <label htmlFor="">Email</label>
            <input
              className="text-[1rem] h-[2rem] truncate outline outline-2 outline-secondary rounded-[5px] pl-2"
              type="email"
              name="email"
              value={userDetails.email}
              onChange={HandleUserInput}
              required
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="">Password</label>
            <input
              className="text-[1rem] h-[2rem] outline outline-2 outline-secondary rounded-[5px] pl-2"
              type="password"
              name="password"
              value={userDetails.password}
              onChange={HandleUserInput}
              required
            />
          </div>

          <div>
            <button
              className="w-full h-[50px] bg-primary rounded-[15px] text-bold text-textDefault  mt-[10px]"
              onClick={(e) => CreateUserAccount()}
            >
              {loading ? "Loading..." : "SignUp"}
            </button>
          </div>
          <div className="text-[0.8rem] text-center">
            <p onClick={() => navigate("/SignIn")}>
              Already have an Account?{" "}
              <span className="text-links underline"> SignIn</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
