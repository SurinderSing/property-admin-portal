
import Link from "next/link";
import React from "react";
import { Camera, Heart } from "react-feather";
import ImageSlider from "../../myproperties/ImageSlider";
import AddToCompareProducts from "./AddToCompareProducts";
import PropertyLabel from "./PropertyLabel";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const PropertyBox = ({ data }) => {
    const symbol = '$';
    const currencyValue = 1
    const router = useRouter();
    const NavigateFavourit = () => {
        toast.success('Add Favourites Successful..');
        router.push('/myproperties/favourites')
    }

    return (
        <>
            <div className="property-box">
                <div className="property-image">
                    <ImageSlider images={data.img} />
                    <div className="labels-left">
                        <PropertyLabel labels={data.label} />
                    </div>
                    <div className="seen-data">
                        <Camera />
                        <span>{data.img.length || 5}</span>
                    </div>
                    <div className="overlay-property-box">
                        <Link href='https://sheltos-react.vercel.app/pages/user-panel/compare-property' className="effect-round" title="Compare">
                            <AddToCompareProducts id={data.id} />
                        </Link>
                        <div className="effect-round like" onClick={() => { NavigateFavourit() }} title="wishlist">
                            <Heart />
                        </div>
                    </div>
                </div>
                <div className="property-details">
                    <span className="font-roboto">{data.country || "USA"} </span>
                    <Link href={Array.isArray(data.img) ? `/property/image-slider/?id=${data.id}` : `/property/image-box/?id=${data.id}`}>
                        <h3>{data.title}</h3>
                    </Link>
                    <h6>
                        {symbol}
                        {(data.price * currencyValue).toFixed(2) || (48596.0 * currencyValue).toFixed(2)}*
                    </h6>
                    <p className="font-roboto">{data.details || "This home provides wonderful entertaining spaces with a chef kitchen opening. Elegant retreat in a quiet Coral Gables setting.."} </p>
                    <ul>
                        <li>
                            <img src="/assets/images/svg/icon/double-bed.svg" className="img-fluid" alt="" />
                            Bed : {data.bed || 5}
                        </li>
                        <li>
                            <img src="/assets/images/svg/icon/bathroom.svg" className="img-fluid" alt="" />
                            Baths : {data.bath || 5}
                        </li>
                        <li>
                            <img src="/assets/images/svg/icon/square-ruler-tool.svg" className="img-fluid ruler-tool" alt="" />
                            Sq Ft : {data.sqft || 5}
                        </li>
                    </ul>
                    <div className="property-btn d-flex">
                        <span>{data.date}</span>
                        <Link href='https://sheltos-react.vercel.app/property/image-box'>
                            <button type="button" className="btn btn-dashed btn-pill">
                                Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PropertyBox;
