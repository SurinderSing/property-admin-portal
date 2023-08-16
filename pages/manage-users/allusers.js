import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Breadcrumb from "../../components/Common/Breadcrumb";
import UserDetailsBox from "../../components/Common/Propertybox/UserDetailsBox";
import Request from "../../request";
import { toast } from "react-toastify";
import ReactPaginate from "react-paginate";

const AllUsers = () => {
  const [userlist, setUserlist] = useState([]);
  const [TotalPagesSIze, setTotalPagesSize] = useState(1);
  const [FilterData, setFilterData] = useState({
    page: 1,
  });
  const handlePageClick = ({ selected }) => {
    setFilterData({ page: selected + 1 });
  };

  useEffect(() => {
    getAllUsersDetails();
  }, [FilterData]);

  const getAllUsersDetails = async () => {
    const { data, success, message, total } = await Request.AllUserDetails(FilterData);
    if (success && data) {
      setTotalPagesSize(total);
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
      </Container>
    </>
  );
};

export default AllUsers;
