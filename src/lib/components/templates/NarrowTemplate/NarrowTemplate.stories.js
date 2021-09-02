import React from "react";
import { AppContextProvider } from "../../context/AppContext/AppContext";
import NarrowTemplate from "./NarrowTemplate";

export default {
    title: "Templates/NarrowTemplate",
    component: NarrowTemplate,
};

const Template = (args) => (
    <AppContextProvider>
        <NarrowTemplate {...args} />
    </AppContextProvider>
);

export const Default = Template.bind({});

Default.args = {
    children: <>Children of the Narrow template will go here.</>,
    config: {
        pageHeader: {
            title: "A Narrow Template"
        }
    },
    setAppContext: () => {},
};
