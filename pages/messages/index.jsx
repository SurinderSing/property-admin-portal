import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Breadcrumb from "../../components/Common/Breadcrumb";
import MessageBox from "../../components/messages/messageBox";
import { toast } from "react-toastify";
import Request from "../../request";
const Messages = () => {
  const [Messageslist, setMessageslist] = useState([]);
  useEffect(() => {
    getAllMessages();
  }, []);

  const getAllMessages = async () => {
    const { data, success, message } = await Request.allMessagesApi();
    if (success) {
      console.log(data);
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
        </Row>
      </Container>
    </>
  );
};

export default Messages;
