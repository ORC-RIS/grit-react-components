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
        brand: {
            content: (
                <>
                    <span className="h3 mb-0">MyGritApp</span>
                </>
            ),
        },
        links: [
            {
                text: "Page Title",
                link: "myLink",
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
        overlapContent: true,
    },
};
