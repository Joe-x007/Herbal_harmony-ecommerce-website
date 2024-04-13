import {createTheme} from '@mui/material/styles'

export const shades =
    {
        off_white: {
            100: "#FAF9F6",
            200: "#EDEBE8",
            300: "#E0DCDA",
            400: "#D3CECC",
            500: "#C6C0BE",
            600: "#B9B2B0",
            700: "#ACA4A2",
            800: "#9F9794",
            900: "#928A86"
        },

        cardinal_red: {
            100: "#E6BDC0",
            200: "#D094A2",
            300: "#BB6A84",
            400: "#A64066",
            500: "#C41E3A",
            600: "#9E1A30",
            700: "#781526",
            800: "#520F1C",
            900: "#2C0912"
        },

        red: {
            100: "#FFCCCC",
            200: "#FF9999",
            300: "#FF6666",
            400: "#FF3333",
            500: "#FF0000",
            600: "#CC0000",
            700: "#990000",
            800: "#660000",
            900: "#330000"
        },

        black: {
            100: "#333333",
            200: "#666666",
            300: "#999999",
            400: "#CCCCCC",
            500: "#000000",
            600: "#000000",
            700: "#000000",
            800: "#000000",
            900: "#000000"
        },
    }


    export const theme = createTheme({
        palette: {
            primary: {
                main: shades.off_white[500]
            },
            secondary: {
                main: shades.cardinal_red[500]
            },
            neutral: {
                dark: shades.black[700],
                main: shades.black[500],
                light: shades.black[100]
            },
        },
        typography: {
            fontFamily: ["Fauna One", "sans-serif"].join(","),
            fontSize: 11,
            h1: {
                fontFamily: ["Cinzel", "sans-serif"].join(","),
                fontSize: 48,
            },
            h2: {
                fontFamily: ["Cinzel", "sans-serif"].join(","),
                fontSize: 36,
            },
            h3: {
                fontFamily: ["Cinzel", "sans-serif"].join(","),
                fontSize: 20,
            },
            h4: {
                fontFamily: ["Cinzel", "sans-serif"].join(","),
                fontSize: 14,
            },
        },
    });
