import React from "react";
import UcfFooter from "./UcfFooter";

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
