import { useDispatch } from "react-redux";
import { signoutUserSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

const useSignout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignout = async () => {
    try {
      const res = await fetch("/api/user/signout", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutUserSuccess());
        navigate("/signin");
      }
    } catch (error) {}
  };

  return handleSignout;
};

export default useSignout;
