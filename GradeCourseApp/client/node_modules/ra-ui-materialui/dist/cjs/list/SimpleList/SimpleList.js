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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleListClasses = exports.SimpleList = void 0;
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var material_1 = require("@mui/material");
var react_router_dom_1 = require("react-router-dom");
var ra_core_1 = require("ra-core");
var SimpleListLoading_1 = require("./SimpleListLoading");
var ListNoResults_1 = require("../ListNoResults");
/**
 * The <SimpleList> component renders a list of records as a MUI <List>.
 * It is usually used as a child of react-admin's <List> and <ReferenceManyField> components.
 *
 * Also widely used on Mobile.
 *
 * Props:
 * - primaryText: function returning a React element (or some text) based on the record
 * - secondaryText: same
 * - tertiaryText: same
 * - leftAvatar: function returning a React element based on the record
 * - leftIcon: same
 * - rightAvatar: same
 * - rightIcon: same
 * - linkType: 'edit' or 'show', or a function returning 'edit' or 'show' based on the record
 * - rowStyle: function returning a style object based on (record, index)
 *
 * @example // Display all posts as a List
 * const postRowStyle = (record, index) => ({
 *     backgroundColor: record.views >= 500 ? '#efe' : 'white',
 * });
 * export const PostList = () => (
 *     <List>
 *         <SimpleList
 *             primaryText={record => record.title}
 *             secondaryText={record => `${record.views} views`}
 *             tertiaryText={record =>
 *                 new Date(record.published_at).toLocaleDateString()
 *             }
 *             rowStyle={postRowStyle}
 *          />
 *     </List>
 * );
 */
