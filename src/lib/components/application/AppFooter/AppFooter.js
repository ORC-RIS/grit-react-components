import React from "react";
import UcfFooter from "./../../ucf/UcfFooter/UcfFooter";
import Colophon from "../../partials/Colophon/Colophon";

const AppFooter = ({ children, config = {} }) => {
    return (
        <footer className="AppFooter">
            <Colophon config={config.colophon} />
            <UcfFooter />
        </footer>
    );
};

export default AppFooter;