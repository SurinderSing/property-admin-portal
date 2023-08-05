import React, { Fragment, useEffect, useState } from "react";

const PropertyLabel = ({ labels }) => {
  const [LabalType, setLabalType] = useState();
  useEffect(() => {
    switch (labels) {
      case "On Going":
        setLabalType(() => {
          return <span className="label label-dark">On Going</span>;
        });
        break;
      case "Ready to Move":
        setLabalType(() => {
          return <span className="label label-success">Ready to Move</span>;
        });
        break;

      default:
        break;
    }
  }, [labels]);

  return LabalType;
};

export default PropertyLabel;
