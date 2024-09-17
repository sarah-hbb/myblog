import { useEffect, useState } from "react";
import AvatarIcon from "../ui/AvatarIcon";
import Modal from "../ui/Modal";
import Button from "../ui/Button";
import { MdDeleteOutline } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { AiFillLike } from "react-icons/ai";
import { CiWarning } from "react-icons/ci";
import moment from "moment";

const Comment = ({ comment, currentUser, onDelete }) => {
  const [user, setUser] = useState({});
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const getUser = async () => {
    try {
      const res = await fetch(`/api/user/${comment.userId}`);
      const data = await res.json();
      if (res.ok) {
        setUser(data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getUser();
  }, [comment]);

  const handleDelete = () => {
    setShowDeleteModal(true);
    onDelete(comment._id);
  };

  return (
    <>
      <div className="flex flex-row w-full gap-2">
        <AvatarIcon avatarPicture={user.profilePicture} />
        <div className="flex flex-col gap-2">
          <div className="flex gap-3 items-center">
            <h1 className="text-sm font-medium">
              {user ? `@${user.username}` : "anonymouse user"}
            </h1>
            <h2 className="text-gray-400 ">
              {moment(comment.createdAt).fromNow()}
            </h2>
          </div>
          <h1 className="text-slate-500">{comment.content}</h1>
          <div
            className="flex flex-row gap-4 p-1 border-t border-slate-300 text-sm
            [&>*]:text-gray-400 [&>*:hover]:scale-110 [&>*]:transition-all"
          >
            {false ? (
              <button type="button">
                <BiLike />
              </button>
            ) : (
              <div className="flex items-center gap-1">
                <AiFillLike className="text-cyan-600" />
                <h3> 4 likes</h3>
              </div>
            )}

            <button type="buton">Edit</button>
            <button type="button" onClick={handleDelete}>
              <MdDeleteOutline />
            </button>
          </div>
        </div>
      </div>
      {showDeleteModal && (
        <Modal
          onClose={() => {
            setShowDeleteModal(false);
          }}
        >
          <CiWarning className="text-5xl" />
          <h2>Are you sure you want to delete comment?</h2>
          <div className="flex flex-row gap-5">
            <Button deleteBtn={true} onClick={handleDelete} type="button">
              Yes, delete this comment
            </Button>
            <Button
              inverseColor={true}
              onClick={() => {
                setShowDeleteModal(false);
              }}
              type="button"
            >
              No, cancel
            </Button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Comment;
