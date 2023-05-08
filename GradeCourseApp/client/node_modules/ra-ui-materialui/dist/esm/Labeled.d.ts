import { ElementType, ReactElement } from 'react';
import { StackProps, Theme } from '@mui/material';
import { Property } from 'csstype';
import { ResponsiveStyleValue } from '@mui/system';
/**
 * Wrap a field or an input with a label if necessary.
 *
 * The label is displayed if:
 * - the field or input has a label prop that is not false, or
 * - the field or input has a source prop
 *
 * @example
 * <Labeled>
 *     <FooComponent source="title" />
 * </Labeled>
 */
export declare const Labeled: {
    ({ children, className, color, component, fullWidth, isRequired, label, resource, source, ...rest }: LabeledProps): JSX.Element;
    displayName: string;
};
export interface LabeledProps extends StackProps {
    children: ReactElement;
    className?: string;
    color?: ResponsiveStyleValue<Property.Color | Property.Color[]> | ((theme: Theme) => ResponsiveStyleValue<Property.Color | Property.Color[]>);
    component?: ElementType;
    fullWidth?: boolean;
    htmlFor?: string;
    isRequired?: boolean;
    label?: string | ReactElement | boolean;
    resource?: string;
    source?: string;
}
export declare const LabeledClasses: {
    label: string;
    fullWidth: string;
};
//# sourceMappingURL=Labeled.d.ts.map