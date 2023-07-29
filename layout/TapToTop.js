import { useEffect, useState } from "react";

const TapToTop = () => {
    const [goingUp, setGoingUp] = useState(false);

    useEffect(() => {
        // Tap to Top Scroll
        const handleScroll = () => {
            if (typeof window !== undefined) {
                const currentScrollY = window.scrollY;
                if (currentScrollY > 500) setGoingUp(true);
                else setGoingUp(false);
            };
        }
        typeof window !== undefined ? window.addEventListener("scroll", handleScroll, { passive: true }) : '';
        return () => typeof window !== undefined ? window.removeEventListener("scroll", handleScroll) : '';

    }, [goingUp]);

    const tapToTop = () => {
        typeof window !== undefined ? window.scrollTo({
            behavior: "smooth",
            top: 0,
        }) : '';
    };
    return (
        <>
            <div className={`tap-top ${goingUp ? "top" : ""}`} onClick={tapToTop}>
                <div>
                    <i className='fas fa-arrow-up'></i>
                </div>
            </div>
        </>
    );
};

export default TapToTop;
