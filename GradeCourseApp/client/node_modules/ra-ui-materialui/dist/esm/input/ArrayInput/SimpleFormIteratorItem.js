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
import * as React from 'react';
import { Children, cloneElement, isValidElement, useMemo, } from 'react';
import { Typography } from '@mui/material';
import clsx from 'clsx';
import { SimpleFormIteratorClasses } from './useSimpleFormIteratorStyles';
import { useSimpleFormIterator } from './useSimpleFormIterator';
import { SimpleFormIteratorItemContext, } from './SimpleFormIteratorItemContext';
export var SimpleFormIteratorItem = React.forwardRef(function (props, ref) {
    var children = props.children, disabled = props.disabled, disableReordering = props.disableReordering, disableRemove = props.disableRemove, getItemLabel = props.getItemLabel, index = props.index, _a = props.inline, inline = _a === void 0 ? false : _a, member = props.member, record = props.record, removeButton = props.removeButton, reOrderButtons = props.reOrderButtons, resource = props.resource, source = props.source;
    var _b = useSimpleFormIterator(), total = _b.total, reOrder = _b.reOrder, remove = _b.remove;
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
    var context = useMemo(function () { return ({
        index: index,
        total: total,
        reOrder: function (newIndex) { return reOrder(index, newIndex); },
        remove: function () { return remove(index); },
    }); }, [index, total, reOrder, remove]);
    var label = typeof getItemLabel === 'function'
        ? getItemLabel(index)
        : getItemLabel;
    return (React.createElement(SimpleFormIteratorItemContext.Provider, { value: context },
        React.createElement("li", { className: SimpleFormIteratorClasses.line, ref: ref },
            label && (React.createElement(Typography, { variant: "body2", className: SimpleFormIteratorClasses.index }, label)),
            React.createElement("section", { className: clsx(SimpleFormIteratorClasses.form, inline && SimpleFormIteratorClasses.inline) }, Children.map(children, function (input, index2) {
                if (!isValidElement(input)) {
                    return null;
                }
                var _a = input.props, source = _a.source, inputProps = __rest(_a, ["source"]);
                return cloneElement(input, __assign({ source: source
                        ? "".concat(member, ".").concat(source)
                        : member, index: source ? undefined : index2, resource: resource, disabled: disabled }, inputProps));
            })),
            !disabled && (React.createElement("span", { className: SimpleFormIteratorClasses.action },
                !disableReordering &&
                    cloneElement(reOrderButtons, {
                        index: index,
                        max: total,
                        reOrder: reOrder,
                        className: clsx('button-reorder', "button-reorder-".concat(source, "-").concat(index)),
                    }),
                !disableRemoveField(record) &&
                    cloneElement(removeButton, {
                        onClick: handleRemoveButtonClick(removeButton.props.onClick, index),
                        className: clsx('button-remove', "button-remove-".concat(source, "-").concat(index)),
                    }))))));
});
//# sourceMappingURL=SimpleFormIteratorItem.js.map