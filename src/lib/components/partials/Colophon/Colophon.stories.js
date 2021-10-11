import React from "react";
import Colophon from "./Colophon";

export default {
    title: "Partials/Colophon",
    component: Colophon,
};

const Template = (args) => <Colophon {...args} />;

export const Default = Template.bind({});

const entityTitle = (
    <>
        Office of Research <br />
        &amp; College of Graduate Studies
    </>
);

const entityAddress = (
    <>
        12201 Research Parkway, Suite 501
        <br />
        Orlando, FL 32826-3246
        <br />
        <a className="bg-inverse-link" href="tel:+14078233778">
            407.823.3778
        </a>
    </>
);

const entityHours = (
    <>
        Monday&ndash;Friday <br />
        8:00 AM&ndash;5:00 PM
    </>
);

const sitemapLinks = [
    {
        text: "Home",
        href: "#",
    },
    {
        text: "Page Title",
        href: "#",
    },
    {
        text: "Privacy Policy",
        href: "#",
    },
    {
        text: <>Terms &amp; Conditions</>,
        href: "#",
    },
    {
        text: <>About Us</>,
        href: "#",
    },
];

Default.args = {
    config: {
        entityAddress,
        entityHours,
        entityTitle,
        sitemapLinks,
    },
};
