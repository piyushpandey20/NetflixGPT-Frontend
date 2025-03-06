import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/42a0bce6-fc59-4c1c-b335-7196a59ae9ab/web/IN-en-20250303-TRIFECTA-perspective_d5f81427-d6cf-412d-8e86-2315671b9be1_large.jpg"
          alt="background-image"
        />
      </div>
      <form className="absolute my-36 mx-auto right-0 left-0 w-3/12 text-white">
        <h1 className="font-bold text-3xl py-4">Sign In</h1>
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-2 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full"
        />
        <button className="p-4 my-4 bg-red-700 w-full">Sign in</button>
      </form>
    </div>
  );
};

export default Login;
