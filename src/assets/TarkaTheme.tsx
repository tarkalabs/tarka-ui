import { createTheme } from '@mui/material/styles';

const defaultTheme = createTheme({
    palette: {
        primary: {
            main: "#0000D6",
            light: "#0000F0",
            contrastText: "#F5F5FF",
        },
        secondary: {
            main: "#4D80B3",
            light: "#5E8CBA",
            contrastText: "#F0F7FF",
        },
        tertiary: {
            main: "#924F92",
            light: "#A257A2",
            contrastText: "#FFF5FF",
        },
        success: {
            main: "#148F47",
            contrastText: "#F2FDF6",
        },
        error: {
            main: "#CD1D32",
            light: "#DF2036",
            contrastText: "#FEFBFB",
        },
        warning: {
            main: "#FFB938",
            light: "#FFAD14",
            contrastText: "#241D0F",
        },
        bg: {
            main: "#EAEAF0",
            contrastText: "#171721",
        },
        surface: {
            main: "#F9F9FB",
            light: "#F0F0F5",
            contrastText: "#1A1A1F",
        },
        disabled: {
            content: "hsla(240, 9%, 11%, 0.38)",
            background: "hsla(240, 9%, 11%, 0.12)",
            light: "hsla(240, 9%, 11%, 0.20)",
        },
        utility: {
            outline: "#878792",
            link: "#3333FF",
        },
        input: {
            background: "#EAEAF0",
            text: "#1A1A1F",
            textDim: "hsla(240, 9%, 11%, 0.70)",
        },
    },
});

const altTheme = createTheme({

});
