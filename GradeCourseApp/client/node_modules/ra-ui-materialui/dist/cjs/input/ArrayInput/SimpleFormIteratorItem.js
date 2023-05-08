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
exports.SimpleFormIteratorItem = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var material_1 = require("@mui/material");
var clsx_1 = __importDefault(require("clsx"));
var useSimpleFormIteratorStyles_1 = require("./useSimpleFormIteratorStyles");
var useSimpleFormIterator_1 = require("./useSimpleFormIterator");
var SimpleFormIteratorItemContext_1 = require("./SimpleFormIteratorItemContext");
exports.SimpleFormIteratorItem = React.forwardRef(function (props, ref) {
    var children = props.children, disabled = props.disabled, disableReordering = props.disableReordering, disableRemove = props.disableRemove, getItemLabel = props.getItemLabel, index = props.index, _a = props.inline, inline = _a === void 0 ? false : _a, member = props.member, record = props.record, removeButton = props.removeButton, reOrderButtons = props.reOrderButtons, resource = props.resource, source = props.source;
    var _b = (0, useSimpleFormIterator_1.useSimpleFormIterator)(), total = _b.total, reOrder = _b.reOrder, remove = _b.remove;
    // Returns a boolean to indicate whether to disable the remove button for certain fields.
    // If disableRemove is a function, then call the function with the current record to
    // determining if the button should be disabled. Otherwise, use a boolean property that
    // enables or disables the button for all of the fields.
    var disableRemoveField = function (record) {
        if (typeof disableRemove === 'boolean') {
            return disableRemove;
        }
        return disableRemove && disableRemove(record);
    };
    // remove field and call the onClick event of the button passed as removeButton prop
    var handleRemoveButtonClick = function (originalOnClickHandler, index) { return function (event) {
        remove(index);
        if (originalOnClickHandler) {
            originalOnClickHandler(event);
        }
    }; };
    var context = (0, react_1.useMemo)(function () { return ({
        index: index,
        total: total,
        reOrder: function (newIndex) { return reOrder(index, newIndex); },
        remove: function () { return remove(index); },
    }); }, [index, total, reOrder, remove]);
    var label = typeof getItemLabel === 'function'
        ? getItemLabel(index)
        : getItemLabel;
    return (React.createElement(SimpleFormIteratorItemContext_1.SimpleFormIteratorItemContext.Provider, { value: context },
        React.createElement("li", { className: useSimpleFormIteratorStyles_1.SimpleFormIteratorClasses.line, ref: ref },
            label && (React.createElement(material_1.Typography, { variant: "body2", className: useSimpleFormIteratorStyles_1.SimpleFormIteratorClasses.index }, label)),
            React.createElement("section", { className: (0, clsx_1.default)(useSimpleFormIteratorStyles_1.SimpleFormIteratorClasses.form, inline && useSimpleFormIteratorStyles_1.SimpleFormIteratorClasses.inline) }, react_1.Children.map(children, function (input, index2) {
                if (!(0, react_1.isValidElement)(input)) {
                    return null;
                }
                var _a = input.props, source = _a.source, inputProps = __rest(_a, ["source"]);
                return (0, react_1.cloneElement)(input, __assign({ source: source
                        ? "".concat(member, ".").concat(source)
                        : member, index: source ? undefined : index2, resource: resource, disabled: disabled }, inputProps));
            })),
            !disabled && (React.createElement("span", { className: useSimpleFormIteratorStyles_1.SimpleFormIteratorClasses.action },
                !disableReordering &&
                    (0, react_1.cloneElement)(reOrderButtons, {
                        index: index,
                        max: total,
                        reOrder: reOrder,
                        className: (0, clsx_1.default)('button-reorder', "button-reorder-".concat(source, "-").concat(index)),
                    }),
                !disableRemoveField(record) &&
                    (0, react_1.cloneElement)(removeButton, {
                        onClick: handleRemoveButtonClick(removeButton.props.onClick, index),
                        className: (0, clsx_1.default)('button-remove', "button-remove-".concat(source, "-").concat(index)),
                    }))))));
});
//# sourceMappingURL=SimpleFormIteratorItem.js.map