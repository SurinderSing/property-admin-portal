import Link from "next/link";
import React from "react";
import { ChevronsLeft } from "react-feather";
import { Media } from "reactstrap";
import SidebarMenu from "./SidebarMenu";
import { useSelector } from "react-redux";
import { User } from "react-feather";

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
            <div
              className="change-pic"
              style={{
                border: "4px solid var(--theme-default2)",
                borderRadius: "20px",
                padding: "8px",
                margin: "0 .5em",
              }}
            >
              <User size={32} color="var(--theme-default2)" />
            </div>
            <Media body className="media-body">
              <Link href="/dashboard">
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
