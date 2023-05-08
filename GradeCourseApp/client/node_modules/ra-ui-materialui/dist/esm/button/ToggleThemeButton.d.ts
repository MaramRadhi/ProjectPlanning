/// <reference types="react" />
import { RaThemeOptions } from '..';
/**
 * Button toggling the theme (light or dark).
 *
 * @example
 * import { AppBar, TitlePortal, ToggleThemeButton } from 'react-admin';
 *
 * const MyAppBar = () => (
 *     <AppBar>
 *         <TitlePortal />
 *         <ToggleThemeButton lightTheme={lightTheme} darkTheme={darkTheme} />
 *     </AppBar>
 * );
 *
 * const MyLayout = props => <Layout {...props} appBar={MyAppBar} />;
 */
export declare const ToggleThemeButton: (props: ToggleThemeButtonProps) => JSX.Element;
export interface ToggleThemeButtonProps {
    darkTheme: RaThemeOptions;
    lightTheme?: RaThemeOptions;
}
//# sourceMappingURL=ToggleThemeButton.d.ts.map