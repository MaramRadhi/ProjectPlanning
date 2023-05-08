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
exports.ReferenceFieldClasses = exports.ReferenceFieldView = exports.NonEmptyReferenceField = exports.ReferenceField = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var get_1 = __importDefault(require("lodash/get"));
var material_1 = require("@mui/material");
var styles_1 = require("@mui/material/styles");
var Error_1 = __importDefault(require("@mui/icons-material/Error"));
var ra_core_1 = require("ra-core");
var layout_1 = require("../layout");
var Link_1 = require("../Link");
var types_1 = require("./types");
/**
 * Fetch reference record, and render its representation, or delegate rendering to child component.
 *
 * The reference prop should be the name of one of the <Resource> components
 * added as <Admin> child.
 *
 * @example // using recordRepresentation
 * <ReferenceField label="User" source="userId" reference="users" />
 *
 * @example // using a Field component to represent the record
 * <ReferenceField label="User" source="userId" reference="users">
 *     <TextField source="name" />
 * </ReferenceField>
 *
 * @example // By default, includes a link to the <Edit> page of the related record
 * // (`/users/:userId` in the previous example).
 * // Set the `link` prop to "show" to link to the <Show> page instead.
 * <ReferenceField label="User" source="userId" reference="users" link="show" />
 *
 * @example // You can also prevent `<ReferenceField>` from adding link to children
 * // by setting `link` to false.
 * <ReferenceField label="User" source="userId" reference="users" link={false} />
 *
 * @example // Alternatively, you can also pass a custom function to `link`.
 * // It must take reference and record as arguments and return a string
 * <ReferenceField label="User" source="userId" reference="users" link={(record, reference) => "/path/to/${reference}/${record}"} />
 *
 * @default
 * In previous versions of React-Admin, the prop `linkType` was used. It is now deprecated and replaced with `link`. However
 * backward-compatibility is still kept
 */
var ReferenceField = function (props) {
    var source = props.source, emptyText = props.emptyText, rest = __rest(props, ["source", "emptyText"]);
    var record = (0, ra_core_1.useRecordContext)(props);
    var id = (0, get_1.default)(record, source);
    var translate = (0, ra_core_1.useTranslate)();
    return id == null ? (emptyText ? (React.createElement(material_1.Typography, { component: "span", variant: "body2" }, emptyText && translate(emptyText, { _: emptyText }))) : null) : (React.createElement(exports.NonEmptyReferenceField, __assign({}, rest, { emptyText: emptyText, record: record, id: id })));
};
exports.ReferenceField = ReferenceField;
exports.ReferenceField.propTypes = {
    children: prop_types_1.default.node,
    className: prop_types_1.default.string,
    cellClassName: prop_types_1.default.string,
    headerClassName: prop_types_1.default.string,
    label: types_1.fieldPropTypes.label,
    record: prop_types_1.default.any,
    reference: prop_types_1.default.string.isRequired,
    resource: prop_types_1.default.string,
    sortBy: prop_types_1.default.string,
    sortByOrder: types_1.fieldPropTypes.sortByOrder,
    source: prop_types_1.default.string.isRequired,
    translateChoice: prop_types_1.default.oneOfType([prop_types_1.default.func, prop_types_1.default.bool]),
    // @ts-ignore
    link: prop_types_1.default.oneOfType([
        prop_types_1.default.string,
        prop_types_1.default.bool,
        prop_types_1.default.func,
    ]).isRequired,
};
exports.ReferenceField.defaultProps = {
    link: 'edit',
};
/**
 * This intermediate component is made necessary by the useReference hook,
 * which cannot be called conditionally when get(record, source) is empty.
 */
var NonEmptyReferenceField = function (_a) {
    var children = _a.children, id = _a.id, record = _a.record, reference = _a.reference, link = _a.link, props = __rest(_a, ["children", "id", "record", "reference", "link"]);
    var createPath = (0, ra_core_1.useCreatePath)();
    var resourceDefinition = (0, ra_core_1.useResourceDefinition)({ resource: reference });
    var resourceLinkPath = link === false ||
        (link === 'edit' && !resourceDefinition.hasEdit) ||
        (link === 'show' && !resourceDefinition.hasShow)
        ? false
        : createPath({
            resource: reference,
            id: id,
            type: typeof link === 'function'
                ? link(record, reference)
                : link,
        });
    return (React.createElement(ra_core_1.ResourceContextProvider, { value: reference },
        React.createElement(PureReferenceFieldView, __assign({ reference: reference }, props, (0, ra_core_1.useReference)({
            reference: reference,
            id: id,
        }), { resourceLinkPath: resourceLinkPath }), children)));
};
exports.NonEmptyReferenceField = NonEmptyReferenceField;
// useful to prevent click bubbling in a datagrid with rowClick
var stopPropagation = function (e) { return e.stopPropagation(); };
var ReferenceFieldView = function (props) {
    var children = props.children, className = props.className, emptyText = props.emptyText, error = props.error, isLoading = props.isLoading, reference = props.reference, referenceRecord = props.referenceRecord, resourceLinkPath = props.resourceLinkPath, sx = props.sx;
    var getRecordRepresentation = (0, ra_core_1.useGetRecordRepresentation)(reference);
    var translate = (0, ra_core_1.useTranslate)();
    if (error) {
        return (
        /* eslint-disable jsx-a11y/role-supports-aria-props */
        React.createElement(Error_1.default, { "aria-errormessage": error.message ? error.message : error, role: "presentation", color: "error", fontSize: "small" })
        /* eslint-enable */
        );
    }
    if (isLoading) {
        return React.createElement(layout_1.LinearProgress, null);
    }
    if (!referenceRecord) {
        return emptyText ? (React.createElement(React.Fragment, null, emptyText && translate(emptyText, { _: emptyText }))) : null;
    }
    var child = children || (React.createElement(material_1.Typography, { component: "span", variant: "body2" }, getRecordRepresentation(referenceRecord)));
    return resourceLinkPath ? (React.createElement(Root, { className: className, sx: sx },
        React.createElement(ra_core_1.RecordContextProvider, { value: referenceRecord },
            React.createElement(Link_1.Link, { to: resourceLinkPath, className: exports.ReferenceFieldClasses.link, onClick: stopPropagation }, child)))) : (React.createElement(ra_core_1.RecordContextProvider, { value: referenceRecord }, child));
};
exports.ReferenceFieldView = ReferenceFieldView;
exports.ReferenceFieldView.propTypes = {
    children: prop_types_1.default.element,
    className: prop_types_1.default.string,
    isLoading: prop_types_1.default.bool,
    record: prop_types_1.default.any,
    reference: prop_types_1.default.string,
    referenceRecord: prop_types_1.default.any,
    resource: prop_types_1.default.string,
    resourceLinkPath: prop_types_1.default.oneOfType([
        prop_types_1.default.string,
        prop_types_1.default.oneOf([false]),
    ]),
    source: prop_types_1.default.string,
    translateChoice: prop_types_1.default.oneOfType([prop_types_1.default.func, prop_types_1.default.bool]),
};
var PureReferenceFieldView = (0, react_1.memo)(exports.ReferenceFieldView);
var PREFIX = 'RaReferenceField';
exports.ReferenceFieldClasses = {
    link: "".concat(PREFIX, "-link"),
};
var Root = (0, styles_1.styled)('span', {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["& .".concat(exports.ReferenceFieldClasses.link)] = {
            '& > *': {
                color: theme.palette.primary.main,
            },
        },
        _b);
});
//# sourceMappingURL=ReferenceField.js.map