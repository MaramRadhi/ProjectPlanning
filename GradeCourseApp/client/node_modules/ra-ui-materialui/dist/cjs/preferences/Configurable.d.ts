import { ReactElement } from 'react';
import { SxProps } from '@mui/material/styles';
/**
 * Wrap any component with this component to make it configurable
 *
 * When the edit mode is enabled, users will see a button to edit the component;
 * when clicked, the inspector will show the editor element.
 *
 * Creates a context for the preference key, so that both the child component
 * and the editor can access it using usePreferenceKey();
 *
 * @example
 * const ConfigurableTextBlock = ({ preferenceKey = "TextBlock", ...props }) => (
 *     <Configurable editor={<TextBlockInspector />} preferenceKey={preferenceKey}>
 *         <TextBlock {...props} />
 *     </Configurable>
 * );
 */
export declare const Configurable: (props: ConfigurableProps) => JSX.Element;
export interface ConfigurableProps {
    children: ReactElement;
    editor: ReactElement;
    preferenceKey: string;
    openButtonLabel?: string;
    sx?: SxProps;
}
export declare const ConfigurableClasses: {
    editMode: string;
    editorActive: string;
};
//# sourceMappingURL=Configurable.d.ts.map