import Link from "next/link";
import React, { useState } from "react";
import { Card, CardBody, Col, Media, Input, Label } from "reactstrap";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Request from "../../request";
const PropertyDetail = ({ DataSource }) => {
  const router = useRouter();
  const [PropertyActive, setPropertyActive] = useState(null);
  const deleteProperty = async (id) => {
    const { success, message } = await Request.deleteProperty(id);
    if (success) {
      router.push("/properties/propertylist");
      return toast.success(message || "Property deleted successfully!");
    }
    return toast.error(message || "Oops! Something went wrong!");
  };

  const updatePropetyStatus = async (status) => {
    const { success, message } = await Request.updatePropertyStatus(
      DataSource?.id,
      {
        active_property: `${status}`,
      }
    );
    if (success) {
      setPropertyActive(status);
      return toast.success(message || "Status Updated successfully!");
    }
    return toast.error(message || "Oops! Something went wrong!");
  };

  return (
    <Col xl="5 xl-6">
      <Card>
        <CardBody>
          <Media className="contact-media">
            {/* <img
              src="/assets/images/avatar/5.jpg"
              className="img-fluid img-80"
              alt=""
            /> */}
            <Media body>
              <h4>{DataSource.property_mode}</h4>
              <span className="light-font">
                {`${DataSource?.address} ${DataSource?.city} ${DataSource?.landmark} ${DataSource?.zipcode}`}
              </span>
              <br />
              <span className="light-font">{`${DataSource?.country}`}</span>
            </Media>
            <div className="d-flex">
              <Label className="switch">
                <Input
                  type="checkbox"
                  className="option-list"
                  name="user-active"
                  checked={
                    PropertyActive != null
                      ? PropertyActive
                      : DataSource?.active_property
                  }
                  onChange={(e) => updatePropetyStatus(e.target.checked)}
                />
                <span className="switch-state" />
              </Label>
            </div>
          </Media>

          <div className="contact-btn">
            <Link
              href={`/properties/update/${DataSource?.id}`}
              className="btn btn-gradient btn-pill"
            >
              Edit
            </Link>
            <div
              onClick={() => deleteProperty(DataSource?.id)}
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

export default PropertyDetail;
