import React, { useState, useEffect } from "react";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import Breadcrumb from "../../../components/Common/Breadcrumb";
import EditPropertyForm from "../../../components/myproperties/editProperty/EditPropertyForm";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Request from "../../../request";

const AddProperty = () => {
  const router = useRouter();
  const [DataSource, setDataSource] = useState({});
  const { id } = router.query;
  const apiFunction = async () => {
    if (id) {
      const { data, message, success } = await Request.propertyDetails(id);
      if (success && data) {
        return setDataSource(data);
      }
      router.push("/properties/propertylist");
      return toast.error(message || "Oops! Something went wrong!");
    }
  };
  useEffect(() => {
    apiFunction();
  }, [id]);
  return (
    <>
      <Breadcrumb title="Update Property" parent="Properties" />
      <Container fluid={true} className="container-fluid">
        <Row>
          <Col lg="12">
            <Card className="card">
              <CardHeader className="card-header pb-0">
                <h5>Update property details</h5>
              </CardHeader>
              <CardBody className="card-body admin-form">
                <EditPropertyForm DataSource={DataSource} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AddProperty;
