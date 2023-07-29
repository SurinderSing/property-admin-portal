import React, { Fragment } from "react";

const PropertyLabel = ({ labels }) => {
    return (
        <>
            {Array.isArray(labels) &&
                labels?.map((values, i) => {
                    return (
                        <Fragment key={i}>
                            {values === "sale" && (
                                <div>
                                    <span className='label label-shadow'>Sale</span>
                                </div>
                            )}
                            {values === "no fees" || values === "For Rent" && (
                                <div>
                                    <span className='label label-dark'>{values}</span>
                                </div>
                            )}
                            {values === "open house" || values === "Featured" && (
                                <div>
                                    <span className='label label-success'>{values}</span>
                                </div>
                            )}
                            {values === "sold" && (
                                <div>
                                    <span className='label label-shadow'>Sold</span>
                                </div>
                            )}
                        </Fragment>
                    )
                })}
        </>
    );
};

export default PropertyLabel;
