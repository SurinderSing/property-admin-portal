import Link from "next/link";
import React, { useState } from "react";
import moment from "moment";

const MessageBox = ({ data }) => {
  const [show, setShow] = useState();
  return (
    <>
      <div className="property-box">
        <div className="agent-content">
          <h3>{data?.name}</h3>
          <p className="font-roboto">{data?.email}</p>
          <ul className="agent-contact">
            <li>
              <i className="fas fa-phone-alt"></i>
              <span className="character">
                {data?.mobile === show
                  ? data?.mobile
                  : data?.mobile.slice(0, 5) + "*****"}
              </span>
              <span
                className="label label-light-danger"
                onClick={() => {
                  setShow(data?.mobile);
                  data?.mobile === show && setShow();
                }}
              >
                {show === data?.mobile ? "show" : "hide"}
              </span>
            </li>
            <li>
              <i className="fas fa-clock"></i>{" "}
              {moment(data?.createdAt).format("DD.MM.YYYY HH:mm:ss")}
            </li>
            <li>
              <i className="fas fa-envelope"></i> {data?.comment}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MessageBox;
