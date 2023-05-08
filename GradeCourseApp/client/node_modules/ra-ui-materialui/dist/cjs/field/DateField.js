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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateField = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var get_1 = __importDefault(require("lodash/get"));
var material_1 = require("@mui/material");
var ra_core_1 = require("ra-core");
var sanitizeFieldRestProps_1 = require("./sanitizeFieldRestProps");
var types_1 = require("./types");
/**
 * Display a date value as a locale string.
 *
 * Uses Intl.DateTimeFormat() if available, passing the locales and options props as arguments.
 * If Intl is not available, it outputs date as is (and ignores the locales and options props).
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
 * @example
 * <DateField source="published_at" />
 * // renders the record { id: 1234, published_at: new Date('2012-11-07') } as
 * <span>07/11/2012</span>
 *
 * <DateField source="published_at" className="red" />
 * // renders the record { id: 1234, new Date('2012-11-07') } as
 * <span class="red">07/11/2012</span>
 *
 * <DateField source="share" options={{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }} />
 * // renders the record { id: 1234, new Date('2012-11-07') } as
 * <span>Wednesday, November 7, 2012</span>
 *
 * <DateField source="price" locales="fr-FR" options={{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }} />
 * // renders the record { id: 1234, new Date('2012-11-07') } as
 * <span>mercredi 7 novembre 2012</span>
 */
exports.DateField = (0, react_1.memo)(function (props) {
    var className = props.className, emptyText = props.emptyText, locales = props.locales, options = props.options, _a = props.showTime, showTime = _a === void 0 ? false : _a, _b = props.showDate, showDate = _b === void 0 ? true : _b, source = props.source, rest = __rest(props, ["className", "emptyText", "locales", "options", "showTime", "showDate", "source"]);
    var translate = (0, ra_core_1.useTranslate)();
    if (!showTime && !showDate) {
        throw new Error('<DateField> cannot have showTime and showDate false at the same time');
    }
    var record = (0, ra_core_1.useRecordContext)(props);
    if (!record) {
        return null;
    }
    var value = (0, get_1.default)(record, source);
    if (value == null || value === '') {
        return emptyText ? (React.createElement(material_1.Typography, __assign({ component: "span", variant: "body2", className: className }, (0, sanitizeFieldRestProps_1.sanitizeFieldRestProps)(rest)), emptyText && translate(emptyText, { _: emptyText }))) : null;
    }
    var date = value instanceof Date ? value : new Date(value);
    var dateOptions = options;
    if (typeof value === 'string' &&
        value.length <= 10 &&
        !showTime &&
        !options) {
        // Input is a date string (e.g. '2022-02-15') without time and time zone.
        // Force timezone to UTC to fix issue with people in negative time zones
        // who may see a different date when calling toLocaleDateString().
        dateOptions = { timeZone: 'UTC' };
    }
    var dateString = '';
    if (showTime && showDate) {
        dateString = toLocaleStringSupportsLocales
            ? date.toLocaleString(locales, options)
            : date.toLocaleString();
    }
    else if (showDate) {
        dateString = toLocaleStringSupportsLocales
            ? date.toLocaleDateString(locales, dateOptions)
            : date.toLocaleDateString();
    }
    else if (showTime) {
        dateString = toLocaleStringSupportsLocales
            ? date.toLocaleTimeString(locales, options)
            : date.toLocaleTimeString();
    }
    return (React.createElement(material_1.Typography, __assign({ component: "span", variant: "body2", className: className }, (0, sanitizeFieldRestProps_1.sanitizeFieldRestProps)(rest)), dateString));
});
exports.DateField.propTypes = __assign(__assign(__assign({}, material_1.Typography.propTypes), types_1.fieldPropTypes), { locales: prop_types_1.default.oneOfType([
        prop_types_1.default.string,
        prop_types_1.default.arrayOf(prop_types_1.default.string),
    ]), options: prop_types_1.default.object, showTime: prop_types_1.default.bool, showDate: prop_types_1.default.bool });
exports.DateField.displayName = 'DateField';
var toLocaleStringSupportsLocales = (function () {
    // from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
    try {
        new Date().toLocaleString('i');
    }
    catch (error) {
        return error instanceof RangeError;
    }
    return false;
})();
//# sourceMappingURL=DateField.js.map