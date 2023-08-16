import Link from "next/link";
import React, { useState } from "react";
import { Card, CardBody, Col, Media, Input, Label } from "reactstrap";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Request from "../../../request";
import { User } from "react-feather";
const ProfileDetail = ({ name, address, id, dealer_status, buttons }) => {
  const router = useRouter();
  const [DealerActive, setDealerActive] = useState(null);
  const deleteUser = async (id) => {
    const { success, message } = await Request.deleteDealer(id);
    if (success) {
      router.push("/agents/all-agents");
      return toast.success(
        message ||
          err?.response?.data?.message ||
          "Dealer deleted successfully!"
      );
    }
    return toast.error(
      message || err?.response?.data?.message || "Oops! Something went wrong!"
    );
  };

  const updateDealerStatus = async (status) => {
    const { success, message } = await Request.updateDealerStatus(id, {
      dealer_status: `${status}`,
    });
    if (success) {
      setDealerActive(status);
      return toast.success(message || "Status Updated successfully!");
    }
    return toast.error(message || "Oops! Something went wrong!");
  };

  return (
    <Col xl="5 xl-6">
      <Card>
        <CardBody>
          <Media className="contact-media">
            <div
              style={{
                border: "4px solid var(--theme-default2)",
                borderRadius: "50px",
                padding: "10px",
              }}
            >
              <User size={42} color="var(--theme-default2)" />
            </div>
            <Media body>
              <h4>{name}</h4>
              <span className="light-font">
                My current address is {address}
              </span>
            </Media>
            {buttons && (
              <div className="d-flex">
                <Label className="switch">
                  <Input
                    type="checkbox"
                    className="option-list"
                    name="user-active"
                    checked={
                      DealerActive != null ? DealerActive : dealer_status
                    }
                    onChange={(e) => updateDealerStatus(e.target.checked)}
                  />
                  <span className="switch-state" />
                </Label>
              </div>
            )}
          </Media>

          {buttons && (
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
          )}
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProfileDetail;
