import React from "react";
import Input from "../components/ui/Input";
import logo from "../assets/logo.png";
import Button from "../components/ui/Button";
import { FcGoogle } from "react-icons/fc";
import TextLink from "../components/ui/TextLink";

const Signup = () => {
  const usernameChangeHandler = (input) => {
    console.log(input);
  };
  const emailChangeHandler = () => {};
  const passwordChangeHandler = () => {};
  const submitHandler = () => {};

  return (
    <div className="flex h-screen items-center justify-between p-4">
      <div className=" md:flex hidden flex-col p-3 items-center justify-center flex-1">
        <img
          src={logo}
          alt=""
          className="w-40 h-40 object-cover rounded-full mb-4"
        />
        <h3>You can sign up with your email or with your Google account.</h3>
      </div>
      <form className="flex flex-col justify-between gap-4 p-4 flex-auto  max-w-md">
        <Input
          type="text"
          label="Your Username"
          onChange={usernameChangeHandler}
        />
        <Input type="email" label="Your Email" onChange={emailChangeHandler} />
        <Input
          type="password"
          label="Your Password"
          onChange={passwordChangeHandler}
        />
        <Button type="submit" inverseColor={false} onClick={submitHandler}>
          Sign Up
        </Button>
        <Button
          type="submit"
          inverseColor
          onClick={submitHandler}
          className={""}
        >
          <div className=" inline-flex">
            <FcGoogle className=" text-2xl mr-4" />
            Continue with Google
          </div>
        </Button>
        <h3>
          Have an account?
          <span>
            <TextLink path={"/signin"} className={"text-blue-400"}>
              {" "}
              Sign in
            </TextLink>
          </span>
        </h3>
      </form>
    </div>
  );
};

export default Signup;
