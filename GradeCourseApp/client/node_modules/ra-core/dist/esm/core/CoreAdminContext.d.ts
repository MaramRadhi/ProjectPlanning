/// <reference types="react" />
import { QueryClient } from 'react-query';
import { History } from 'history';
import { Store } from '../store';
import { AuthProvider, LegacyAuthProvider, I18nProvider, DataProvider, AdminChildren, DashboardComponent, LegacyDataProvider } from '../types';
export interface CoreAdminContextProps {
    authProvider?: AuthProvider | LegacyAuthProvider;
    basename?: string;
    children?: AdminChildren;
    dashboard?: DashboardComponent;
    dataProvider?: DataProvider | LegacyDataProvider;
    store?: Store;
    queryClient?: QueryClient;
    /**
     * @deprecated Wrap your Admin inside a Router to change the routing strategy
     */
    history?: History;
    i18nProvider?: I18nProvider;
    theme?: object;
}
export declare const CoreAdminContext: {
    (props: CoreAdminContextProps): JSX.Element;
    defaultProps: {
        dataProvider: {
            create: () => Promise<{
                data: any;
            }>;
            delete: () => Promise<{
                data: any;
            }>;
            deleteMany: () => Promise<{
                data: any[];
            }>;
            getList: () => Promise<{
                data: any[];
                total: number;
            }>;
            getMany: () => Promise<{
                data: any[];
            }>;
            getManyReference: () => Promise<{
                data: any[];
                total: number;
            }>;
            getOne: () => Promise<{
                data: any;
            }>;
            update: () => Promise<{
                data: any;
            }>;
            updateMany: () => Promise<{
                data: any[];
            }>;
        };
        store: Store;
    };
};
//# sourceMappingURL=CoreAdminContext.d.ts.map