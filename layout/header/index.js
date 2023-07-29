import React, { useEffect } from "react";
import { ChevronsLeft } from "react-feather";
import { Col, Row } from "reactstrap";
import Rightbar from "./rightbar";


const Header = ({ setToggle, toggle }) => {
  return (
    <>
      <Row className={`page-main-header ${!toggle ? "close_icon" : ""}`}>
        <Col id="sidebar-toggle" className="toggle-sidebar col-auto">
          <ChevronsLeft size={18} onClick={() => setToggle(!toggle)} />
        </Col>
        <Col className="nav-right p-0">
          <ul className="header-menu">
            <li></li>
            <Rightbar />
          </ul>
        </Col>
      </Row>
    </>
  );
};

export default Header;
