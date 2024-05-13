import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validateSignUp";

const Login = () => {
  const [validUser, setValidUser] = useState(true);
  const [errMsg, setErrMsg] = useState("");

  const email = useRef(null);
  const password = useRef(null);
  const fullname = useRef(null);

  const handleSignUpBtnClick = (e) =>{
    e.preventDefault();
  
    const message = checkValidateData(fullname.current.value,email.current.value, password.current.value);
 
    setErrMsg(message)

    // now go for sign in signup

  }

  const handleUserAuth = () => {
    console.log("clicked");
    setValidUser(!validUser);
  };

  return (
    <div>
      <Header></Header>
      <div className="absolute">
        <img
          src={
            "https://assets.nflxext.com/ffe/siteui/vlv3/ff5587c5-1052-47cf-974b-a97e3b4f0656/c2e7edb5-54a9-4f1b-896c-d9edcfcc2420/BD-en-20240506-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          }
          alt=""
        />
      </div>

      <form className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 border  text-white  bg-opacity-80 rounded-lg">
        <h1 className="text-3xl py-4">{validUser ? "Sign In" : "Sign Up"}</h1>
       { !validUser && <input
        ref={fullname}
          type="text"
          placeholder="Full Name"
          className="p-4 bg-gray-700 my-2  w-full rounded"
        />}
        <input
        ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 bg-gray-700 my-2  w-full rounded"
        />
      {/* <p className="text-red-500 text-semibold">{errMsg.toString().includes('Email') ?errMsg : " "}</p> */}

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-2 bg-gray-700  w-full rounded"
        />
          {/* <p className="text-red-500 text-semibold"> {errMsg.toString().includes('Password') ? errMsg : " "} </p> */}
          <p className="text-red-500 text-semibold"> {errMsg} </p>

        <button className="p-4 my-6 bg-red-500  rounded w-full" onClick={handleSignUpBtnClick}>
        {validUser ? "Sign In" : "Sign Up"}
        </button>

        <p
          className="cursor-pointer underline md:underline-offset-1"
          onClick={handleUserAuth}
        >
             {validUser ? "New to CineStream? SignUp Now" : "Already User? Sign In, Please."}
          
        </p>
      </form>
    </div>
  );
};

export default Login;
