import React, { useEffect, useRef } from "react";

const Img = (props) => {
    const bgImg = useRef(null);

    useEffect(() => {
        const image = bgImg.current;
        if (image && image.classList.contains("bg-img")) {
            const parentElement = image.parentElement;
            const src = props.src;
            parentElement.classList.add("bg-size");
            image.style.display = "none";
            parentElement.setAttribute(
                "style",
                `
        background-image: url(${src});
        background-size:cover; 
        background-position: center;
        background-repeat: no-repeat;
        display: block;
        `,
            );
        }
    }, [props.src]);
    return <img ref={bgImg} {...props} alt="" />;
};
export default Img;
