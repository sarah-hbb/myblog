import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/ui/Input";
import logo from "../assets/logo.png";
import Button from "../components/ui/Button";
import { FcGoogle } from "react-icons/fc";
import TextLink from "../components/ui/TextLink";
import LoadingSpinner from "../components/ui/LoadingSpinner";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMesssage] = useState(null);
  const [submitClicked, setSubmitClicked] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (input, id) => {
    setFormData({ ...formData, [id]: input.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitClicked(true);
    if (
      formData.email === "" ||
      formData.username === "" ||
      formData.password === ""
    ) {
      setErrorMesssage("Please fill out all fields!");
      return;
    }
    try {
      setLoading(true);
      setErrorMesssage(null);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setErrorMesssage(data.message);
        setLoading(false);
        return;
      }

      if (res.ok) {
        navigate("/signin");
      }
    } catch (error) {
      setErrorMesssage(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4 gap-3">
      <div className=" md:flex hidden flex-col p-3 items-center justify-center flex-1">
        <img
          src={logo}
          alt=""
          className="w-40 h-40 object-cover rounded-full mb-4"
        />
        <h3>You can sign up with your email or with your Google account.</h3>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <form
          className="flex flex-col justify-between gap-4 w-2/3 max-w-xl"
          onSubmit={handleSubmit}
        >
          <Input
            value={formData.username}
            id="username"
            type="text"
            label="Your Username"
            onChange={handleChange}
            borderError={submitClicked && formData.username === ""}
          />
          <Input
            value={formData.email}
            id="email"
            type="email"
            label="Your Email"
            onChange={handleChange}
            borderError={submitClicked && formData.email === ""}
          />
          <Input
            value={formData.password}
            id="password"
            type="password"
            label="Your Password"
            onChange={handleChange}
            borderError={submitClicked && formData.password === ""}
          />
          {errorMessage && <h2 className="text-red-600">{errorMessage}</h2>}

          <Button disabled={loading} type="submit" inverseColor={false}>
            {loading ? (
              <div className="flex justify-center items-center">
                <LoadingSpinner size={"small"} />
                <span className="text-cyan-800 ml-3">Loading ...</span>
              </div>
            ) : (
              "Sign Up"
            )}
          </Button>
          <Button type="text" inverseColor className={""}>
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
    </div>
  );
};

export default Signup;
