import React from "react";
import { transformVar } from "@quarkly/atomize";
import { createGlobalStyle } from "styled-components";

const pageStyles = {
    "404": {
        "font": "--minobrbold",
        "background": "#ffffff",
        "border-color": "#E7EAF2",
        "border-radius": "2px",
        "letter-spacing": ""
    },
    "index": {
        "font": "--minobrbold",
        "background": "#ffffff",
        "border-color": "#E7EAF2",
        "border-radius": "2px",
        "letter-spacing": ""
    },
    "chart-page": {
        "font": "--minobrbold",
        "background": "#ffffff",
        "border-color": "#E7EAF2",
        "border-radius": "2px",
        "letter-spacing": ""
    },
    "comand": {
        "font": "--minobrbold",
        "background": "#ffffff",
        "border-color": "#E7EAF2",
        "border-radius": "2px",
        "letter-spacing": ""
    }
};

const PageStyles = createGlobalStyle`
    body {
        ${({ styles }) =>
            Object.entries(styles || {}).map(
                ([prop, value]) => `${prop}: ${transformVar(prop, value)};`
            )}
    }
`;
export const GlobalQuarklyPageStyles = ({ pageUrl }) => <PageStyles styles={pageStyles[pageUrl]} />
