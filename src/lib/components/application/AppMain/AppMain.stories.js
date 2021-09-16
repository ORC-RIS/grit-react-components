import React from "react";
import AppMain from "./AppMain";
import "./../../../../scss/style.scss";

export default {
    title: "Application/AppMain",
    component: AppMain,
};

const Template = () => (
    <AppMain>
        <>This component does not have a visual representation.</>
    </AppMain>
);

export const Default = Template.bind({});
