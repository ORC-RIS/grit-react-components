import React from "react";
import AppMain from "./AppMain";
import "./../../../../scss/style.scss";
import { AppContextProvider } from "../../context/AppContext/AppContext";

export default {
    title: "Application/AppMain",
    component: AppMain,
};

const Template = () => (
    <AppContextProvider>
        <AppMain>
            <>This component does not have a visual representation.</>
        </AppMain>
    </AppContextProvider>
);

export const Default = Template.bind({});
