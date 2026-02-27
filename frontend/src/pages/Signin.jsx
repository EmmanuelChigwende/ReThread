import React from "react";
import RethreadLogo from "../assets/RethreadLogo.webp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  function HandleUserInput(e) {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  }

  function SignUserIn() {
    setLoading(true);
    if (!userDetails.email || !userDetails.password) {
      setLoading(false);
      return toast.error("fill in all provided fields");
    }

    axios
      .post("http://localhost:5000/api/Login", userDetails)
      .then((res) => {
        toast.success(res.data.message);
        localStorage.setItem("token", res.data.token);
      })
      .catch((err) => {
        console.log(err.message || "something went wrong");
        toast.error(err.message);
      })
      .finally(() => setLoading(false));
  }

  return (
    <div className="w-full h-full grid p-2 ">
      <h1 className="flex justify-center items-center">
        <img src={RethreadLogo} className="h-[60px]" />
      </h1>
      <div className="w-full h-[350px] shadow-lg p-5 rounded-[10px]">
        <h1 className="font-heading font-bold mb-[10px] text-[1.5rem]">
          SignIn To Account
        </h1>
        <div className="grid gap-2 text-[1.2rem]">
          <div className="grid gap-2">
            <label htmlFor="">Email</label>
            <input
              className="outline outline-[2px] outline-secondary text-[1rem] h-[2rem] pl-2 "
              type="email"
              name="email"
              value={userDetails.email}
              onChange={HandleUserInput}
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="">Password</label>
            <input
              className="outline outline-[2px] outline-secondary text-[1rem] h-[2rem] pl-2 "
              type="password"
              name="password"
              value={userDetails.password}
              onChange={HandleUserInput}
            />
          </div>
          <div className="w-full">
            <button
              className="w-full h-[50px] bg-primary rounded-[10px] font-bold text-textDefault"
              onClick={SignUserIn}
            >
              {loading ? "Loading...." : "Signin"}
            </button>
          </div>
          <div className="text-center">
            <p className="text-[0.8rem]" onClick={() => navigate("/")}>
              Don't have an Account?{" "}
              <span className="text-links underline">SignUp</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
