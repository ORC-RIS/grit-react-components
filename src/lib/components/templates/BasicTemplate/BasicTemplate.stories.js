import React from "react";
import AppMain from "../../application/AppMain/AppMain";

import BasicTemplate from "./BasicTemplate";

export default {
    title: "Templates/BasicTemplate",
    component: BasicTemplate,
};

const Template = (args) => (
    <AppMain>
        <BasicTemplate {...args} />
    </AppMain>
);

export const Default = Template.bind({});

Default.args = {
    children: <>Children of the Basic template will go here.</>,
    config: {
        pageHeader: {
            title: "A Basic Template",
        },
    },
    setAppContext: () => {},
};
