import React from "react";
import AppHeader from "./AppHeader";

export default {
    title: "Application/AppHeader",
    component: AppHeader,
};

const Template = (args) => <AppHeader {...args} />;

export const Default = Template.bind({});

Default.args = {
    config: {
        appNavigation: {
            brandContent: "My GRIT App",
            links: [
                {
                    text: "Page Title",
                    href: "#",
                },
                {
                    text: "About",
                    href: "#",
                },
                {
                    text: <>Products &amp; Services</>,
                    href: "#",
                },
                {
                    text: "Application-specific Page",
                    href: "#",
                },
                {
                    text: "Contact Us",
                    className: "bg-primary text-secondary text-shadow-none",
                    href: "#",
                },
            ],
        },
    },
};
