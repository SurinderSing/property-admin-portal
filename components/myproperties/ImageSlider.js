import React from "react";
import Slider from "react-slick";
import Img from "../utils/Img";

const ImageSlider = ({ images }) => {
  const propertySlider = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <Slider className="property-slider" {...propertySlider}>
      {images?.map((data, i) => (
        <div key={i}>
          <div>
            <img
              src={data}
              alt="Properties Image"
              style={{
                width: "100% !important",
                height: "20rem",
                objectFit: "contain",
                aspectRatio: "3/2",
              }}
            ></img>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
