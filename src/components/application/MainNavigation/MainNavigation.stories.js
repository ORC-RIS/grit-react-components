import React from "react";

import MainNavigation from "./MainNavigation";

export default {
    title: "Application/MainNavigation",
    component: MainNavigation,
};

const Template = (args) => <MainNavigation {...args} />;

export const Default = Template.bind({});

Default.args = {
    config: {
        brandContent: "My GRIT Application",
    }
};
