import React from "react";
import PageContent from "../../page/PageContent/PageContent";
import PageFooter from "../../page/PageFooter/PageFooter";
import PageHeader from "../../page/PageHeader/PageHeader";
import PageNavigation from "../../page/PageNavigation/PageNavigation";

const NarrowTemplate = ({ children, config = {} }) => {
    const narrow = true;

    return (
        <>
            <PageHeader config={{ narrow, ...config.pageHeader }}>
                {config.pageHeader?.children}
            </PageHeader>
            <PageNavigation config={{ narrow, ...config.pageNavigation }}>
                {config.pageNavigation?.children}
            </PageNavigation>
            <PageContent config={{ narrow, ...config.pageContent }}>
                {children}
            </PageContent>
            <PageFooter config={{ narrow, ...config.pageFooter }}>
                {config.pageFooter?.children}
            </PageFooter>
        </>
    );
};

export default NarrowTemplate;
