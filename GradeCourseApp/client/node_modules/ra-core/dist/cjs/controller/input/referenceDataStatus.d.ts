import { RaRecord, Translate } from '../../types';
import { MatchingReferencesError } from './types';
import { ControllerRenderProps } from 'react-hook-form';
interface GetStatusForInputParams<RecordType extends RaRecord = RaRecord> {
    field: Pick<ControllerRenderProps, 'value'>;
    matchingReferences: RecordType[] | MatchingReferencesError;
    referenceRecord: RecordType;
    translate: Translate;
}
export declare const getStatusForInput: <RecordType extends RaRecord = RaRecord>({ field, matchingReferences, referenceRecord, translate, }: GetStatusForInputParams<RecordType>) => {
    waiting: boolean;
    error: string;
    warning: string;
    choices: RecordType[];
};
export declare const REFERENCES_STATUS_READY = "REFERENCES_STATUS_READY";
export declare const REFERENCES_STATUS_INCOMPLETE = "REFERENCES_STATUS_INCOMPLETE";
export declare const REFERENCES_STATUS_EMPTY = "REFERENCES_STATUS_EMPTY";
export declare const getSelectedReferencesStatus: <RecordType extends RaRecord = any>(field: Pick<ControllerRenderProps, 'value'>, referenceRecords: RecordType[]) => "REFERENCES_STATUS_READY" | "REFERENCES_STATUS_INCOMPLETE" | "REFERENCES_STATUS_EMPTY";
interface GetStatusForArrayInputParams<RecordType extends RaRecord = any> {
    field: ControllerRenderProps;
    matchingReferences: RecordType[] | MatchingReferencesError;
    referenceRecords: RecordType[];
    translate: Translate;
}
export declare const getStatusForArrayInput: <RecordType extends RaRecord = any>({ field, matchingReferences, referenceRecords, translate, }: GetStatusForArrayInputParams<RecordType>) => {
    waiting: boolean;
    error: string;
    warning: string;
    choices: RecordType[];
};
export {};
//# sourceMappingURL=referenceDataStatus.d.ts.map