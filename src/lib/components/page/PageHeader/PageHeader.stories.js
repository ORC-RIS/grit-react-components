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
        title: "Donec sed turpis at nulla tristique sodales",
        titlePrefix: "NEW!",
        subtitle:
            "Aliquam nec vehicula velit. Phasellus vitae purus pretium, tempus massa nec, commodo nibh. Aliquam congue et purus id accumsan. Pellentesque semper sed neque non lobortis. Donec sed turpis at nulla tristique sodales. ",
    },
    setAppContext: () => {},
};

export const BackgroundImage = Template.bind({});

BackgroundImage.args = {
    config: {
        title: (
            <>
                Donec sed turpis at <br />
                nulla tristique sodales
            </>
        ),
        titlePrefix: "NEW!",
        subtitle: "Aliquam nec vehicula velit",
        backgroundImage: "https://unsplash.it/1920/1080",
    },
    setAppContext: () => {},
};

export const Inline = Template.bind({});

Inline.args = {
    config: {
        title: "Donec sed turpis at nulla tristique sodales",
        titlePrefix: "NEW!",
        subtitle:
            "Aliquam nec vehicula velit. Phasellus vitae purus pretium, tempus massa nec, commodo nibh. Aliquam congue et purus id accumsan. Pellentesque semper sed neque non lobortis. Donec sed turpis at nulla tristique sodales. ",
        inline: true,
    },
};
