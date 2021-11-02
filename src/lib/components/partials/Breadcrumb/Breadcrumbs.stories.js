import React from "react";
import Breadcrumbs from "./Breadcrumbs";

export default {
    title: "Partials/Breadcrumbs",
    component: Breadcrumbs,
};

const Template = (args) => <Breadcrumbs {...args} />;

export const Default = Template.bind({});

Default.args = {
    config: {
            links: [
                {
                    text: "Home",
                    href: "#",
                    className: "",
                },
                {
                    text: "Library",
                    href: "#",
                    className: "",

                },
                {
                    text: "Workshops",
                    href: "#",
                    className: "",
                },
                {
                    text: "Contact Us",
                    href: "#",
                    className: "",
                },
            ],
        },
};