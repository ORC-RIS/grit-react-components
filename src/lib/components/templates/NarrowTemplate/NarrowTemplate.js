import React, { useEffect } from "react";
import PageContent from "../../page/PageContent/PageContent";
import PageFooter from "../../page/PageFooter/PageFooter";
import PageHeader from "../../page/PageHeader/PageHeader";
import PageNavigation from "../../page/PageNavigation/PageNavigation";

const NarrowTemplate = ({
    children,
    config = {},
    setAppContext = () => {},
}) => {
    useEffect(() => {
        setAppContext({ narrowContent: true });
    }, [setAppContext]);

    return (
        <>
            <PageHeader config={config.pageHeader} />
            <PageNavigation config={config.pageNavigation} />
            <PageContent config={config.pageContent}>{children}</PageContent>
            <PageFooter config={config.pageFooter} />
        </>
    );
};

export default NarrowTemplate;
