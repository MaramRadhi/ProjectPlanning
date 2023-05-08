var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { parsePath } from 'history';
import { useBasename } from './useBasename';
import { useCreatePath } from './useCreatePath';
/**
 * Hook for Redirection Side Effect
 *
 * @example
 *
 * const redirect = useRedirect();
 * // redirect to list view
 * redirect('list', 'posts');
 * // redirect to edit view
 * redirect('edit', 'posts', 123);
 * // redirect to edit view with state data
 * redirect('edit', 'comments', 123, {}, { record: { post_id: record.id } });
 * // do not redirect
 * redirect(false);
 * // redirect to the result of a function
 * redirect((resource, id, data) => ...)
 */
export var useRedirect = function () {
    var navigate = useNavigate();
    var basename = useBasename();
    var createPath = useCreatePath();
    return useCallback(function (redirectTo, resource, id, data, state) {
        if (resource === void 0) { resource = ''; }
        if (state === void 0) { state = {}; }
        if (!redirectTo) {
            return;
        }
        else if (typeof redirectTo === 'function') {
            var target = redirectTo(resource, id, data);
            var absoluteTarget = typeof target === 'string'
                ? "".concat(basename, "/").concat(target)
                : __assign({ pathname: "".concat(basename, "/").concat(target.pathname) }, target);
            navigate(typeof absoluteTarget === 'string'
                ? parsePath(absoluteTarget)
                : absoluteTarget, {
                state: __assign({ _scrollToTop: true }, state),
            });
            return;
        }
        else if (typeof redirectTo === 'string' &&
            redirectTo.startsWith('http') &&
            window) {
            // redirection to an absolute url
            // history doesn't handle that case, so we handle it by hand
            window.location.href = redirectTo;
            return;
        }
        else {
            // redirection to an internal link
            navigate(createPath({ resource: resource, id: id, type: redirectTo }), {
                state: __assign({ _scrollToTop: true }, state),
            });
            return;
        }
    }, [navigate, basename, createPath]);
};
//# sourceMappingURL=useRedirect.js.map