"use client";

import { initFireBase } from "@/firebase";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../components/loading";
import { useRouter } from "next/navigation";
import { notify } from "@/util/notify";
import { ToastContainer } from "react-toastify";
const Auth = () => {
  const router = useRouter();

  const auth = getAuth();
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loading />;
  }
  if (user) {
    console.log("the user is singin");
    router.push("/");
  }

  function validateEmail() {
    const email = document.getElementById("email").value.trim();
    const is_email_valid = document.getElementById("emailForm").checkValidity();
    if (!is_email_valid) {
      notify("error", "wrong email address format");
      document.getElementById("email_error_message").innerText =
        "the email address is not valid";
      document.getElementById("email_error_message").classList.remove("hidden");
      return;
    }

    document.getElementById("email_error_message").classList.add("hidden");
    return email;
  }
  function registerNewUser() {
    const email = validateEmail();
    if (!email) {
      return;
    }
    createUserWithEmailAndPassword(auth, email, "stahe#2017")
      .then(async () => {
        console.log("register ok");
        notify("success", "the user has been registered");
        notify("success", "welcome to the application");
      })
      .catch((error) => {
        console.log(error);
        notify("error", "this email is already in use try to login instead");
        document.getElementById("email_error_message").innerText =
          "email already in use";
        document
          .getElementById("email_error_message")
          .classList.remove("hidden");
      });
  }
  function login() {
    const email = validateEmail();
    if (!email) {
      return;
    }
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, "stahe#2017")
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        notify("success", "you have successfully signed");
        notify("success", "welcome back!");
      })
      .catch((error) => {
        console.log(error);
        // const errorCode = error.code;
        // const errorMessage = error.message;
        notify(
          "error",
          "user not found, try again or try to register instead."
        );
        document.getElementById("email_error_message").innerText =
          "user not found, try to register instead";
        document
          .getElementById("email_error_message")
          .classList.remove("hidden");
      });
  }
  return (
    <>
      <ToastContainer />

      <div className="grid  h-screen place-items-center">
        <form id="emailForm">
          <div className="container m-auto flex flex-col justify-center items-center gap-8">
            <div className="flex items-center ">
              <svg
                className="h-8 w-8 text-indigo-500 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg>
              <h4 className="font-semibold ml-3 text-lg text-white">
                My To-Do App
              </h4>
            </div>
            <h2 className="text-center text-xl font-medium text-blue-gray">
              Entre your email address to keep all your notes in sync
            </h2>
            <div>
              <p
                id="email_error_message"
                className="hidden text-red-500 font-medium text-sm"
              >
                the email address is not valid
              </p>
              <div className="w-96 m-auto">
                <input
                  type="email"
                  id="email"
                  className=" -bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="exemple@email.com"
                  required
                />
              </div>
            </div>
            <div>
              <button
                onClick={registerNewUser}
                type="button"
                className=" dark:text-white text-black font-medium bg-blue-gray-700 hover:bg-blue-800 focus:ring-4   rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-gray/80 dark:hover:bg-blue-gray focus:outline-none "
              >
                register for a new account
              </button>
              <button
                onClick={login}
                type="button"
                className=" dark:text-white text-black font-medium bg-blue-gray-700 hover:bg-blue-800 focus:ring-4   rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-gray/80 dark:hover:bg-blue-gray focus:outline-none "
              >
                login to an existing account
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Auth;
