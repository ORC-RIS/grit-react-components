import React from "react";
import { AppContextProvider } from "../../context/AppContext/AppContext";
import PageContent from "./PageContent";

export default {
    title: "Page/PageContent",
    component: PageContent,
};

const Template = (args) => (
    <AppContextProvider>
        <PageContent {...args} />
    </AppContextProvider>
);

export const Default = Template.bind({});

Default.args = {
    config: {},
    setAppContext: () => {},
};
