import React, { useEffect } from "react";

const UcfHeader = () => {
    useEffect(() => {
        const scriptTag = document.createElement("script");

        scriptTag.id = "ucfhb-script";
        scriptTag.src =
            "//universityheader.ucf.edu/bar/js/university-header.js?use-1200-breakpoint=1";

        document.body.appendChild(scriptTag);
    }, []);
    return <></>;
};

export default UcfHeader;
