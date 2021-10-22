import React from "react";
import AppMain from "../../application/AppMain/AppMain";

import FullWidthTemplate from "./FullWidthTemplate.js";

export default {
    title: "Templates/FullWidthTemplate",
    component: FullWidthTemplate,
};

const Template = (args) => (
    <AppMain>
        <FullWidthTemplate {...args} />
    </AppMain>
);

export const Default = Template.bind({});

Default.args = {
    children: <>Children of the Full-width template will go here.</>,
    config: {
        pageHeader: {
            title: "A Basic Template",
        },
    },
    setAppContext: () => {},
};
