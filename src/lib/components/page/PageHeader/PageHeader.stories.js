import React from "react";

import PageHeader from "./PageHeader";

export default {
    title: "Page/PageHeader",
    component: PageHeader,
};

const Template = (args) => <PageHeader {...args} />;

export const Default = Template.bind({});

Default.args = {
    config: {},
    setAppContext: () => {},
};
