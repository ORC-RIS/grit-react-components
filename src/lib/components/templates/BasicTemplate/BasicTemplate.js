import React from "react";
import PageContent from "../../page/PageContent/PageContent";
import PageFooter from "../../page/PageFooter/PageFooter";
import PageHeader from "../../page/PageHeader/PageHeader";
import PageNavigation from "../../page/PageNavigation/PageNavigation";
import { Breadcrumbs } from "../../..";

const BasicTemplate = ({ children, config = {} }) => {
    return (
        <>
            <Breadcrumbs config={config.breadcrumbs} />
            <PageHeader config={config.pageHeader} />
            <PageNavigation config={config.pageNavigation} />
            <PageContent config={config.pageContent}>{children}</PageContent>
            <PageFooter config={config.pageFooter} />
        </>
    );
};

export default BasicTemplate;
