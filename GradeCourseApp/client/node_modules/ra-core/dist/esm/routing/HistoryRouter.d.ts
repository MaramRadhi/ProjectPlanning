import * as React from 'react';
import { History } from 'history';
/**
 * A router that accepts a custom history.
 * To remove once https://github.com/remix-run/react-router/pull/7586 is merged.
 */
export declare function HistoryRouter({ basename, children, history, }: HistoryRouterProps): JSX.Element;
export interface HistoryRouterProps {
    basename?: string;
    children?: React.ReactNode;
    history: History;
}
//# sourceMappingURL=HistoryRouter.d.ts.map