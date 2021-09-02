import React from "react";
import { AppContextProvider } from "../../context/AppContext/AppContext";
import PageHeader from "./PageHeader";

export default {
    title: "Page/PageHeader",
    component: PageHeader,
};

const Template = (args) => (
    <AppContextProvider>
        <PageHeader {...args} />
    </AppContextProvider>
);

export const Default = Template.bind({});

Default.args = {
    config: {},
    setAppContext: () => {},
};