var SimpleList = function (props) {
    var className = props.className, _a = props.empty, empty = _a === void 0 ? DefaultEmpty : _a, hasBulkActions = props.hasBulkActions, leftAvatar = props.leftAvatar, leftIcon = props.leftIcon, _b = props.linkType, linkType = _b === void 0 ? 'edit' : _b, primaryText = props.primaryText, rightAvatar = props.rightAvatar, rightIcon = props.rightIcon, secondaryText = props.secondaryText, tertiaryText = props.tertiaryText, rowStyle = props.rowStyle, rest = __rest(props, ["className", "empty", "hasBulkActions", "leftAvatar", "leftIcon", "linkType", "primaryText", "rightAvatar", "rightIcon", "secondaryText", "tertiaryText", "rowStyle"]);
    var _c = (0, ra_core_1.useListContext)(props), data = _c.data, isLoading = _c.isLoading, total = _c.total;
    var resource = (0, ra_core_1.useResourceContext)(props);
    var translate = (0, ra_core_1.useTranslate)();
    if (isLoading === true) {
        return (React.createElement(SimpleListLoading_1.SimpleListLoading, { className: className, hasLeftAvatarOrIcon: !!leftIcon || !!leftAvatar, hasRightAvatarOrIcon: !!rightIcon || !!rightAvatar, hasSecondaryText: !!secondaryText, hasTertiaryText: !!tertiaryText }));
    }
    /**
     * Once loaded, the data for the list may be empty. Instead of
     * displaying the table header with zero data rows,
     * the SimpleList the empty component.
     */
    if (data == null || data.length === 0 || total === 0) {
        if (empty) {
            return empty;
        }
        return null;
    }
    var renderAvatar = function (record, avatarCallback) {
        var avatarValue = avatarCallback(record, record.id);
        if (typeof avatarValue === 'string' &&
            (avatarValue.startsWith('http') || avatarValue.startsWith('data:'))) {
            return React.createElement(material_1.Avatar, { src: avatarValue });
        }
        else {
            return React.createElement(material_1.Avatar, null, avatarValue);
        }
    };
    return (total == null && (data === null || data === void 0 ? void 0 : data.length) > 0) || total > 0 ? (React.createElement(Root, __assign({ className: className }, (0, ra_core_1.sanitizeListRestProps)(rest)), data.map(function (record, rowIndex) { return (React.createElement(ra_core_1.RecordContextProvider, { key: record.id, value: record },
        React.createElement(material_1.ListItem, { disablePadding: true },
            React.createElement(LinkOrNot, { linkType: linkType, resource: resource, id: record.id, record: record, style: rowStyle
                    ? rowStyle(record, rowIndex)
                    : undefined },
                leftIcon && (React.createElement(material_1.ListItemIcon, null, leftIcon(record, record.id))),
                leftAvatar && (React.createElement(material_1.ListItemAvatar, null, renderAvatar(record, leftAvatar))),
                React.createElement(material_1.ListItemText, { primary: React.createElement("div", null,
                        typeof primaryText === 'string'
                            ? translate(primaryText, __assign(__assign({}, record), { _: primaryText }))
                            : (0, react_1.isValidElement)(primaryText)
                                ? primaryText
                                : primaryText(record, record.id),
                        !!tertiaryText &&
                            ((0, react_1.isValidElement)(tertiaryText) ? (tertiaryText) : (React.createElement("span", { className: exports.SimpleListClasses.tertiary }, typeof tertiaryText ===
                                'string'
                                ? translate(tertiaryText, __assign(__assign({}, record), { _: tertiaryText }))
                                : tertiaryText(record, record.id))))), secondary: !!secondaryText &&
                        (typeof secondaryText === 'string'
                            ? translate(secondaryText, __assign(__assign({}, record), { _: secondaryText }))
                            : (0, react_1.isValidElement)(secondaryText)
                                ? secondaryText
                                : secondaryText(record, record.id)) }),
                (rightAvatar || rightIcon) && (React.createElement(material_1.ListItemSecondaryAction, null,
                    rightAvatar && (React.createElement(material_1.Avatar, null, renderAvatar(record, rightAvatar))),
                    rightIcon && (React.createElement(material_1.ListItemIcon, null, rightIcon(record, record.id))))))))); }))) : null;
};
exports.SimpleList = SimpleList;
exports.SimpleList.propTypes = {
    className: prop_types_1.default.string,
    leftAvatar: prop_types_1.default.func,
    leftIcon: prop_types_1.default.func,
    linkType: prop_types_1.default.oneOfType([
        prop_types_1.default.string,
        prop_types_1.default.bool,
        prop_types_1.default.func,
    ]),
    primaryText: prop_types_1.default.oneOfType([
        prop_types_1.default.func,
        prop_types_1.default.element,
        prop_types_1.default.string,
    ]),
    rightAvatar: prop_types_1.default.func,
    rightIcon: prop_types_1.default.func,
    secondaryText: prop_types_1.default.oneOfType([
        prop_types_1.default.func,
        prop_types_1.default.element,
        prop_types_1.default.string,
    ]),
    tertiaryText: prop_types_1.default.oneOfType([
        prop_types_1.default.func,
        prop_types_1.default.element,
        prop_types_1.default.string,
    ]),
    rowStyle: prop_types_1.default.func,
};
var LinkOrNot = function (props) {
    var classesOverride = props.classes, linkType = props.linkType, resource = props.resource, id = props.id, children = props.children, record = props.record, rest = __rest(props, ["classes", "linkType", "resource", "id", "children", "record"]);
    var createPath = (0, ra_core_1.useCreatePath)();
    var type = typeof linkType === 'function' ? linkType(record, id) : linkType;
    return type === false ? (React.createElement(material_1.ListItemText
    // @ts-ignore
    , __assign({ 
        // @ts-ignore
        component: "div" }, rest), children)) : (
    // @ts-ignore
    React.createElement(material_1.ListItemButton, __assign({ component: react_router_dom_1.Link, to: createPath({ resource: resource, id: id, type: type }) }, rest), children));
};
var PREFIX = 'RaSimpleList';
exports.SimpleListClasses = {
    tertiary: "".concat(PREFIX, "-tertiary"),
};
var Root = (0, styles_1.styled)(material_1.List, {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})((_a = {},
    _a["& .".concat(exports.SimpleListClasses.tertiary)] = { float: 'right', opacity: 0.541176 },
    _a));
var DefaultEmpty = React.createElement(ListNoResults_1.ListNoResults, null);
//# sourceMappingURL=SimpleList.js.map