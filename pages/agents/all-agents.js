import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Breadcrumb from "../../components/Common/Breadcrumb";
import PropertyBoxFour from "../../components/Common/Propertybox/PropertyBoxOne";
import { toast } from "react-toastify";
import Request from "../../request";
const AllAgents = () => {
  const [userlist, setUserlist] = useState([]);
  useEffect(() => {
    getAllDealers();
  }, []);

  const getAllDealers = async () => {
    const { data, success, message } = await Request.allDealerApi();
    if (success) {
      return setUserlist(data);
    }
    return toast.error(message || "Oops! Something went wrong!");
  };
  return (
    <>
      <Breadcrumb
        title="All Agents"
        titleText="welcome to admin panel"
        parent="Agents"
      />
      <Container fluid={true}>
        <Row className="agent-section property-section agent-lists">
          <Col lg="12">
            <div className="ratio2_3">
              <Row className="property-2 column-sm property-label property-grid">
                {userlist &&
                  userlist.map((item, i) => {
                    return (
                      <Col xl="4" sm="6" key={i} className="wow fadeInUp">
                        <PropertyBoxFour data={item} label={true} />
                      </Col>
                    );
                  })}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AllAgents;
