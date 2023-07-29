import React, { useLayoutEffect } from "react";

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div className="row loader-img">
        <div className="col-12">
          <img
            src="/assets/images/loader/loader-2.gif"
            className="img-fluid"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
