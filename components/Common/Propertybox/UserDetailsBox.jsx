import Link from "next/link";
import React, { useState } from "react";
import { Card, CardBody, Col, Media, Input, Label } from "reactstrap";
// import Img from "../../utils/Img";
// import SocialAccounts from "../SocialAccounts";
import { toast } from "react-toastify";
import Request from "../../../request";

const UserDetailsBox = ({ data, getAllUsersDetails, label }) => {
  const [show, setShow] = useState();
  const [DealerActive, setDealerActive] = useState(null);

  const updateUserStatus = async (status) => {
    const { success, message, err } = await Request.setUserStatus(data?.id, {
      normaluser_status: `${status}`,
    });
    if (success) {
      setDealerActive(status);
      return toast.success(message || "Status Updated successfully!");
    }
    console.error(err);
    return toast.error(
      message || err?.response?.data?.message || "Oops! Something went wrong!"
    );
  };

  const deleteUser = async (id) => {
    const { success, message } = await Request.deleteUser(id);
    if (success) {
      getAllUsersDetails();
      return toast.success(message || "User deleted successfully!");
    }
    return toast.error(
      message || err?.response?.data?.message || "Oops! Something went wrong!"
    );
  };

  return (
    <>
      <div className="property-box">
        {/* <div className="agent-image">
                    <div>
                        <Img src={data?.img} className="bg-img" alt="" />
                        {label ? data?.properties && <span className="label label-shadow">{data.properties}</span>
                            : data?.label && <span className="label label-shadow">New User</span>}
                        <div className="agent-overlay"></div>
                        <div className="overlay-content">
                            <SocialAccounts />
                            <span>Connect</span>
                        </div>
                    </div>
                </div> */}
        <div className="agent-content">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h3>{data?.name}</h3>
            <div className="d-flex">
              <Label className="switch">
                <Input
                  type="checkbox"
                  className="option-list"
                  name="user-active"
                  checked={
                    DealerActive != null
                      ? DealerActive
                      : data?.normaluser_status
                  }
                  onChange={(e) => updateUserStatus(e.target.checked)}
                />
                <span className="switch-state" />
              </Label>
            </div>
          </div>
          <p className="font-roboto">User</p>
          <ul className="agent-contact">
            <li>
              <i className="fas fa-phone-alt"></i>
              <span className="character">
                {data?.phone_number === show
                  ? data?.phone_number
                  : data?.phone_number?.slice(0, 5) + "*****"}
              </span>
              <span
                className="label label-light-danger"
                onClick={() => {
                  setShow(data?.phone_number);
                  data?.phone_number === show && setShow();
                }}
              >
                {show === data?.phone_number ? "show" : "hide"}
              </span>
            </li>
            <li>
              <i className="fas fa-envelope"></i> {data?.email}
            </li>
          </ul>
          <div
            style={{ float: "right" }}
            onClick={() => deleteUser(data?.id)}
            className="btn btn-dashed ms-2 btn-pill"
          >
            Delete
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetailsBox;
