import Link from "next/link";
import React from "react";
import { ChevronsLeft } from "react-feather";
import { Media } from "reactstrap";
import SidebarMenu from "./SidebarMenu";
import { useSelector } from "react-redux";

const Sidebar = ({ toggle, setToggle }) => {
  const { userData } = useSelector((state) => ({
    userData: state.global.userData,
  }));

  return (
    <div className={`page-sidebar ${!toggle ? "close_icon" : ""}`}>
      <div className="logo-wrap">
        <Link href="/dashboard">
          <img
            src="/assets/images/logo/4.png"
            className="img-fluid for-light"
            alt=""
          />
          <img
            src="/assets/images/logo/9.png"
            className="img-fluid for-dark"
            alt=""
          />
        </Link>
        <div className="back-btn d-lg-none d-inline-block">
          <ChevronsLeft
            onClick={() => {
              setToggle(!toggle);
            }}
          />
        </div>
      </div>
      <div className="main-sidebar">
        <div className="user-profile">
          <Media className="media">
            <div className="change-pic">
              <img
                src="/assets/images/avatar/3.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
            <Media body className="media-body">
              <Link href="/manage-users/profile">
                <h6>
                  {userData?.first_name
                    ? userData?.first_name + " " + userData?.last_name
                    : "Guest"}
                </h6>
              </Link>
              <span className="font-roboto">{userData?.email}</span>
            </Media>
          </Media>
        </div>
        <div id="mainsidebar">
          <SidebarMenu />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
