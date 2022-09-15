import { PaletteColorOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface PaletteOptions {
        tertiary, surface, bg: PaletteColorOptions;
        disabled: PaletteColorOptions & {
            content: string;
            background: string;
        };
        utility: {
            outline: string;
            link: string;
        };
        input: {
            background: string;
            text: string;
            textDim: string;
        }
    }
}
