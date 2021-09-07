import React from "react";
import AppNavigation from "./../AppNavigation/AppNavigation";
import UcfHeader from "./../../ucf/UcfHeader/UcfHeader";

const AppHeader = ({ config = {} }) => {
    return (
        <header className="AppHeader">
            <UcfHeader />
            <AppNavigation config={config.appNavigation} />
        </header>
    );
};

export default AppHeader;
