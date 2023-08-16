import Link from "next/link";
import React from "react";
import { LogIn, User } from "react-feather";
import { useDispatch } from "react-redux";
import Request from "../../../request";
import { toast } from "react-toastify";

const UserProfile = () => {
  const dispatch = useDispatch();
  const logoutFunc = async () => {
    const { success, message } = await Request.logout();
    if (success) {
      dispatch({ type: "globalReducers/SET_VALID_USER", payload: false });
      return toast.success(message || "Logged Out successfully!");
    }
    return toast.error(message || "Log Out failed!");
  };

  return (
    <li className="profile-avatar onhover-dropdown">
      <div
        className="change-pic"
        style={{
          border: "1px solid var(--theme-default2)",
          borderRadius: "50px",
          padding: "8px",
          margin: "0 .5em",
        }}
      >
        <User size={20} color="var(--theme-default2)" />
      </div>
      <ul className="profile-dropdown onhover-show-div">
        <li>
          <Link href="/manage-users/profile">
            <span>Account </span>
            <User />
          </Link>
        </li>
        <li onClick={logoutFunc}>
          <span>Log Out</span>
          <LogIn />
        </li>
      </ul>
    </li>
  );
};

export default UserProfile;
