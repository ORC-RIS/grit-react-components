import React from "react";

import PageContent from "./PageContent";

export default {
    title: "Page/PageContent",
    component: PageContent,
};

const Template = (args) => <PageContent {...args} />;

export const Default = Template.bind({});

Default.args = {
    config: {},
    setAppContext: () => {},
};
