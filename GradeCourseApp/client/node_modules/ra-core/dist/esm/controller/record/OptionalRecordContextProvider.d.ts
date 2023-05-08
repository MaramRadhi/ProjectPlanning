import { ReactElement } from 'react';
import { RaRecord } from '../../types';
/**
 * Wrap children with a RecordContext provider only if the value is defined.
 *
 * Allows a component to work outside of a record context.
 *
 * @example
 *
 * import { OptionalRecordContextProvider, TextField } from 'react-admin';
 *
 * const RecordTitle = ({ record }) => (
 *     <OptionalRecordContextProvider value={record}>
 *         <TextField source="title" />
 *     </OptionalRecordContextProvider>
 * );
 */
export declare const OptionalRecordContextProvider: <RecordType extends RaRecord | Omit<RaRecord, "id"> = RaRecord>({ value, children, }: {
    children: ReactElement;
    value?: RecordType;
}) => JSX.Element;
//# sourceMappingURL=OptionalRecordContextProvider.d.ts.map