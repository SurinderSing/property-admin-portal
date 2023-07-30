import Link from "next/link";
import React from "react";
import { Button, Card, CardBody, Col, Media } from "reactstrap";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Request from "../../../request";
const ProfileDetail = ({ name, address, id }) => {
  const router = useRouter();
  const deleteUser = async (id) => {
    const { success, message } = await Request.deleteDealer(id);
    if (success) {
      router.push("/agents/all-agents");
      return toast.error(message || "Dealer deleted successfully!");
    }
    return toast.error(message || "Oops! Something went wrong!");
  };

  return (
    <Col xl="5 xl-6">
      <Card>
        <CardBody>
          <Media className="contact-media">
            <img
              src="/assets/images/avatar/5.jpg"
              className="img-fluid img-80"
              alt=""
            />
            <Media body>
              <h4>{name}</h4>
              <span className="light-font">My current address {address}</span>
            </Media>
          </Media>

          <div className="contact-btn">
            <Link
              href={`/agents/edit/${id}`}
              className="btn btn-gradient btn-pill"
            >
              Edit
            </Link>
            <div
              onClick={() => deleteUser(id)}
              className="btn btn-dashed ms-2 btn-pill"
            >
              Delete
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProfileDetail;
