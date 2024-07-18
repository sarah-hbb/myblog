import React, { useState } from "react";
import { useSelector } from "react-redux";
import AvatarIcon from "../ui/AvatarIcon";
import Input from "../ui/Input";
import Button from "../ui/Button";

const DashboardProfile = () => {
  const { currentUser } = useSelector((state) => state.user);

  const [value, setValue] = useState("");
  const handleInputChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="w-full px-5 py-3 flex flex-col justify-center items-center gap-4">
      <h1 className="text-3xl font-semibold">Profile</h1>
      <AvatarIcon avatarPicture={currentUser.profilePicture} size={"large"} />
      <form className="w-full sm:w-96 flex flex-col gap-3 ">
        <Input
          placeholder={currentUser.username}
          value={value}
          id="username"
          type="text"
          onChange={handleInputChange}
          borderError={false}
        />

        <Input
          placeholder={currentUser.email}
          value={value}
          id="email"
          type="email"
          onChange={handleInputChange}
          borderError={false}
        />

        <Input
          placeholder="Password"
          value={value}
          id="password"
          type="password"
          onChange={handleInputChange}
          borderError={false}
        />
        <Button type="submit" onClick={() => {}} inverseColor={false}>
          <span>Update</span>
        </Button>
        <div className="flex justify-between w-full px-4 py-2 text-red-600">
          <button>Delete Account</button>
          <button>Sign out</button>
        </div>
      </form>
    </div>
  );
};

export default DashboardProfile;
