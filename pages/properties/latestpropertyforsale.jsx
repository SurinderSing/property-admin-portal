import React, { useState, useEffect } from "react";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import Breadcrumb from "../../components/Common/Breadcrumb";
import { Table, Tag, Switch } from "antd";
import { toast } from "react-toastify";
import Request from "../../request";
function Component() {
  const [DataSourse, setDataSourse] = useState([]);
  const [TotalPageSize, setTotalPageSize] = useState([]);
  const [Filter, setFilter] = useState({ page: 1 });

  useEffect(() => {
    apiFunction();
  }, [Filter]);

  const apiFunction = async () => {
    const { data, message, success, total } = await Request.AllProperties(
      Filter
    );

    if (success) {
      setTotalPageSize(total);
      setDataSourse(data);
      return;
    }
    toast.error(message || "Oops! Something went wrong!");
    return;
  };

  const LatestPropertyForSaleStatusUpdate = async (id, e) => {
    const { message, success, err } = await Request.LatestPropertyForSale(id, {
      latest_for_sale: `${e}`,
    });
    apiFunction();
    if (success) {
      toast.success(message || "Status updated!");
      return;
    }
    console.log(err.response.data.message);
    toast.error(
      message || err.response.data.message || "Oops! Something went wrong!"
    );
    return;
  };

  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Property Type",
      dataIndex: "property_type",
      key: "property_type",
    },
    {
      title: "Property Mode",
      dataIndex: "property_mode",
      key: "property_mode",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (i) => {
        return <Tag>{i}</Tag>;
      },
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Latest Property",
      dataIndex: "latest_for_sale",
      key: "latest_for_sale",
      render: (i, record) => {
        return (
          <Switch
            checked={i}
            onChange={(e) => {
              LatestPropertyForSaleStatusUpdate(record.id, e);
            }}
          />
        );
      },
    },
  ];

  return (
    <>
      <Breadcrumb title="Select Latest Property For Sale" parent="Properties" />
      <Container fluid={true} className="container-fluid">
        <Row>
          <Col lg="12">
            <Card className="card">
              <CardHeader className="card-header pb-0">
                <h5>Latest Property Details For Sale</h5>
              </CardHeader>
              <CardBody className="card-body admin-form">
                <Table
                  scroll={{ x: "auto" }}
                  columns={columns}
                  dataSource={DataSourse}
                  pagination={{
                    total: TotalPageSize,
                    showQuickJumper: true,
                    onChange: (e) => {
                      setFilter({ ...Filter, page: e });
                    },
                    current: Filter?.page,
                  }}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Component;
