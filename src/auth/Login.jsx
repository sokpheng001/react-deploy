import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faSun,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export function Login() {
  const [darkMode, setDarkMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    const body = document.body;
    const header = document.querySelector("header");

    if (darkMode) {
      body.classList.add("dark");
      if (header) {
        header.classList.add("dark");
      }
    } else {
      body.classList.remove("dark");
      if (header) {
        header.classList.remove("dark");
      }
    }

    return () => {
      body.classList.remove("dark");
      if (header) {
        header.classList.remove("dark");
      }
    };
  }, [darkMode]);

  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleLogin = async (values) => {
    // Simulate login logic
    const loginRes = { access: true }; // Replace with actual login function
    if (loginRes.access) {
      toast.success("Login Successfully");
      navigate("/");
    } else {
      toast.error("Login failed");
    }
  };

  return (
    <section>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Email is invalid")
            .required("Email is required"),
          password: Yup.string()
            .matches(
              regex,
              "Password must contain at least 8 characters, one uppercase, one lowercase, one number, and one special character"
            )
            .required("Password is required"),
        })}
        onSubmit={(values, { resetForm }) => {
          console.log(values)
          handleLogin(values);
          resetForm();
        }}
      >
        <Form className="min-h-screen font-sans antialiased bg-gray-50 dark:bg-gray-950">
          <div className="flex flex-col items-center justify-center min-h-screen p-6">
            <div className="w-full max-w-md">
              <div className="p-8 rounded-2xl bg-white shadow dark:bg-[#27272A] dark:border-gray-600">
                <div className="text-center mb-14">
                  
                  <div className="flex justify-between mb-8">
                    <a href="/" className="flex justify-center ">
                      <button
                        type="button"
                        className="relative z-0 inline-flex items-center group dark:text-white"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="28"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"
                          ></path>
                        </svg>
                      </button>
                    </a>
                    <Link to="/" className="flex">
                    <img
                      src="./src/assets/logo_icon.png"
                      alt="logo"
                      className="inline-block w-10"
                    />
                    <h2 className="text-center flex justify-center items-center p-1 text-3xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 hover:bg-gradient-to-bl bg-clip-text text-transparent">TechDeals</h2>
                  </Link>
                    <button
                      type="button"
                      onClick={toggleDarkMode}
                      aria-label="Toggle dark mode"
                    >
                      <FontAwesomeIcon
                        icon={darkMode ? faSun : faMoon}
                        className="h-5 dark:text-white"
                      />
                    </button>
                  </div>
                  <h2 className="text-gray-800 text-center text-2xl font-bold dark:text-white font-[Poppins]">
                  Sign in
                </h2>
                </div>
                <div className="mt-8 space-y-4">
                  <div className="my-5">
                    <label
                      htmlFor="email"
                      className="text-gray-700 text-sm mb-2 block dark:text-white font-[Poppins]"
                    >
                      Email
                    </label>
                    <Field
                      name="email"
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 text-sm text-gray-800 border border-gray-300 rounded-md outline-blue-600 dark:text-white dark:bg-transparent"
                      placeholder="Enter your email"
                    ></Field>
                    <ErrorMessage
                      className="text-sm text-red-600"
                      component="div"
                      name="email"
                    />
                  </div>

                  <div className="my-5">
                    <label
                      htmlFor="password"
                      className="text-gray-700 text-sm mb-2 block dark:text-white font-[Poppins]"
                    >
                      Password
                    </label>
                    <div className="relative flex items-center">
                      <Field
                        name="password"
                        type={showPassword ? "text" : "password"}
                        className="bg-white border border-gray-300 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500 dark:bg-transparent"
                        placeholder="Enter password"
                      ></Field>
                      <button
                        type="button"
                        className="absolute right-4"
                        onClick={() => setShowPassword((prev) => !prev)}
                      >
                        <FontAwesomeIcon
                          icon={showPassword ? faEyeSlash : faEye}
                          className="w-4 h-4 text-gray-500"
                        />
                      </button>
                    </div>
                    <ErrorMessage
                      className="text-sm text-red-600"
                      component="div"
                      name="password"
                    />
                    <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
                      <div className="flex items-center">
                        <Field
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 transition border-gray-300 rounded linear delay-50 shrink-0 focus:ring-blue-500"
                        ></Field>
                        <label
                          htmlFor="remember-me"
                          className="block ml-3 text-sm text-gray-800 dark:text-white"
                        >
                          Remember me
                        </label>
                      </div>
                      <div className="text-sm">
                        <a
                          href="/Vertify"
                          target="_parent"
                          className="font-semibold text-blue-600 hover:underline"
                        >
                          Forgot your password?
                        </a>
                      </div>
                    </div>

                    <div className="!mt-8">
                      <button
                        type="submit"
                        className="w-full px-4 py-3 text-sm tracking-wide text-white rounded-lg bg-gradient-to-r from-teal-400 to-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 hover:bg-gradient-to-bl"
                      >
                        Sign in
                      </button>
                    </div>

                    <p className="text-gray-800 text-sm !mt-8 text-center dark:text-white">
                      Don't have an account?
                      <Link
                        to="/Register"
                        className="ml-1 font-semibold text-blue-600 hover:underline whitespace-nowrap"
                      >
                        Register here
                      </Link>
                    </p>

                    <div className="flex items-center gap-4 my-4">
                      <hr className="w-full border-gray-300" />
                      <p className="text-sm text-center text-gray-800 dark:text-white">
                        or
                      </p>
                      <hr className="w-full border-gray-300" />
                    </div>

                    <button
                      type="button"
                      className="w-full flex items-center justify-center gap-4 py-2.5 px-5 text-sm tracking-wide text-gray-800 border border-gray-300 rounded-md bg-gray-50 hover:bg-gray-100 focus:outline-none"
                    >
                      {/* Google Icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        class="inline"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="#fbbd00"
                          d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                          data-original="#fbbd00"
                        />
                        <path
                          fill="#0f9d58"
                          d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                          data-original="#0f9d58"
                        />
                        <path
                          fill="#31aa52"
                          d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                          data-original="#31aa52"
                        />
                        <path
                          fill="#3c79e6"
                          d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                          data-original="#3c79e6"
                        />
                        <path
                          fill="#cf2d48"
                          d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                          data-original="#cf2d48"
                        />
                        <path
                          fill="#eb4132"
                          d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                          data-original="#eb4132"
                        />
                      </svg>
                      Continue with Google
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
      <ToastContainer />
    </section>
  );
}

export default Login;
