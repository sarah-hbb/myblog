import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { AiFillLike } from "react-icons/ai";
import CreateComment from "./CreateComment";
import Modal from "../ui/Modal";
import Button from "../ui/Button";
import AvatarIcon from "../ui/AvatarIcon";
import { CiWarning } from "react-icons/ci";
import moment from "moment";

const Comments = ({ profilePicture, username, postId }) => {
  const [comments, setComments] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [commentIdToDelete, setCommentIdToDelete] = useState(null);

  const { currentUser } = useSelector((state) => state.user);

  const fetchComments = async () => {
    try {
      const res = await fetch(`/api/comment/getPostComments/${postId}`);
      const data = await res.json();
      if (res.ok) {
        setComments(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [postId]);

  const handleDeleteComment = async () => {
    try {
      const res = await fetch(`/api/user/deleteuser/${commentIdToDelete}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        setComments((prvComments) =>
          prvComments.filter((comment) => comment._id !== commentIdToDelete)
        );
        await fetchComments();
        setShowDeleteModal(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {currentUser ? (
        <CreateComment
          postId={postId}
          userId={currentUser._id}
          profilePicture={currentUser.profilePicture}
          username={currentUser.username}
          onPostComments={(newComment) => {
            setComments([newComment, ...comments]);
          }}
        />
      ) : (
        <div>
          <Link
            to="/signin"
            className="text-cyan-600 hover:underline font-semibold"
          >
            Sign-in
          </Link>
          <span> to add your comment on this post.</span>
        </div>
      )}
      <div
        className="flex flex-col justify-between items-center gap-2 p-2 w-full
       lg:p-10 lg:shadow-2xl mb-5
      [&>*:not(:last-child)]:border-b-2 [&>*]:border-cyan-500"
      >
        <h1 className="text-lg font-semibold self-start border-none py-4">
          {" "}
          {comments.length === 0 ? (
            <span> No comments on this post yet</span>
          ) : comments.length === 1 ? (
            <span>1 comment on this post</span>
          ) : (
            <span>{comments.length} comments on this post</span>
          )}
        </h1>
        {comments.map((comment, index) => (
          <div key={index} className="flex flex-row w-full gap-2">
            <AvatarIcon avatarPicture={profilePicture} />
            <div className="flex flex-col gap-2">
              <div className="flex gap-3 items-center">
                <h1 className="text-sm font-medium">@{username}</h1>
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
                <button
                  type="button"
                  onClick={() => {
                    setShowDeleteModal(true);
                    setCommentIdToDelete(comment._id);
                  }}
                >
                  <MdDeleteOutline />
                </button>
              </div>
            </div>
          </div>
        ))}

        {showDeleteModal && (
          <Modal
            onClose={() => {
              setShowDeleteModal(false);
            }}
          >
            <CiWarning className="text-5xl" />
            <h2>Are you sure you want to delete comment?</h2>
            <div className="flex flex-row gap-5">
              <Button
                deleteBtn={true}
                onClick={handleDeleteComment}
                type="button"
              >
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
      </div>
    </div>
  );
};

export default Comments;
