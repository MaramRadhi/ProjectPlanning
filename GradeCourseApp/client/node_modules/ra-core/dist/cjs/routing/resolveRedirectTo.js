"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveRedirectTo = void 0;
/**
 * @deprecated use useCreatePath instead
 */
var resolveRedirectTo = function (redirectTo, resource, id, data, basename) {
    if (basename === void 0) { basename = ''; }
    if (typeof redirectTo === 'function') {
        var target = redirectTo(resource, id, data);
        return typeof target === 'string'
            ? removeDoubleSlashes("".concat(basename, "/").concat(target))
            : __assign({ pathname: removeDoubleSlashes("".concat(basename, "/").concat(target.pathname)) }, target);
    }
    switch (redirectTo) {
        case 'list':
            return removeDoubleSlashes("".concat(basename, "/").concat(resource));
        case 'create':
            return removeDoubleSlashes("".concat(basename, "/").concat(resource, "/create"));
        case 'edit':
            return removeDoubleSlashes("".concat(basename, "/").concat(resource, "/").concat(encodeURIComponent(id)));
        case 'show':
            return removeDoubleSlashes("".concat(basename, "/").concat(resource, "/").concat(encodeURIComponent(id), "/show"));
        default:
            return redirectTo;
    }
};
exports.resolveRedirectTo = resolveRedirectTo;
var removeDoubleSlashes = function (path) { return path.replace('//', '/'); };
//# sourceMappingURL=resolveRedirectTo.js.map