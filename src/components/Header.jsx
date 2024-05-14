import React from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        // -> navigate error page
      });
  };

  return (
    <div
      className={`absolute px-8 py-2 z-10  w-screen flex justify-between items-center ${
        user ? "shadow-xl border" : ""
      }`}
    >
      <div>
        <img className="w-40 rounded-full" src={"/img/logo_CS.svg"} alt="" />
      </div>

      {user && (
        <div>
          <button
            className="border p-2 bg-yellow-500 font-semibold rounded"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
