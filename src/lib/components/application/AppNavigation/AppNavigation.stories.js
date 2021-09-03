import React from "react";
import AppNavigation from "./AppNavigation";
import "./../../../../scss/style.scss";

export default {
    title: "Application/AppNavigation",
    component: AppNavigation,
};

const Template = (args) => <AppNavigation {...args} />;

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