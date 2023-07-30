import React, { useState, useEffect } from "react";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import Breadcrumb from "../../../components/Common/Breadcrumb";
import EditUserdataForm from "../../../components/manageuser/edituser/EditUserdataForm";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Request from "../../../request";

const EditAgent = () => {
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
        title="Edit Agent"
        titleText="Welcome To Admin Panel"
        parent="Agents"
      />
      <Container fluid={true}>
        <Row>
          <Col lg="12">
            <Card className="card">
              <CardHeader className="card-header pb-0">
                <h5>Edit agent details</h5>
              </CardHeader>
              <CardBody className="card-body admin-form">
                <EditUserdataForm DataSource={DataSource} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EditAgent;
