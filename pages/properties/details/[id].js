import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import PropertyDetail from "../../../components/myproperties/PropertyDetail";
import Breadcrumb from "../../../components/Common/Breadcrumb";
import PropertyAbout from "../../../components/myproperties/propertyAbout/About";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Request from "../../../request";
const Details = () => {
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
      <Breadcrumb
        title="Property Details"
        // titleText="Welcome to admin panel"
        parent="Properties"
      />
      <Container fluid={true}>
        <Row>
          <Col lg="12">
            <Row className="user-info">
              <PropertyDetail DataSource={DataSource} />
              <Col xl="4 xl-6" md="6">
                <PropertyAbout
                  data={DataSource}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Details;
