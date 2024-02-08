import React from "react";
import TextLink from "../../ui/TextLink";

const SigninButton = () => {
  return (
    <TextLink
      path="/signin"
      text="Signin"
      className="bg-cyan-100 text-cyan-900 p-2 rounded-md 
          hover:bg-gradient-to-r hover:from-cyan-50 hover:to-cyan-400 transition ease-in-out
          "
    >
      Sign in
    </TextLink>
  );
};

export default SigninButton;
