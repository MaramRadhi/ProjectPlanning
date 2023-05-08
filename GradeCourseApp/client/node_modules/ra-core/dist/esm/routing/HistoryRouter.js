import * as React from 'react';
import { useLayoutEffect, useState } from 'react';
import { Router } from 'react-router';
/**
 * A router that accepts a custom history.
 * To remove once https://github.com/remix-run/react-router/pull/7586 is merged.
 */
export function HistoryRouter(_a) {
    var basename = _a.basename, children = _a.children, history = _a.history;
    var _b = useState({
        action: history.action,
        location: history.location,
    }), state = _b[0], setState = _b[1];
    useLayoutEffect(function () { return history.listen(setState); }, [history]);
    return (React.createElement(Router, { basename: basename, children: children, location: state.location, navigationType: state.action, navigator: history }));
}
//# sourceMappingURL=HistoryRouter.js.map