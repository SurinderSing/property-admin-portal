import React from "react";
import { Camera } from "react-feather";
import ImageSlider from "../../myproperties/ImageSlider";
import PropertyLabel from "./PropertyLabel";
import { useRouter } from "next/router";

const PropertyBox = ({ data }) => {
  const symbol = "₹";
  const router = useRouter();
  return (
    <>
      <div className="property-box">
        <div className="property-image">
          <ImageSlider images={data?.photoUrl} />
          <div className="labels-left">
            <PropertyLabel labels={data?.status} />
          </div>
          <div className="seen-data">
            <Camera />
            <span>{data?.photoUrl?.length || 5}</span>
          </div>
          {/* <div className="overlay-property-box">
                        <Link href='https://sheltos-react.vercel.app/pages/user-panel/compare-property' className="effect-round" title="Compare">
                            <AddToCompareProducts id={data.id} />
                        </Link>
                        <div className="effect-round like" onClick={() => { NavigateFavourit() }} title="wishlist">
                            <Heart />
                        </div>
                    </div> */}
        </div>
        <div className="property-details">
          <span className="font-roboto">{data?.country || "India"} </span>

          <h3>{data?.property_type}</h3>

          <h6>
            {symbol}
            {data.price}*
          </h6>
          <p className="font-roboto">{data?.description}</p>
          <ul>
            <li>
              <img
                src="/assets/images/svg/icon/double-bed.svg"
                className="img-fluid"
                alt=""
              />
              Bed Room : {data.num_of_rooms || 5}
            </li>
            <li>
              <img
                src="/assets/images/svg/icon/bathroom.svg"
                className="img-fluid"
                alt=""
              />
              Bath Room : {data.num_of_bathrooms || 5}
            </li>
            <li>
              <img
                src="/assets/images/svg/icon/square-ruler-tool.svg"
                className="img-fluid ruler-tool"
                alt=""
              />
              Sq Ft : {data.area || 5}
            </li>
          </ul>
          <div className="property-btn d-flex">
            <span>{data.date}</span>
            <button
              type="button"
              className="btn btn-dashed btn-pill"
              onClick={() => router.push(`/properties/details/${data?.id}`)}
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyBox;
