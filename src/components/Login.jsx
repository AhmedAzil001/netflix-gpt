import React, { useState, useRef } from "react";
import Header from "./Header";
import { validateCred } from "../utils/Regex";

const Login = () => {
  const [isSignUp, setSignUp] = useState(false);
  const [isError, setError] = useState(false);
  const email = useRef();
  const password = useRef();

  const handleButtonClick = () => {
    const errorMessage = validateCred(
      email.current.value,
      password.current.value
    );
    if (errorMessage != null) setError(true);
    else setError(false);
  };

  

  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute w-full h-[100vh]"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_large.jpg"
          alt=""
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black/80 w-[30%] mt-32 mx-auto right-0 left-0 flex flex-col px-16 py-12 rounded-sm gap-10"
      >
        <h1 className="text-white text-3xl font-bold mb-3">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h1>
        {isSignUp && (
          <input
            className="p-3 bg-transparent border-[1px] outline-none text-white border-white rounded placeholder:text-white"
            type="text"
            placeholder="Name"
          />
        )}
        <div className="relative flex flex-col ">
          <input
            ref={email}
            className={`p-3 bg-transparent border-[1px] outline-none  rounded placeholder:text-white ${isError? 'border-red-600':'border-white'}`}
            type="text"
            placeholder="Email Address"
          />
          <span className="absolute top-[3.3rem] text-[0.85rem] text-red-600">
            {isError && "Please enter a valid email"}
          </span>
        </div>
        <div className="relative flex flex-col">
          <input
            ref={password}
            className={`p-3 bg-transparent border-[1px] outline-none  rounded placeholder:text-white ${isError? 'border-red-600':'border-white'}`}
            type="password"
            placeholder="Password"
          />
          <span className="absolute top-[3.3rem] text-[0.85rem] text-red-600">
            {isError && "Please enter a valid password"}
          </span>
        </div>
        <button
          onClick={() => handleButtonClick()}
          className="bg-red-600 rounded p-2 text-white font-semibold"
        >
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>
        {isSignUp ? (
          <p className=" text-slate-300 font-normal flex items-center gap-1">
            Already a user?
            <button
              onClick={() => setSignUp(!isSignUp)}
              className=" text-white font-semibold"
            >
              Sign in now.
            </button>
          </p>
        ) : (
          <p className=" text-slate-300 font-normal flex items-center gap-1">
            New to Netflix?
            <button
              onClick={() => setSignUp(!isSignUp)}
              className=" text-white font-semibold"
            >
              Sign up now.
            </button>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
