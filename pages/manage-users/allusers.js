import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Breadcrumb from "../../components/Common/Breadcrumb";
import UserDetailsBox from "../../components/Common/Propertybox/UserDetailsBox";
import Request from "../../request";
import { toast } from "react-toastify";

const AllUsers = () => {
  const [userlist, setUserlist] = useState([]);
  useEffect(() => {
    getAllUsersDetails();
  }, []);

  const getAllUsersDetails = async () => {
    const { data, success, message } = await Request.AllUserDetails();
    if (success && data) {
      setUserlist(data);
      return;
    }
    toast.error(message || "Oop! Something went wrong!");
    return;
  };

  return (
    <>
      <Breadcrumb title="All Users" parent="Manage users" />
      <Container fluid={true}>
        <Row className="agent-section property-section user-lists">
          <Col lg="12">
            <div className="property-grid-3 agent-grids ratio2_3">
              <Row className="property-2 column-sm property-label property-grid list-view">
                {userlist.length > 0
                  ? userlist.map((item, i) => {
                      return (
                        <Col md="12" xl="6" key={i}>
                          <UserDetailsBox
                            data={item}
                            getAllUsersDetails={getAllUsersDetails}
                            label={false}
                          />
                        </Col>
                      );
                    })
                  : "No Users Available !"}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AllUsers;
