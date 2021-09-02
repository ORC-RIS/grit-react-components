import React from "react";
import UcfHeader from "./UcfHeader";

export default {
    title: "UCF/UcfHeader",
    component: UcfHeader,
};

const Template = (args) => <UcfHeader {...args} />;

export const Default = Template.bind({});

Default.args = {
    config: {},
    setAppContext: () => {},
};
