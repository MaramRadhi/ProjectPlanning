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
exports.SingleFieldListClasses = exports.SingleFieldList = void 0;
var React = __importStar(require("react"));
var material_1 = require("@mui/material");
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var ra_core_1 = require("ra-core");
var Link_1 = require("../Link");
/**
 * Iterator component to be used to display a list of entities, using a single field
 *
 * @example Display all the books by the current author
 * <ReferenceManyField reference="books" target="author_id">
 *     <SingleFieldList>
 *         <ChipField source="title" />
 *     </SingleFieldList>
 * </ReferenceManyField>
 *
 * By default, it includes a link to the <Edit> page of the related record
 * (`/books/:id` in the previous example).
 *
 * Set the linkType prop to "show" to link to the <Show> page instead.
 *
 * @example
 * <ReferenceManyField reference="books" target="author_id" linkType="show">
 *     <SingleFieldList>
 *         <ChipField source="title" />
 *     </SingleFieldList>
 * </ReferenceManyField>
 *
 * You can also prevent `<SingleFieldList>` from adding link to children by setting
 * `linkType` to false.
 *
 * @example
 * <ReferenceManyField reference="books" target="author_id" linkType={false}>
 *     <SingleFieldList>
 *         <ChipField source="title" />
 *     </SingleFieldList>
 * </ReferenceManyField>
 */
var SingleFieldList = function (props) {
    var className = props.className, children = props.children, _a = props.linkType, linkType = _a === void 0 ? 'edit' : _a, _b = props.component, Component = _b === void 0 ? Root : _b, rest = __rest(props, ["className", "children", "linkType", "component"]);
    var _c = (0, ra_core_1.useListContext)(props), data = _c.data, isLoading = _c.isLoading;
    var resource = (0, ra_core_1.useResourceContext)(props);
    var createPath = (0, ra_core_1.useCreatePath)();
    if (isLoading === true) {
        return React.createElement(material_1.LinearProgress, null);
    }
    return (React.createElement(Component, __assign({ className: className }, (0, ra_core_1.sanitizeListRestProps)(rest)), data.map(function (record, rowIndex) {
        var _a, _b;
        var resourceLinkPath = !linkType
            ? false
            : createPath({
                resource: resource,
                type: linkType,
                id: record.id,
            });
        if (resourceLinkPath) {
            return (React.createElement(ra_core_1.RecordContextProvider, { value: record, key: (_a = record.id) !== null && _a !== void 0 ? _a : "row".concat(rowIndex) },
                React.createElement(Link_1.Link, { className: exports.SingleFieldListClasses.link, to: resourceLinkPath, onClick: stopPropagation }, (0, react_1.cloneElement)(react_1.Children.only(children), {
                    record: record,
                    resource: resource,
                    // Workaround to force ChipField to be clickable
                    onClick: handleClick,
                }))));
        }
        return (React.createElement(ra_core_1.RecordContextProvider, { value: record, key: (_b = record.id) !== null && _b !== void 0 ? _b : "row".concat(rowIndex) }, children));
    })));
};
exports.SingleFieldList = SingleFieldList;
exports.SingleFieldList.propTypes = {
    children: prop_types_1.default.element.isRequired,
    classes: prop_types_1.default.object,
    className: prop_types_1.default.string,
    component: ra_core_1.ComponentPropType,
    data: prop_types_1.default.any,
    ids: prop_types_1.default.array,
    // @ts-ignore
    linkType: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.bool]),
    resource: prop_types_1.default.string,
    sx: prop_types_1.default.oneOfType([
        prop_types_1.default.arrayOf(prop_types_1.default.oneOfType([
            prop_types_1.default.func,
            prop_types_1.default.object,
            prop_types_1.default.bool,
        ])),
        prop_types_1.default.func,
        prop_types_1.default.object,
    ]),
};
var PREFIX = 'RaSingleFieldList';
exports.SingleFieldListClasses = {
    link: "".concat(PREFIX, "-link"),
};
var Root = (0, material_1.styled)('div', {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {
            display: 'flex',
            flexWrap: 'wrap',
            marginTop: theme.spacing(-1),
            marginBottom: theme.spacing(-1)
        },
        _b["& .".concat(exports.SingleFieldListClasses.link)] = {
            textDecoration: 'none',
        },
        _b);
});
// useful to prevent click bubbling in a datagrid with rowClick
var stopPropagation = function (e) { return e.stopPropagation(); };
// Our handleClick does nothing as we wrap the children inside a Link but it is
// required by ChipField, which uses a Chip from MUI.
// The MUI Chip requires an onClick handler to behave like a clickable element.
var handleClick = function () { };
//# sourceMappingURL=SingleFieldList.js.map