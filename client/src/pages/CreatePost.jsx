import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Input from "../components/ui/Input";
import Select from "../components/ui/Select";
import Button from "../components/ui/Button";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
import Alert from "../components/ui/Alert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CreatePost = () => {
  const [post, setPost] = useState("");
  const [file, setFile] = useState(null);
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);
  const [formData, setFormData] = useState({});

  const handleChangeImageFile = (e) => {
    setFile(e.target.files[0]);
    setImageUploadError(null);
  };
  const handleUploadImage = async () => {
    try {
      if (!file) {
        setImageUploadError("Please select an image");
        return;
      }
      setImageUploadError(null);
      // upload file in firebase bucket
      const storage = getStorage(app);
      const fileName = new Date().getTime() + "-" + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setImageUploadProgress(progress.toFixed(0));
        },
        (error) => {
          setImageUploadError(
            "Could not upload image (File must be less than 2 MB)"
          );
          setImageUploadProgress(null);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImageUploadProgress(null);
            setImageUploadError(null);
            setFormData({ ...formData, image: downloadURL });
          });
        }
      );
    } catch (error) {
      setImageUploadError("Image upload faild");
      setImageUploadProgress(null);
    }
  };

  const categoryOptions = [
    {
      value: "uncategorized",
      label: "Select a category",
      disabled: true,
    },
    { value: "javascript", label: "Javascript" },
    { value: "reactjs", label: "React.js" },
    { value: "nextjs", label: "Next.js" },
    { value: "typescript", label: "Typescript" },
    { value: "travel", label: "Travel" },
  ];
  return (
    <div
      className="flex flex-col justify-center items-center
     gap-3 p-4 max-w-3xl mx-auto "
    >
      <h1 className="font-semibold text-3xl">Create a post</h1>

      <form onSubmit={() => {}} className="flex flex-col gap-4 w-full">
        <div className="flex flex-col sm:flex-row gap-2 justify-between items-center">
          <Input
            type="text"
            placeholder="Title"
            id="title"
            onChange={(e) => {
              setFormData({ ...formData, title: e.target.value });
            }}
          />
          <Select
            options={categoryOptions}
            onChange={(e) => {
              setFormData({ ...formData, category: e.target.value });
            }}
            value={formData.category}
          />
        </div>
        <div
          className="flex flex-col gap-4 items-center justify-center border-2 border-dotted
        border-cyan-600 p-3"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="file"
              accept="image"
              className="rounded-md border-1 border-black file:bg-black
             file:text-white"
              onChange={handleChangeImageFile}
            />

            <Button
              type="button"
              onClick={handleUploadImage}
              inverseColor={true}
              disabled={imageUploadProgress}
            >
              <span>Upload Image</span>
            </Button>
          </div>

          {imageUploadError && (
            <Alert status="failure">{imageUploadError}</Alert>
          )}
          {imageUploadProgress && (
            <div className="w-16 h-16">
              <CircularProgressbar
                value={imageUploadProgress}
                text={`${imageUploadProgress || 0} %`}
              />
            </div>
          )}
          {formData.image && (
            <img
              src={formData.image}
              alt="upload"
              className="w-full h-72 object-cover"
            />
          )}
        </div>

        <ReactQuill
          theme="snow"
          value={post}
          onChange={setPost}
          placeholder="Write your post..."
        />
        <Button type="submit" className="w-1/5 self-end">
          Publish
        </Button>
      </form>
    </div>
  );
};

export default CreatePost;
