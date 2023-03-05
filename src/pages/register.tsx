import React, {FormEventHandler, useState} from "react";
import {signIn, useSession} from "next-auth/react";
import {useRouter} from "next/router";

type RegistrationType = {
  username: string
  password: string
  email: string
  full_name: string | undefined
}


const Register = () => {
  const { status } = useSession();
  const router = useRouter();

  if (status === "authenticated") {
    router.push("/home");
  }
  const [userInfo, setUserInfo] = useState<RegistrationType>({
    username: "",
    password: "",
    email: "",
    full_name: ""
  });

  const submitHandler:FormEventHandler<HTMLFormElement> = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const data  = await signIn("register", {
        redirect: false,
        username: userInfo.username,
        email: userInfo.email,
        full_name: userInfo?.full_name,
        password: userInfo.password
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
            <h1 className="mb-4">Register</h1>

            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="form-control"
                value={userInfo.username}
                onChange={({target}) => setUserInfo({...userInfo, username: target.value})}
              />
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="full_name">
                Full Name
              </label>
              <input
                type="text"
                id="full_name"
                className="form-control"
                value={userInfo.full_name}
                onChange={({target}) => setUserInfo({...userInfo, full_name: target.value})}
              />
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="email">
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={userInfo.email}
                onChange={({target}) => setUserInfo({...userInfo, email: target.value})}
              />
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-control"
                value={userInfo.password}
                onChange={({target}) => setUserInfo({...userInfo, password: target.value})}
              />
            </div>

            <button
              type="submit"
              className="btn btn-block w-100 btn-primary btn-block mb-4"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
