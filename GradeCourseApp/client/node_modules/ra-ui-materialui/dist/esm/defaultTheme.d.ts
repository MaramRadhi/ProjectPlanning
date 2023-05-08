import { ThemeOptions } from '@mui/material';
export declare const defaultTheme: {
    palette: {
        background: {
            default: string;
        };
        secondary: {
            light: string;
            main: string;
            dark: string;
            contrastText: string;
        };
    };
    typography: {
        h6: {
            fontWeight: number;
        };
    };
    sidebar: {
        width: number;
        closedWidth: number;
    };
    components: {
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    backgroundColor: string;
                    '&$disabled': {
                        backgroundColor: string;
                    };
                };
            };
        };
        MuiTextField: {
            defaultProps: {
                variant: "filled";
                margin: "dense";
                size: "small";
            };
        };
        MuiFormControl: {
            defaultProps: {
                variant: "filled";
                margin: "dense";
                size: "small";
            };
        };
    };
};
export interface RaThemeOptions extends ThemeOptions {
    sidebar?: {
        width?: number;
        closedWidth?: number;
    };
}
//# sourceMappingURL=defaultTheme.d.ts.map