import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Input from "../components/ui/Input";
import Select from "../components/ui/Select";
import Button from "../components/ui/Button";

const CreatePost = () => {
  const [postTitle, setPostTitle] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [post, setPost] = useState("");

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
              setPostTitle(e.target.value);
            }}
          />
          <Select
            options={categoryOptions}
            onChange={(category) => {
              setSelectedCategory(category);
            }}
            value={selectedCategory}
          />
        </div>
        <div
          className="flex flex-col sm:flex-row gap-4 items-center justify-center border-2 border-dotted
        border-cyan-600 p-3"
        >
          <input
            type="file"
            accept="image"
            className="rounded-md border-1 border-black file:bg-black file:text-white"
          />

          <Button type="button" onClick={() => {}} inverseColor={true}>
            <span>Upload Image</span>
          </Button>
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
