import * as React from 'react';
import { History } from 'history';
/**
 * Creates a react-router Router unless the app is already inside existing router.
 * Also creates a BasenameContext with the basename prop
 */
export declare const AdminRouter: ({ history, basename, children, }: AdminRouterProps) => JSX.Element;
export interface AdminRouterProps {
    history?: History;
    basename?: string;
    children: React.ReactNode;
}
//# sourceMappingURL=AdminRouter.d.ts.map