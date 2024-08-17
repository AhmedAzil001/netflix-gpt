import React, { useState, useRef } from "react";
import Header from "./Header";
import { validateCred } from "../utils/Regex";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { B_IMG } from "../utils/constants";

const Login = () => {
  const [isSignUp, setSignUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    const errorMsg = validateCred(email.current.value, password.current.value);
    if (errorMsg === null) {
      if (isSignUp) {
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            updateProfile(auth.currentUser, {
              displayName: name.current.value,
              photoURL: "",
            })
              .then(() => {
                const { uid, email, displayName } = auth.currentUser;
                dispatch(
                  addUser({ uid: uid, email: email, displayName: displayName })
                );
              })
              .catch((error) => {
                console.log(error);
              });
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            setErrorMessage(errorMessage);
          });
      } else {
        //signin
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorMessage);
            console.log(errorMessage, errorCode);
          });
      }
    } else {
      setErrorMessage(errorMsg);
      console.log(errorMsg);
    }
  };

  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute w-full h-[100vh]"
          src={B_IMG}
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
            ref={name}
            className="p-3 bg-transparent border-[1px] outline-none text-white border-white rounded placeholder:text-white"
            type="text"
            placeholder="Full Name"
          />
        )}
        <div className="relative flex flex-col ">
          <input
            ref={email}
            className={`p-3 bg-transparent border-[1px] outline-none  rounded text-white placeholder:text-white ${
              errorMessage ? "border-red-600" : "border-white"
            }`}
            type="text"
            placeholder="Email Address"
          />
        </div>
        <div className="relative flex flex-col">
          <input
            ref={password}
            className={`p-3 bg-transparent border-[1px] outline-none text-white  rounded placeholder:text-white ${
              errorMessage ? "border-red-600" : "border-white"
            }`}
            type="password"
            placeholder="Password"
          />
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
              onClick={() => {
                setSignUp(!isSignUp);
                email.current.value = null;
                password.current.value = null;
                name.current.value = null;
              }}
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
        <p className="text-red-600">{errorMessage}</p>
      </form>
    </div>
  );
};

export default Login;
