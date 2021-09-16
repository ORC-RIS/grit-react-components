import React from "react";
import PageContent from "./PageContent";

export default {
    title: "Page/PageContent",
    component: PageContent,
};

const Template = (args) => (
    <PageContent {...args}>
        <h2 className="mb-3">Page content heading</h2>
        <p>
            Aliquam nec vehicula velit. Phasellus vitae purus pretium, tempus
            massa nec, commodo nibh. Aliquam congue et purus id accumsan.
            Pellentesque semper sed neque non lobortis. Donec sed turpis at
            nulla tristique sodales. Fusce id venenatis nunc, ut tempus nisi.
            Sed euismod rhoncus aliquet. Vestibulum hendrerit neque nec massa
            ultricies, at tincidunt neque finibus. Nunc id aliquam lectus.
        </p>
        <p>
            Quisque vel dignissim metus, non pretium tellus. Etiam in elit
            iaculis mi hendrerit tempus. Proin quis pretium massa, non aliquam
            purus. Ut ac nulla sit amet nunc elementum hendrerit. Integer id
            diam a nibh pulvinar congue. Maecenas accumsan enim mauris, vitae
            suscipit nunc hendrerit id. Sed auctor vehicula sem, non sodales leo
            scelerisque et. Integer pretium, mi a egestas sodales, quam erat
            dictum turpis, in tempor orci odio ac sapien. Nunc pretium aliquet
            turpis vitae scelerisque. Nam turpis nulla, bibendum ac laoreet vel,
            viverra vel mi. Donec tincidunt consectetur justo vitae dapibus.
            Nullam ac imperdiet neque. Etiam turpis sapien, congue eget
            fringilla vitae, congue eget nisi. Phasellus ligula mi, congue
            laoreet turpis at, ultrices dictum neque. Duis et tellus ac eros
            interdum accumsan eu non justo. Nulla consectetur placerat est, eget
            luctus lorem vestibulum ut.
        </p>
    </PageContent>
);

export const Default = Template.bind({});

Default.args = {
    config: {},
    setAppContext: () => {},
};
