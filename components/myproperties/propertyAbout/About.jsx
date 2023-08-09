import React from "react";
import { Card, CardBody, Table } from "reactstrap";
import moment from "moment";

const About = ({ data }) => {
  return (
    <Card>
      <CardBody>
        <div className="title-about">
          <h5>About</h5>
        </div>
        <div className="table-responsive">
          <Table className="table-bordernone mb-0">
            <tbody>
              <tr>
                <td className="pt-0">Property Type:</td>
                <td className="light-font pt-0">{data?.property_type}</td>
              </tr>
              <tr>
                <td className="pt-0">price:</td>
                <td className="light-font pt-0">₹ {data?.price}</td>
              </tr>
              <tr>
                <td className="pt-0">status:</td>
                <td className="light-font pt-0">{data?.status}</td>
              </tr>
              <tr>
                <td className="pt-0">Number of Rooms:</td>
                <td className="light-font pt-0">{data?.num_of_rooms}</td>
              </tr>
              <tr>
                <td className="pt-0">Number of Bathrooms:</td>
                <td className="light-font pt-0">{data?.num_of_bathrooms}</td>
              </tr>
              <tr>
                <td className="pt-0">Number of Bedrooms:</td>
                <td className="light-font pt-0">{data?.num_of_bedrooms}</td>
              </tr>
              <tr>
                <td className="pt-0">Area:</td>
                <td className="light-font pt-0">{data?.area} Sq Ft</td>
              </tr>
              <tr>
                <td className="pt-0">Emergency Exit:</td>
                <td className="light-font pt-0">{data?.emergencyexit}</td>
              </tr>
              <tr>
                <td className="pt-0">CCTV:</td>
                <td className="light-font pt-0">{data?.cctv ? "Yes" : "No"}</td>
              </tr>
              <tr>
                <td className="pt-0">Free Wifi:</td>
                <td className="light-font pt-0">
                  {data?.freewifi ? "Yes" : "No"}
                </td>
              </tr>
              <tr>
                <td className="pt-0">Free Parcking:</td>
                <td className="light-font pt-0">
                  {data?.freeparcking ? "Yes" : "No"}
                </td>
              </tr>
              <tr>
                <td className="pt-0">Air Coniditioning:</td>
                <td className="light-font pt-0">
                  {data?.airconiditioning ? "Yes" : "No"}
                </td>
              </tr>
              <tr>
                <td className="pt-0">Security Guard:</td>
                <td className="light-font pt-0">
                  {data?.securityguard ? "Yes" : "No"}
                </td>
              </tr>
              <tr>
                <td className="pt-0">Terrace:</td>
                <td className="light-font pt-0">
                  {data?.terrace ? "Yes" : "No"}
                </td>
              </tr>
              <tr>
                <td className="pt-0">Laundry Service:</td>
                <td className="light-font pt-0">
                  {data?.laundryservice ? "Yes" : "No"}
                </td>
              </tr>
              <tr>
                <td className="pt-0">Balcony:</td>
                <td className="light-font pt-0">
                  {data?.balcony ? "Yes" : "No"}
                </td>
              </tr>
              <tr>
                <td className="pt-0">Opeing Since:</td>
                <td className="light-font pt-0">
                  {moment(data?.opeing_since).format("DD-MM-YYYY")}
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </CardBody>
    </Card>
  );
};

export default About;
