import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Agentchart from "../../../components/agents/profile/Agentchart";
import ProfileDetail from "../../../components/agents/profile/ProfileDetail";
import ProjectMeeting from "../../../components/agents/profile/ProjectMeeting";
import Breadcrumb from "../../../components/Common/Breadcrumb";
import About from "../../../components/manageuser/profile/About";
import Following from "../../../components/manageuser/profile/Following";
import RecentChart from "../../../components/manageuser/profile/RecentChart";
import RecentProperty from "../../../components/manageuser/profile/RecentProperty";
import { AgentAbout } from "../../../data/agents/profiledata";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Request from "../../../request";
const Profile = () => {
  const router = useRouter();
  const [DataSource, setDataSource] = useState({});
  const { id } = router.query;
  const apiFunction = async () => {
    if (id) {
      const { data, message, success } = await Request.getDealerProfile(id);
      if (success && data) {
        return setDataSource(data);
      }
      router.push("/agents/all-agents");
      return toast.error(message || "Oops! Something went wrong!");
    }
  };
  useEffect(() => {
    apiFunction();
  }, [id]);

  return (
    <>
      <Breadcrumb
        title="Agent profile"
        titleText="Welcome to admin panel"
        parent="Agents"
      />
      <Container fluid={true}>
        <Row>
          <Col lg="12">
            <Row className="user-info">
              <ProfileDetail
                name={DataSource?.first_name + " " + DataSource?.last_name}
                address={DataSource?.address}
                id={DataSource?.user}
                dealer_status={DataSource?.dealer_status}
                buttons={true}
              />
              <Col xl="4 xl-6" md="6">
                <About
                  email={DataSource?.email}
                  mobile={DataSource?.mobile}
                  gender={DataSource?.gender}
                  dob={DataSource?.dob}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
