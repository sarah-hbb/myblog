import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../../firebase";
import AvatarIcon from "../ui/AvatarIcon";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Alert from "../ui/Alert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const DashboardProfile = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [imageFile, setImageFile] = useState(null);
  const [imageFileUrl, setImageFileUrl] = useState(null);
  const [value, setValue] = useState("");
  const [imageFileUploadingProgress, setImageFileUploadingProgress] =
    useState(null);
  const [imageFileUploadError, setImageFileUploadError] = useState(null);

  const filePickerRef = useRef();

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  // Upload an image for profile
  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    if (imageFile) {
      setImageFile(imageFile);
      // create url for uploaded image
      setImageFileUrl(URL.createObjectURL(imageFile));
    }
  };

  const uploadImage = async () => {
    // upload the selected image to firebase storage
    // add these lines to firebase 🔥🔥🔥 rules
    // service firebase.storage {
    //  match /b/{bucket}/o {
    //   match /{allPaths=**} {
    //     allow read;
    //     allow write: if
    //     request.resource.size < 2*1024*1024 &&
    //     request.resource.contentType.matches('image/.*')
    //  }
    // }
    //}
    setImageFileUploadError(null);
    const storage = getStorage(app);
    const fileName = new Date().getTime() + imageFile.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImageFileUploadingProgress(progress.toFixed(0));
      },
      (error) => {
        setImageFileUploadError(
          "Could not upload image (File must be less than 2 MB)"
        );
        setImageFileUploadingProgress(null);
        setImageFile(null);
        setImageFileUrl(null);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageFileUrl(downloadURL);
        });
      }
    );
  };

  useEffect(() => {
    if (imageFile) {
      uploadImage(imageFile);
    }
  }, [imageFile]);

  return (
    <div className="w-full p-3 flex flex-col justify-center items-center gap-4">
      <h1 className="text-3xl font-semibold">Profile</h1>

      <form className="w-full md:w-96 flex flex-col gap-3 justify-center items-center">
        <input
          className="hidden"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          ref={filePickerRef}
        />
        {/* clicking on the avatar is like clicking on the hidden input above  */}
        <div
          onClick={() => filePickerRef.current.click()}
          className="cursor-pointer relative"
        >
          {imageFileUploadingProgress && (
            <CircularProgressbar
              value={imageFileUploadingProgress || 0}
              text={`${imageFileUploadingProgress}%`}
              strokeWidth={5}
              styles={{
                root: {
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                },
                path: {
                  stroke: `rgba(62,152,199,${
                    imageFileUploadingProgress / 100
                  })`,
                },
              }}
            />
          )}
          <AvatarIcon
            avatarPicture={imageFileUrl || currentUser.profilePicture}
            size={"large"}
          />
        </div>
        {imageFileUploadError && (
          <Alert status="failure">{imageFileUploadError}</Alert>
        )}
        <div className="w-full flex flex-col gap-3">
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
          <Button
            type="submit"
            className="w-full"
            onClick={() => {}}
            inverseColor={false}
          >
            <span>Update</span>
          </Button>
        </div>
        <div className="flex justify-between w-full px-4 py-2 text-red-600">
          <button>Delete Account</button>
          <button>Sign out</button>
        </div>
      </form>
    </div>
  );
};

export default DashboardProfile;
