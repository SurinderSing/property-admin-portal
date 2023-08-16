import React, { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import PropertyBox from "../../Common/Propertybox/PropertyBox";
import { getData } from "../../utils/getData";
import { toast } from "react-toastify";
import Request from "../../../request";
import { useRouter } from "next/router";
import ReactPaginate from "react-paginate";

const Listview = () => {
  const [DataSourse, setDataSourse] = useState([]);
  const [TotalPagesSIze, setTotalPagesSize] = useState(1);
  const [FilterData, setFilterData] = useState({
    page: 1,
  });

  const handlePageClick = ({ selected }) => {
    setFilterData({ page: selected + 1 });
  };

  useEffect(() => {
    apiFunction();
  }, [FilterData]);

  const apiFunction = async () => {
    const { data, message, success, total } = await Request.AllProperties(
      FilterData
    );

    if (success && data.length > 0) {
      setDataSourse(data);
      setTotalPagesSize(total);
      return;
    }
    toast.error(message || "Oops! Something went wrong!");
    return;
  };

  console.log(DataSourse || "Oops! Something went wrong!");

  return (
    <div className="col-xl-12">
      <Row className="property-2 column-sm property-label property-grid">
        {DataSourse.length > 0
          ? DataSourse.map((item, i) => {
              return (
                <Col xl="4" md="6 xl-6" key={i}>
                  <PropertyBox data={item} />
                </Col>
              );
            })
          : "No Properties Available !"}
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
    </div>
  );
};

export default Listview;
