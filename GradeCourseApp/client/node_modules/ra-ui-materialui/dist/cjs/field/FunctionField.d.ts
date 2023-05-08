/// <reference types="react" />
import { TypographyProps } from '@mui/material/Typography';
import { PublicFieldProps, InjectedFieldProps } from './types';
/**
 * Field using a render function
 *
 * @example
 * <FunctionField
 *     source="last_name" // used for sorting
 *     label="Name"
 *     render={record => record && `${record.first_name} ${record.last_name}`}
 * />
 */
export declare const FunctionField: {
    <RecordType extends unknown = any>(props: FunctionFieldProps<RecordType>): JSX.Element;
    propTypes: any;
};
export interface FunctionFieldProps<RecordType extends unknown = any> extends PublicFieldProps, InjectedFieldProps<RecordType>, Omit<TypographyProps, 'textAlign'> {
    render: (record?: RecordType, source?: string) => any;
}
//# sourceMappingURL=FunctionField.d.ts.map