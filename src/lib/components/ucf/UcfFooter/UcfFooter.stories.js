import React from "react";
import UcfFooter from "./UcfFooter";
import "./../../../../scss/style.scss";

export default {
    title: "UCF/UcfFooter",
    component: UcfFooter,
};

const Template = (args) => <UcfFooter {...args} />;

export const Default = Template.bind({});

Default.args = {
    config: {},
    setAppContext: () => {},
};
