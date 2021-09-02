import React from "react";
import AppNavigation from "./AppNavigation";
import "./../../../../scss/style.scss";

export default {
    title: "Application/AppNavigation",
    component: AppNavigation,
};

const Template = (args) => <AppNavigation {...args} />;

export const Default = Template.bind({});

Default.args = {
    config: {
        brandContent: "My GRIT Application",
    },
};
