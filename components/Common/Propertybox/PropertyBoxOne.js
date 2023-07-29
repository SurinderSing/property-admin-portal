import Link from "next/link";
import React, { useState } from "react";
import Img from "../../utils/Img";
import SocialAccounts from "../SocialAccounts";

const PropertyBoxFour = ({ data, label }) => {
    const [show, setShow] = useState();
    return (
        <>
            <div className="property-box">
                <div className="agent-image">
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
                </div>
                <div className="agent-content">
                    <h3>
                        <Link href="/pages/agency/agency-profile">{data?.name}</Link>
                    </h3>
                    <p className="font-roboto">Real estate Agent</p>
                    <ul className="agent-contact">
                        <li>
                            <i className="fas fa-phone-alt"></i>
                            <span className="character">+91 {data?.mobile === show ? data?.mobile : data?.mobile.slice(0, 5) + "*****"}</span>
                            <span
                                className="label label-light-danger"
                                onClick={() => {
                                    setShow(data?.mobile);
                                    data?.mobile === show && setShow();
                                }}>
                                {show === data?.mobile ? "show" : "hide"}
                            </span>
                        </li>
                        <li>
                            <i className="fas fa-envelope"></i> {data?.mail}
                        </li>
                        <li>
                            <i className="fas fa-fax"></i> {data?.pinCode}
                        </li>
                    </ul>
                    <Link href="/manage-users/profile">
                        View profile <i className="fas fa-arrow-right"></i>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default PropertyBoxFour;

