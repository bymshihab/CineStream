import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validateSignUp";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [validUser, setValidUser] = useState(true);
  const [errMsg, setErrMsg] = useState("");

  const email = useRef(null);
  const password = useRef(null);
  const fullname = useRef(null);

  const handleSignUpBtnClick = (e) => {
    e.preventDefault();

    const fullnameValue =
      validUser && fullname.current ? fullname.current.value : "";
    const emailValue = email.current ? email.current.value : "";
    const passwordValue = password.current ? password.current.value : "";

    const message = checkValidateData(fullnameValue, emailValue, passwordValue);

    setErrMsg(message);

    if (!validUser) {
      // sign up
      console.log("sign up!");
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullname.current.value,
          }).then(() => {
            // Profile updated!
            const{uid, email, displayName}  = auth.currentUser;
            dispatch(addUser({
              uid: uid,
              email: email,
              displayName: displayName
            }));
            navigate("/browser");
          }).catch((error) => {
            // An error occurred
            setErrMsg(error.errMsg);
          });

          console.log(user);
          navigate("/browser")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMsg(errorCode + "-" + errorMessage);
        });
    } else {
      // sign in

      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // alert("login success!");
          navigate("/browser")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrMsg(errorCode + "-" + errorMessage);
        });
    }
  };

  const handleUserAuth = () => {
    setValidUser(!validUser);
  };

  return (
    <div className="">
      <Header></Header>
      <div className="absolute ">
        <img
          src={
            "https://assets.nflxext.com/ffe/siteui/vlv3/ff5587c5-1052-47cf-974b-a97e3b4f0656/c2e7edb5-54a9-4f1b-896c-d9edcfcc2420/BD-en-20240506-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          }
          alt=""
        />
      </div>

      <form className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 border  text-white  bg-opacity-80 rounded-lg">
        <h1 className="text-3xl py-4">{validUser ? "Sign In" : "Sign Up"}</h1>
        {!validUser && (
          <input
            ref={fullname}
            type="text"
            placeholder="Full Name"
            className="p-4 bg-gray-700 my-2  w-full rounded"
          />
        )}
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

        <button
          className="p-4 my-6 bg-yellow-600  rounded w-full"
          onClick={handleSignUpBtnClick}
        >
          {validUser ? "Sign In" : "Sign Up"}
        </button>

        <p
          className="cursor-pointer underline md:underline-offset-1"
          onClick={handleUserAuth}
        >
          {validUser
            ? "New to CineStream? SignUp Now"
            : "Already User? Sign In, Please."}
        </p>
      </form>
    </div>
  );
};

export default Login;
