import { ReactElement } from 'react';
import { RaRecord } from '../../types';
/**
 * Render prop version of useRecordContext
 *
 * @example
 * const BookShow = () => (
 *    <Show>
 *       <SimpleShowLayout>
 *          <WithRecord render={record => <span>{record.title}</span>} />
 *      </SimpleShowLayout>
 *   </Show>
 * );
 */
export declare const WithRecord: <RecordType extends RaRecord>({ render, }: WithRecordProps<RecordType>) => ReactElement<any, string | import("react").JSXElementConstructor<any>>;
export interface WithRecordProps<RecordType extends RaRecord> {
    render: (record: RecordType) => ReactElement;
    label?: string;
}
//# sourceMappingURL=WithRecord.d.ts.map