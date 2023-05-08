/// <reference types="react" />
import { RaRecord } from 'ra-core';
declare const DatagridContext: import("react").Context<DatagridContextValue>;
export declare type DatagridContextValue = {
    isRowExpandable?: (record: RaRecord) => boolean;
    expandSingle?: boolean;
};
export default DatagridContext;
//# sourceMappingURL=DatagridContext.d.ts.map