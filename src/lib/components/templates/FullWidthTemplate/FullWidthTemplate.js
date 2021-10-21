import React from "react";
import PageFooter from "../../page/PageFooter/PageFooter";
import PageHeader from "../../page/PageHeader/PageHeader";
import PageNavigation from "../../page/PageNavigation/PageNavigation";

const FullWidthTemplate = ({
    children,
    config = {},
}) => {
    return (
        <>
            <PageHeader config={config.pageHeader} />
            <PageNavigation config={config.pageNavigation} />
            {children}
            <PageFooter config={config.pageFooter} />
        </>
    );
};

export default FullWidthTemplate;
