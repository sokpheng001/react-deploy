export const BASE_URL = "http://localhost:8080/api/v1";

import { setAccessToken } from "../../lib/secureLocalStorage";

// register action
export async function register(values) {
  // console.log("values in register func", values);
  //   convert value to json
  const body = JSON.stringify(values);
  try {
    // method fetch
    const response = fetch(`${import.meta.env.VITE_BASE_URL}register/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: body
    }).then((res) => res.json());
    const data = await response;
    // console.log("data in function", data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

// verify
export async function verify(values) {
  // console.log("values in register func", values);
  //   convert value to json
  const body = JSON.stringify(values);
  try {
    // method fetch
    const response = fetch(`${import.meta.env.VITE_BASE_URL}verify-otp/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: body
    }).then((res) => res.json());
    const data = await response;
    // console.log("data in function", data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

//login
export async function login(values) {
  //   convert value to json
  const body = JSON.stringify(values);
  try {
    // method fetch
    const response = fetch(`${import.meta.env.VITE_BASE_URL}login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: body
    }).then((res) => res.json());
    const data = await response;
    // console.log("data in function", data);
    setAccessToken(data.access);
    return data;
  } catch (error) {
    console.log(error);
  }
}

