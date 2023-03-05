import Link from "next/link";
import React, {FormEventHandler, useState} from "react";

import {signIn, useSession} from "next-auth/react";
import {useRouter} from "next/router";

const Login = () => {
  const { status } = useSession();
  const router = useRouter();

  if (status === "authenticated") {
    router.push("/home");
  }
  const [userInfo, setUserInfo] = useState({username: "", password: ""})

  const submitHandler:FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    try {
      const data = await signIn("login", {
        redirect: false,
        username: userInfo.username,
        password: userInfo.password,
      });

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container container-fluid">
      <div className="row mt-5 d-flex justify-content-center">
        <div className="col-10 col-lg-5 ">
          <form
            className="border border-secondary rounded p-4"
            onSubmit={submitHandler}
          >
            <h1 className="mb-4">Login</h1>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="username_field">
                Username
              </label>
              <input
                type="username"
                id="username_field"
                className="form-control"
                value={userInfo.username}
                onChange={({target}) => setUserInfo({...userInfo, username: target.value})}
              />
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="password_field">
                Password
              </label>
              <input
                type="password"
                id="password_field"
                className="form-control"
                value={userInfo.password}
                onChange={({target}) => setUserInfo({...userInfo, password: target.value})}
              />
            </div>

            <button
              type="submit"
              className="btn btn-block w-100 btn-primary btn-block mb-4"
            >
              Sign in
            </button>

            <div className="text-center">
              <p>
                Not a member? <Link href="/register">Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
