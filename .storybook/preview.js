import React from "react";
import { AppContextProvider } from "../src/lib/components/context/AppContext/AppContext";

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

export const decorators = [
    (Story) => (
        <AppContextProvider>
            <Story />
        </AppContextProvider>
    ),
];
