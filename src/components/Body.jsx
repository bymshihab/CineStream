import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {  onAuthStateChanged } from "firebase/auth"
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {

  const dispatch = useDispatch();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login></Login>,
    },
    {
        path: "/browser",
        element: <Browse></Browse>
    }
  ]);


// handeling user signin and ridirect
useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
    console.log(user, "user");
    if (user) {

      const{uid, email, displayName}  = user;
      dispatch(addUser({
        uid: uid,
        email: email,
        displayName: displayName
      }));
      
    } else {
      // User is signed out
      dispatch(removeUser());
    }
  });

},[])


  return (
    <div>
      {/* <Login></Login>
      <Browse></Browse> */}

      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default Body;
