import React from "react";
import { Shuffle } from "react-feather";
import { toast } from "react-toastify";

const AddToCompareProducts = ({ id }) => {
    const notify = () => toast(`This product added to compare list`, { type: "success" });
    return (
        <>
            <Shuffle
                onClick={() => { notify(); }}
            />
        </>
    );
};

export default AddToCompareProducts;
