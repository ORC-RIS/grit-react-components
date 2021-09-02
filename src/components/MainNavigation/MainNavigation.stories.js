import React from "react";

import MainNavigation from "./MainNavigation";

export default {
    title: "Example/MainNavigation",
    component: MainNavigation,
};

const Template = (args) => <MainNavigation {...args} />;

export const Default = Template.bind({});

Default.args = {
    brandContent: "My GRIT Application",
};
