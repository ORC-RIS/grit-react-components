import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../context/AppContext/AppContext";
import NavigationBar from "../../partials/NavigationBar/NavigationBar";

const AppNavigation = ({ children, config = {} }) => {
    const { updateAppContext, defaultAppContext } = useContext(AppContext);

    const [appContext, setAppContext] = useState(defaultAppContext);

    useEffect(() => {
        updateAppContext({ type: "RESET", payload: {} });
    }, [updateAppContext]);

    useEffect(() => {
        updateAppContext({
            type: "UPDATE",
            payload: { ...appContext },
        });
    }, [appContext, updateAppContext]);

    config.overlapContent = appContext.appNavigationOverlapContent;

    return (
        <div className="AppNavigation">
            <NavigationBar
                config={
                    config.navigationBar
                        ? { ...config.navigationBar, ...config }
                        : config
                }
                setAppContext={setAppContext}
            />
            {children}
        </div>
    );
};

export default AppNavigation;
