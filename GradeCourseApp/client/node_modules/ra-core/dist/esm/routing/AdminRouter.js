import * as React from 'react';
import { useMemo } from 'react';
import { useInRouterContext } from 'react-router-dom';
import { createHashHistory } from 'history';
import { HistoryRouter } from './HistoryRouter';
import { BasenameContextProvider } from './BasenameContextProvider';
/**
 * Creates a react-router Router unless the app is already inside existing router.
 * Also creates a BasenameContext with the basename prop
 */
export var AdminRouter = function (_a) {
    var history = _a.history, _b = _a.basename, basename = _b === void 0 ? '' : _b, children = _a.children;
    var isInRouter = useInRouterContext();
    var Router = isInRouter ? DummyRouter : InternalRouter;
    return (React.createElement(BasenameContextProvider, { basename: isInRouter ? basename : '' },
        React.createElement(Router, { basename: basename, history: history }, children)));
};
var DummyRouter = function (_a) {
    var children = _a.children;
    return React.createElement(React.Fragment, null, children);
};
var InternalRouter = function (_a) {
    var children = _a.children, history = _a.history;
    var finalHistory = useMemo(function () { return history || createHashHistory(); }, [
        history,
    ]);
    return React.createElement(HistoryRouter, { history: finalHistory }, children);
};
//# sourceMappingURL=AdminRouter.js.map