import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Breadcrumb from "../../components/Common/Breadcrumb";
import PropertyBoxFour from "../../components/Common/Propertybox/PropertyBoxOne";
import { toast } from "react-toastify";
import Request from "../../request";
import ReactPaginate from "react-paginate";
const AllAgents = () => {
  const [userlist, setUserlist] = useState([]);
  const [TotalPagesSIze, setTotalPagesSize] = useState(1);
  const [FilterData, setFilterData] = useState({
    page: 1,
  });
  const handlePageClick = ({ selected }) => {
    setFilterData({ page: selected + 1 });
  };
  useEffect(() => {
    getAllDealers();
  }, [FilterData]);

  const getAllDealers = async () => {
    const { data, success, message, total } = await Request.allDealerApi(FilterData);
    if (success) {
      setTotalPagesSize(total);
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
                {userlist.length > 0
                  ? userlist.map((item, i) => {
                      return (
                        <Col xl="4" sm="6" key={i} className="wow fadeInUp">
                          <PropertyBoxFour data={item} label={true} />
                        </Col>
                      );
                    })
                  : "No Dealers Available !"}
              </Row>
            </div>
          </Col>
          <div>
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={Math.ceil(TotalPagesSIze / 10)}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              activeClassName={"active"}
            />
          </div>
        </Row>
      </Container>
    </>
  );
};

export default AllAgents;
