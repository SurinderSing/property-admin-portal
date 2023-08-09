import React, { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import PropertyBox from "../../Common/Propertybox/PropertyBox";
import { getData } from "../../utils/getData";
import { toast } from "react-toastify";
import Request from "../../../request";
import { useRouter } from "next/router";

const Listview = () => {
  const [DataSourse, setDataSourse] = useState([]);

  useEffect(() => {
    apiFunction();
  }, []);

  const apiFunction = async () => {
    const { data, message, success } = await Request.AllProperties();

    if (success && data.length > 0) {
      setDataSourse(data);
      return;
    }
    toast.error(message || "Oops! Something went wrong!");
    return;
  };

  return (
    <div className="col-xl-12">
      <Row className="property-2 column-sm property-label property-grid">
        {DataSourse.length > 0
          ? DataSourse.map((item, i) => {
              return (
                <Col xl="4" md="6 xl-6" key={i}>
                  <PropertyBox data={item} />
                </Col>
              );
            })
          : "No Properties Available !"}
      </Row>
    </div>
  );
};

export default Listview;
