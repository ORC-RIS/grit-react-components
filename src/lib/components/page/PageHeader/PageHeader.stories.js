import React from "react";
import { AppContextProvider } from "../../context/AppContext/AppContext";
import PageHeader from "./PageHeader";
import "./../../../../scss/style.scss";

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
    config: {
        title: "Page Header",
        // titlePrefix: "Prefix",
        subtitle:
            "Aliquam nec vehicula velit. Phasellus vitae purus pretium, tempus massa nec, commodo nibh. Aliquam congue et purus id accumsan. Pellentesque semper sed neque non lobortis. Donec sed turpis at nulla tristique sodales. ",
    },
    setAppContext: () => {},
};
