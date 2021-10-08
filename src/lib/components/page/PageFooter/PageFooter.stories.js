import React from "react";
import PageFooter from "./PageFooter";
import "./../../../../scss/style.scss";

export default {
    title: "Page/PageFooter",
    component: PageFooter,
};

const Template = (args) => <PageFooter {...args} />;

export const Default = Template.bind({});

Default.args = {
    config: {},
    setAppContext: () => {},
};
