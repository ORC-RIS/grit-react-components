import React from "react";
import AppMain from "../../application/AppMain/AppMain";
import NarrowTemplate from "./NarrowTemplate";

export default {
    title: "Templates/NarrowTemplate",
    component: NarrowTemplate,
};

const Template = (args) => (
    <AppMain>
        <NarrowTemplate {...args} />
    </AppMain>
);

export const Default = Template.bind({});

Default.args = {
    children: <>Children of the Narrow template will go here.</>,
    config: {
        pageHeader: {
            title: "A Narrow Template",
        },
        breadcrumbs: {
            innerWrapperClass:"", 
            wrapperClass: "",
            links: [
                {
                    text: "Home",
                    href: "#",
                },
                {
                    text: "Team",
                    href: "#",
                },
                {
                    text: "Help Desk",
                    href: "#",
                },
            ]
        },
    },
};
