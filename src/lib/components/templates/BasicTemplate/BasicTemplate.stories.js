import React from "react";
import { AppContextProvider } from "../../context/AppContext/AppContext";

import BasicTemplate from "./BasicTemplate";

export default {
    title: "Templates/BasicTemplate",
    component: BasicTemplate,
};

const Template = (args) => (
    <AppContextProvider>
        <BasicTemplate {...args} />
    </AppContextProvider>
);

export const Default = Template.bind({});

Default.args = {
    config: {},
    setAppContext: () => {},
};
