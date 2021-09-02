import React from "react";

const PageFooter = ({ children, config = {}, setAppContent = () => {} }) => {
    return !config.hide && <div className="PageFooter">{children}</div>;
};

export default PageFooter;
