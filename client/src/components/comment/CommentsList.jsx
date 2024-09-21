import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CreateComment from "./CreateComment";

import Comment from "./Comment";

const CommentsList = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [totalComments, setTotalComments] = useState();
  const [commentIdToDelete, setCommentIdToDelete] = useState(null);

  const [showMore, setShowMore] = useState(false);

  const { currentUser } = useSelector((state) => state.user);
  const { navigate } = useNavigate();

  const fetchComments = async () => {
    try {
      const res = await fetch(`/api/comment/getPostComments/${postId}`);
      const data = await res.json();
      if (res.ok) {
        setComments(data.comments);
        setTotalComments(data.totalComments);
      }
      if (data.comments.length > 4) {
        setShowMore(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [postId]);

  const handleLikeComment = async (commentId) => {
    try {
      if (!currentUser) {
        navigate("/signin");
        return;
      }
      const res = await fetch(`/api/comment/likecomment/${commentId}`, {
        method: "PUT",
      });
      const data = await res.json();
      if (res.ok) {
        setComments(
          comments.map((comment) =>
            comment._id === commentId
              ? {
                  ...comment,
                  likes: data.likes,
                  numberOfLikes: data.likes.length,
                }
              : comment
          )
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDeleteComment = async (commentIdToDelete) => {
    // try {
    //   const res = await fetch(`/api/comment/deletecomment/${commentIdToDelete}`, {
    //     method: "DELETE",
    //   });
    //   const data = await res.json();
    //   if (!res.ok) {
    //     console.log(data.message);
    //   } else {
    //     setComments((prvComments) =>
    //       prvComments.filter((comment) => comment._id !== commentIdToDelete)
    //     );
    //     //await fetchComments();
    //     setShowDeleteModal(false);
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
    console.log(commentIdToDelete);
  };

  const handleShowMore = async () => {
    const startIndex = comments.length;
    try {
      const res = await fetch(
        `/api/comment/getPostComments/${postId}?startIndex=${startIndex}`
      );
      const data = await res.json();
      if (res.ok) {
        setComments((prvComments) => [...prvComments, ...data.comments]);
        if (data.comments.length < 5) {
          setShowMore(false);
        }
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
            setComments((prvComments) => [newComment, ...prvComments]);
            setTotalComments((prv) => prv + 1);
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
          {totalComments === 0 ? (
            <span> No comments on this post yet</span>
          ) : totalComments === 1 ? (
            <span>1 comment on this post</span>
          ) : (
            <span>{totalComments} comments on this post</span>
          )}
        </h1>
        {comments.map((comment) => (
          <Comment
            key={comment._id}
            comment={comment}
            currentUser={currentUser}
            onDelete={handleDeleteComment}
            onLike={handleLikeComment}
          />
        ))}

        {showMore && (
          <button
            type="button"
            className="font-bold text-lg text-cyan-600 p-4 self-center
          hover:text-black hover:scale-105 transition-all"
            onClick={handleShowMore}
          >
            Show more posts
          </button>
        )}
      </div>
    </div>
  );
};

export default CommentsList;
