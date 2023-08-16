import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Breadcrumb from "../../components/Common/Breadcrumb";
import MessageBox from "../../components/messages/messageBox";
import { toast } from "react-toastify";
import Request from "../../request";
import ReactPaginate from "react-paginate";

const Messages = () => {
  const [Messageslist, setMessageslist] = useState([]);
  const [TotalPagesSIze, setTotalPagesSize] = useState(1);
  const [FilterData, setFilterData] = useState({
    page: 1,
  });
  const handlePageClick = ({ selected }) => {
    setFilterData({ page: selected + 1 });
  };

  useEffect(() => {
    getAllMessages();
  }, [FilterData]);

  const getAllMessages = async () => {
    const { data, success, message, total } = await Request.allMessagesApi(
      FilterData
    );
    if (success) {
      setTotalPagesSize(total);
      return setMessageslist(data);
    }
    return toast.error(message || "Oops! Something went wrong!");
  };
  return (
    <>
      <Breadcrumb title="All Messages" parent="Message" />
      <Container fluid={true}>
        <Row className="agent-section property-section agent-lists">
          <Col lg="12">
            <div className="ratio2_3">
              <Row className="property-2 column-sm property-label property-grid">
                {Messageslist.length > 0
                  ? Messageslist.map((item, i) => {
                      return (
                        <Col xl="4" sm="6" key={i} className="wow fadeInUp">
                          <MessageBox data={item} />
                        </Col>
                      );
                    })
                  : "No Message Available !"}
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

export default Messages;
