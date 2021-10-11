import React from "react";
import NavigationBar from "./NavigationBar";

export default {
    title: "Partials/NavigationBar",
    component: NavigationBar,
};

const Template = (args) => <NavigationBar {...args} />;

export const Default = Template.bind({});

Default.args = {
    config: {
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
};


export const OverlapContent = Template.bind({});

OverlapContent.args = {
    config: {
        ...Default.args.config,
        overlapContent: true
    }
}