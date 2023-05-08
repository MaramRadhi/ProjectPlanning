"use strict";
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
exports.SimpleFormIterator = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var material_1 = require("@mui/material");
var clsx_1 = __importDefault(require("clsx"));
var get_1 = __importDefault(require("lodash/get"));
var prop_types_1 = __importDefault(require("prop-types"));
var ra_core_1 = require("ra-core");
var useArrayInput_1 = require("./useArrayInput");
var useSimpleFormIteratorStyles_1 = require("./useSimpleFormIteratorStyles");
var SimpleFormIteratorContext_1 = require("./SimpleFormIteratorContext");
var SimpleFormIteratorItem_1 = require("./SimpleFormIteratorItem");
var AddItemButton_1 = require("./AddItemButton");
var RemoveItemButton_1 = require("./RemoveItemButton");
var ReOrderButtons_1 = require("./ReOrderButtons");
var ClearArrayButton_1 = require("./ClearArrayButton");
var layout_1 = require("../../layout");
var SimpleFormIterator = function (props) {
    var _a = props.addButton, addButton = _a === void 0 ? React.createElement(AddItemButton_1.AddItemButton, null) : _a, _b = props.removeButton, removeButton = _b === void 0 ? React.createElement(RemoveItemButton_1.RemoveItemButton, null) : _b, _c = props.reOrderButtons, reOrderButtons = _c === void 0 ? React.createElement(ReOrderButtons_1.ReOrderButtons, null) : _c, children = props.children, className = props.className, resource = props.resource, source = props.source, disabled = props.disabled, disableAdd = props.disableAdd, disableClear = props.disableClear, disableRemove = props.disableRemove, disableReordering = props.disableReordering, inline = props.inline, _d = props.getItemLabel, getItemLabel = _d === void 0 ? false : _d, fullWidth = props.fullWidth, sx = props.sx;
    var _e = (0, react_1.useState)(false), confirmIsOpen = _e[0], setConfirmIsOpen = _e[1];
    var _f = (0, useArrayInput_1.useArrayInput)(props), append = _f.append, fields = _f.fields, move = _f.move, remove = _f.remove, replace = _f.replace;
    var translate = (0, ra_core_1.useTranslate)();
    var record = (0, ra_core_1.useRecordContext)(props);
    var initialDefaultValue = (0, react_1.useRef)({});
    var removeField = (0, react_1.useCallback)(function (index) {
        remove(index);
    }, [remove]);
    if (fields.length > 0) {
        var _g = fields[0], id = _g.id, rest = __rest(_g, ["id"]);
        initialDefaultValue.current = rest;
        for (var k in initialDefaultValue.current)
            initialDefaultValue.current[k] = '';
    }
    var addField = (0, react_1.useCallback)(function (item) {
        if (item === void 0) { item = undefined; }
        var defaultValue = item;
        if (item == null) {
            defaultValue = initialDefaultValue.current;
            if (react_1.Children.count(children) === 1 &&
                React.isValidElement(react_1.Children.only(children)) &&
                // @ts-ignore
                !react_1.Children.only(children).props.source) {
                // ArrayInput used for an array of scalar values
                // (e.g. tags: ['foo', 'bar'])
                defaultValue = '';
            }
            else {
                // ArrayInput used for an array of objects
                // (e.g. authors: [{ firstName: 'John', lastName: 'Doe' }, { firstName: 'Jane', lastName: 'Doe' }])
                defaultValue =
                    defaultValue || {};
                react_1.Children.forEach(children, function (input) {
                    var _a;
                    if (React.isValidElement(input) &&
                        input.type !== ra_core_1.FormDataConsumer &&
                        input.props.source) {
                        defaultValue[input.props.source] =
                            (_a = input.props.defaultValue) !== null && _a !== void 0 ? _a : '';
                    }
                });
            }
        }
        append(defaultValue);
    }, [append, children]);
    // add field and call the onClick event of the button passed as addButton prop
    var handleAddButtonClick = function (originalOnClickHandler) { return function (event) {
        addField();
        if (originalOnClickHandler) {
            originalOnClickHandler(event);
        }
    }; };
    var handleReorder = (0, react_1.useCallback)(function (origin, destination) {
        move(origin, destination);
    }, [move]);
    var handleArrayClear = (0, react_1.useCallback)(function () {
        replace([]);
        setConfirmIsOpen(false);
    }, [replace]);
    var records = (0, get_1.default)(record, source);
    var context = (0, react_1.useMemo)(function () { return ({
        total: fields.length,
        add: addField,
        remove: removeField,
        reOrder: handleReorder,
        source: source,
    }); }, [addField, fields.length, handleReorder, removeField, source]);
    return fields ? (React.createElement(SimpleFormIteratorContext_1.SimpleFormIteratorContext.Provider, { value: context },
        React.createElement(Root, { className: (0, clsx_1.default)(className, fullWidth && 'fullwidth', disabled && 'disabled'), sx: sx },
            React.createElement("ul", { className: useSimpleFormIteratorStyles_1.SimpleFormIteratorClasses.list }, fields.map(function (member, index) { return (React.createElement(SimpleFormIteratorItem_1.SimpleFormIteratorItem, { key: member.id, disabled: disabled, disableRemove: disableRemove, disableReordering: disableReordering, fields: fields, getItemLabel: getItemLabel, index: index, member: "".concat(source, ".").concat(index), onRemoveField: removeField, onReorder: handleReorder, record: (records && records[index]) || {}, removeButton: removeButton, reOrderButtons: reOrderButtons, resource: resource, source: source, inline: inline }, children)); })),
            !disabled && !(disableAdd && (disableClear || disableRemove)) && (React.createElement("div", { className: useSimpleFormIteratorStyles_1.SimpleFormIteratorClasses.buttons },
                !disableAdd && (React.createElement("div", { className: useSimpleFormIteratorStyles_1.SimpleFormIteratorClasses.add }, (0, react_1.cloneElement)(addButton, {
                    className: (0, clsx_1.default)('button-add', "button-add-".concat(source)),
                    onClick: handleAddButtonClick(addButton.props.onClick),
                }))),
                fields.length > 0 && !disableClear && !disableRemove && (React.createElement("div", { className: useSimpleFormIteratorStyles_1.SimpleFormIteratorClasses.clear },
                    React.createElement(layout_1.Confirm, { isOpen: confirmIsOpen, title: translate('ra.action.clear_array_input'), content: translate('ra.message.clear_array_input'), onConfirm: handleArrayClear, onClose: function () { return setConfirmIsOpen(false); } }),
                    React.createElement(ClearArrayButton_1.ClearArrayButton, { onClick: function () { return setConfirmIsOpen(true); } })))))))) : null;
};
exports.SimpleFormIterator = SimpleFormIterator;
exports.SimpleFormIterator.defaultProps = {
    disableAdd: false,
    disableRemove: false,
};
exports.SimpleFormIterator.propTypes = {
    addButton: prop_types_1.default.element,
    removeButton: prop_types_1.default.element,
    children: prop_types_1.default.node,
    className: prop_types_1.default.string,
    field: prop_types_1.default.object,
    fields: prop_types_1.default.array,
    fieldState: prop_types_1.default.object,
    formState: prop_types_1.default.object,
    fullWidth: prop_types_1.default.bool,
    inline: prop_types_1.default.bool,
    record: prop_types_1.default.object,
    source: prop_types_1.default.string,
    resource: prop_types_1.default.string,
    translate: prop_types_1.default.func,
    disableAdd: prop_types_1.default.bool,
    disableRemove: prop_types_1.default.oneOfType([prop_types_1.default.func, prop_types_1.default.bool]),
    TransitionProps: prop_types_1.default.shape({}),
};
var Root = (0, material_1.styled)('div', {
    name: useSimpleFormIteratorStyles_1.SimpleFormIteratorPrefix,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var _b, _c, _d;
    var theme = _a.theme;
    return (_b = {
            '& > ul': {
                padding: 0,
                marginTop: 0,
                marginBottom: 0,
            },
            '& > ul > li:last-child': {
                // hide the last separator
                borderBottom: 'none',
            }
        },
        _b["& .".concat(useSimpleFormIteratorStyles_1.SimpleFormIteratorClasses.line)] = (_c = {
                display: 'flex',
                listStyleType: 'none',
                borderBottom: "solid 1px ".concat(theme.palette.divider)
            },
            _c[theme.breakpoints.down('sm')] = { display: 'block' },
            _c),
        _b["& .".concat(useSimpleFormIteratorStyles_1.SimpleFormIteratorClasses.index)] = (_d = {
                display: 'flex',
                alignItems: 'top',
                marginRight: theme.spacing(1),
                marginTop: theme.spacing(1)
            },
            _d[theme.breakpoints.down('md')] = { display: 'none' },
            _d),
        _b["& .".concat(useSimpleFormIteratorStyles_1.SimpleFormIteratorClasses.form)] = {
            alignItems: 'flex-start',
            display: 'flex',
            flexDirection: 'column',
        },
        _b["&.fullwidth > ul > li > .".concat(useSimpleFormIteratorStyles_1.SimpleFormIteratorClasses.form)] = {
            flex: 2,
        },
        _b["& .".concat(useSimpleFormIteratorStyles_1.SimpleFormIteratorClasses.inline)] = {
            flexDirection: 'row',
            columnGap: '1em',
            flexWrap: 'wrap',
        },
        _b["& .".concat(useSimpleFormIteratorStyles_1.SimpleFormIteratorClasses.action)] = {
            marginTop: theme.spacing(0.5),
            visibility: 'hidden',
            '@media(hover:none)': {
                visibility: 'visible',
            },
        },
        _b["& .".concat(useSimpleFormIteratorStyles_1.SimpleFormIteratorClasses.buttons)] = {
            display: 'flex',
        },
        _b["& .".concat(useSimpleFormIteratorStyles_1.SimpleFormIteratorClasses.add)] = {
            borderBottom: 'none',
        },
        _b["& .".concat(useSimpleFormIteratorStyles_1.SimpleFormIteratorClasses.clear)] = {
            borderBottom: 'none',
        },
        _b["& .".concat(useSimpleFormIteratorStyles_1.SimpleFormIteratorClasses.line, ":hover > .").concat(useSimpleFormIteratorStyles_1.SimpleFormIteratorClasses.action)] = {
            visibility: 'visible',
        },
        _b);
});
//# sourceMappingURL=SimpleFormIterator.js.map