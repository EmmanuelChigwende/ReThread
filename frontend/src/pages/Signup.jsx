import React from "react";
import RethreadLogo from "../assets/RethreadLogo.webp";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({ email: "", password: "" });
  const [loading,setLoading] = useState(false)

  function HandleUserInput(e) {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  }

  function CreateUserAccount() {
    setLoading(true)
      axios.post('http://localhost:5000/api/signUp',userDetails)
      .then(
        (res) => {
          toast.success(res.data)
        }
      ).catch((err)=>{
        toast.error(err.message || "something went wrong")
      })
      .finally(
        setLoading(false)
      )
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
          <p className="grid gap-2">
            <label htmlFor="">Email</label>
            <input
              className="outline outline-2 outline-secondary rounded-[5px] pl-2"
              type="email"
              name="email"
              value={userDetails.email}
              onChange={HandleUserInput}
              required
            />
          </p>
          <p className="grid gap-2">
            <label htmlFor="">Password</label>
            <input
              className="outline outline-2 outline-secondary rounded-[5px] pl-2"
              type="password"
              name="password"
              value={userDetails.password}
              onChange={HandleUserInput}
              required
            />
          </p>

          <div>
            <button
              className="w-full h-[50px] bg-primary rounded-[15px] text-bold text-textDefault  mt-[10px]"
              onClick={(e)=>CreateUserAccount()}
            >
              {
                loading ? "Siging Up..." : "SignUp"
              }
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
