import React, { useContext } from "react";
import AppContext from "../../context/AppContext/AppContext";
import NavigationBar from "../../partials/NavigationBar/NavigationBar";

const AppNavigation = ({ children, config = {} }) => {
    const { appContext } = useContext(AppContext);

    config.overlapContent = appContext.appNavigationOverlapContent;

    return (
        <div className="AppNavigation">
            <NavigationBar
                config={config.navigationBar ? config.navigationBar : config}
            />
            {children}
        </div>
    );
};

export default AppNavigation;
