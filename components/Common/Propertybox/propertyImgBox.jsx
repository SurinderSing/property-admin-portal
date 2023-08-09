import React from "react";
import { Card, CardBody } from "reactstrap";
import ImageSlider from "../../myproperties/ImageSlider";
import { Camera } from "react-feather";

const PropertyImgBox = ({ data }) => {
  return (
    <Card>
      <CardBody>
        <div className="title-about">
          <h5>Images</h5>
        </div>
        <div className="property-image">
          <ImageSlider images={data?.photoUrl} />
          <div className="seen-data">
            <Camera />
            <span>{data?.photoUrl?.length || 5}</span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default PropertyImgBox;
