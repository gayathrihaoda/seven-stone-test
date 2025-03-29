import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const ScrollManager = () => {
    const { pathname } = useLocation();
    const { scroll } = useLocomotiveScroll();

    useEffect(() => {
        if (scroll) {
            scroll.update(); // Force update on route change
        }
    }, [pathname, scroll]);

    return null;
};

export default ScrollManager;
