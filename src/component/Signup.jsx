import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function Signup(props) {
  let email;
  let password;
  const mailInputHandler = (e) => {
    props.setEmail(e.target.value);
  };
  const passInputHandler = (e) => {
    props.setPassword(e.target.value);
  };
  const loginSubmitHandler = (e) => {
    e.preventDefault();
    props.setEmail("");
    props.setPassword("");
    email = props.email;
    password = props.password;
    console.log(email, password);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;

        console.log(error);
        // ..
      });
    // export const email = props.email;
    // export const password = props.password;
  };
  return (
    <div className="flex justify-center items-center h-screen bg-blue-300">
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-12 bg-blue-200 rounded-3xl w-1/5">
        <div className="w-full max-w-md space-y-8">
          <div>
            {/* <img
              class="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            /> */}
            <p className="text-3xl text-blue-700 py-2 font-black">Sign Up</p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={loginSubmitHandler}>
            <input type="hidden" name="remember" value="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div className="mb-7 text-left">
                <label>Email address</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                  value={props.email}
                  onChange={mailInputHandler}
                />
              </div>
              <div className="text-left">
                <label>Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                  value={props.password}
                  onChange={passInputHandler}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
