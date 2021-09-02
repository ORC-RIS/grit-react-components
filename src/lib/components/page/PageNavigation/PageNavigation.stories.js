import React from "react";

import PageNavigation from "./PageNavigation";

export default {
    title: "Page/PageNavigation",
    component: PageNavigation,
};

const Template = (args) => <PageNavigation {...args} />;

export const Default = Template.bind({});

Default.args = {
    config: {},
    setAppContext: () => {},
};
