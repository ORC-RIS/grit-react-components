import React from "react";
import MainNavigation from "./MainNavigation";
import "./../../../../scss/style.scss";

export default {
    title: "Application/MainNavigation",
    component: MainNavigation,
};

const Template = (args) => <MainNavigation {...args} />;

export const Default = Template.bind({});

Default.args = {
    config: {
        brandContent: "My GRIT Application",
    },
};
