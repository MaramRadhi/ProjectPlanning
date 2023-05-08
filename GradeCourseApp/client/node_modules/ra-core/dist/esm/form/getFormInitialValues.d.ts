import { RaRecord } from '../types';
export default function getFormInitialValues(defaultValues: DefaultValue, record?: Partial<RaRecord>): any;
interface DefaultValueObject {
    [key: string]: any;
}
declare type DefaultValueFunction = (record: RaRecord) => DefaultValueObject;
declare type DefaultValue = DefaultValueObject | DefaultValueFunction;
export {};
//# sourceMappingURL=getFormInitialValues.d.ts.map