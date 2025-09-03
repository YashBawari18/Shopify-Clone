import React from "react";

export default function Login() {
  return (
    <div
      className="d-flex justify-content-center align-items-center "
      style={{ height: "87vh" }}
    >
      <div className="login-box text-center">
        <form action="">
          <h1 className="mb-5 mt-3">Login</h1>
          Username: <input type="text" />
          <br />
          <br />
          Password: <input type="password" />
          <br />
          <br />
          <button className="log-but">Submit</button>
        </form>
      </div>
    </div>
  );
}
