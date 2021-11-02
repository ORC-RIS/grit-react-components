import React from "react";
import PageFooter from "../../page/PageFooter/PageFooter";
import PageHeader from "../../page/PageHeader/PageHeader";
import PageNavigation from "../../page/PageNavigation/PageNavigation";
import { Breadcrumbs } from "../../..";

const FullWidthTemplate = ({
    children,
    config = {},
}) => {
    return (
        <>
            <Breadcrumbs config={config.breadcrumbs}/>
            <PageHeader config={config.pageHeader} />
            <PageNavigation config={config.pageNavigation} />
            {children}
            <PageFooter config={config.pageFooter} />
        </>
    );
};

export default FullWidthTemplate;
