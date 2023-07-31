import React from "react";
import { Container, Row, Col } from "reactstrap";
import Breadcrumb from "../../components/Common/Breadcrumb";
import ProfileDetail from "../../components/agents/profile/ProfileDetail";
import About from "../../components/manageuser/profile/About";
import { useSelector } from "react-redux";
const Dashboard = () => {
  const { userData } = useSelector((state) => ({
    userData: state.global.userData,
  }));

  return (
    <>
      <Breadcrumb
        title="Dashboard"
        titleText="Welcome To Admin Panel"
        parent="Dashboard"
      />
      <Container fluid={true}>
        <Row>
          <Col lg="12">
            <Row className="user-info">
              <ProfileDetail
                name={userData?.first_name + " " + userData?.last_name}
                address={userData?.address || "NA"}
                id={userData?.user}
                buttons={false}
              />
              <Col xl="4 xl-6" md="6">
                <About
                  email={userData?.email}
                  mobile={userData?.mobile}
                  gender={userData?.gender}
                  dob={userData?.dob}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
