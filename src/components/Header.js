import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        //TODO: Error page
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  return (
    <div className="w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src="data:image/png;base64,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"
        alt="logo"
      />
      {user && (
        <div className="flex p-2">
          <img src="" alt="user-icon" />
          <button
            onClick={handleSignOut}
            className="bg-red-700 text-white font-bold"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
