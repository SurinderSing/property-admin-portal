import React from "react";
import { Card, CardBody } from "reactstrap";
import ImageSlider from "../../myproperties/ImageSlider";
import { Camera } from "react-feather";

const PropertyImgBox = ({ video }) => {
  return (
    <Card>
      <CardBody>
        <div className="title-about">
          <h5>Video</h5>
        </div>
        <div>
          <video src={video} controls width="100%" height="100%">
            Your browser does not support the video tag.
          </video>
        </div>
      </CardBody>
    </Card>
  );
};

export default PropertyImgBox;
