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
import { Children, cloneElement, useCallback, useMemo, useRef, useState, } from 'react';
import { styled } from '@mui/material';
import clsx from 'clsx';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import { FormDataConsumer, useRecordContext, useTranslate, } from 'ra-core';
import { useArrayInput } from './useArrayInput';
import { SimpleFormIteratorClasses, SimpleFormIteratorPrefix, } from './useSimpleFormIteratorStyles';
import { SimpleFormIteratorContext } from './SimpleFormIteratorContext';
import { SimpleFormIteratorItem, } from './SimpleFormIteratorItem';
import { AddItemButton as DefaultAddItemButton } from './AddItemButton';
import { RemoveItemButton as DefaultRemoveItemButton } from './RemoveItemButton';
import { ReOrderButtons as DefaultReOrderButtons } from './ReOrderButtons';
import { ClearArrayButton } from './ClearArrayButton';
import { Confirm } from '../../layout';
export var SimpleFormIterator = function (props) {
    var _a = props.addButton, addButton = _a === void 0 ? React.createElement(DefaultAddItemButton, null) : _a, _b = props.removeButton, removeButton = _b === void 0 ? React.createElement(DefaultRemoveItemButton, null) : _b, _c = props.reOrderButtons, reOrderButtons = _c === void 0 ? React.createElement(DefaultReOrderButtons, null) : _c, children = props.children, className = props.className, resource = props.resource, source = props.source, disabled = props.disabled, disableAdd = props.disableAdd, disableClear = props.disableClear, disableRemove = props.disableRemove, disableReordering = props.disableReordering, inline = props.inline, _d = props.getItemLabel, getItemLabel = _d === void 0 ? false : _d, fullWidth = props.fullWidth, sx = props.sx;
    var _e = useState(false), confirmIsOpen = _e[0], setConfirmIsOpen = _e[1];
    var _f = useArrayInput(props), append = _f.append, fields = _f.fields, move = _f.move, remove = _f.remove, replace = _f.replace;
    var translate = useTranslate();
    var record = useRecordContext(props);
    var initialDefaultValue = useRef({});
    var removeField = useCallback(function (index) {
        remove(index);
    }, [remove]);
    if (fields.length > 0) {
        var _g = fields[0], id = _g.id, rest = __rest(_g, ["id"]);
        initialDefaultValue.current = rest;
        for (var k in initialDefaultValue.current)
            initialDefaultValue.current[k] = '';
    }
    var addField = useCallback(function (item) {
        if (item === void 0) { item = undefined; }
        var defaultValue = item;
        if (item == null) {
            defaultValue = initialDefaultValue.current;
            if (Children.count(children) === 1 &&
                React.isValidElement(Children.only(children)) &&
                // @ts-ignore
                !Children.only(children).props.source) {
                // ArrayInput used for an array of scalar values
                // (e.g. tags: ['foo', 'bar'])
                defaultValue = '';
            }
            else {
                // ArrayInput used for an array of objects
                // (e.g. authors: [{ firstName: 'John', lastName: 'Doe' }, { firstName: 'Jane', lastName: 'Doe' }])
                defaultValue =
                    defaultValue || {};
                Children.forEach(children, function (input) {
                    var _a;
                    if (React.isValidElement(input) &&
                        input.type !== FormDataConsumer &&
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
    var handleReorder = useCallback(function (origin, destination) {
        move(origin, destination);
    }, [move]);
    var handleArrayClear = useCallback(function () {
        replace([]);
        setConfirmIsOpen(false);
    }, [replace]);
    var records = get(record, source);
    var context = useMemo(function () { return ({
        total: fields.length,
        add: addField,
        remove: removeField,
        reOrder: handleReorder,
        source: source,
    }); }, [addField, fields.length, handleReorder, removeField, source]);
    return fields ? (React.createElement(SimpleFormIteratorContext.Provider, { value: context },
        React.createElement(Root, { className: clsx(className, fullWidth && 'fullwidth', disabled && 'disabled'), sx: sx },
            React.createElement("ul", { className: SimpleFormIteratorClasses.list }, fields.map(function (member, index) { return (React.createElement(SimpleFormIteratorItem, { key: member.id, disabled: disabled, disableRemove: disableRemove, disableReordering: disableReordering, fields: fields, getItemLabel: getItemLabel, index: index, member: "".concat(source, ".").concat(index), onRemoveField: removeField, onReorder: handleReorder, record: (records && records[index]) || {}, removeButton: removeButton, reOrderButtons: reOrderButtons, resource: resource, source: source, inline: inline }, children)); })),
            !disabled && !(disableAdd && (disableClear || disableRemove)) && (React.createElement("div", { className: SimpleFormIteratorClasses.buttons },
                !disableAdd && (React.createElement("div", { className: SimpleFormIteratorClasses.add }, cloneElement(addButton, {
                    className: clsx('button-add', "button-add-".concat(source)),
                    onClick: handleAddButtonClick(addButton.props.onClick),
                }))),
                fields.length > 0 && !disableClear && !disableRemove && (React.createElement("div", { className: SimpleFormIteratorClasses.clear },
                    React.createElement(Confirm, { isOpen: confirmIsOpen, title: translate('ra.action.clear_array_input'), content: translate('ra.message.clear_array_input'), onConfirm: handleArrayClear, onClose: function () { return setConfirmIsOpen(false); } }),
                    React.createElement(ClearArrayButton, { onClick: function () { return setConfirmIsOpen(true); } })))))))) : null;
};
SimpleFormIterator.defaultProps = {
    disableAdd: false,
    disableRemove: false,
};
SimpleFormIterator.propTypes = {
    addButton: PropTypes.element,
    removeButton: PropTypes.element,
    children: PropTypes.node,
    className: PropTypes.string,
    field: PropTypes.object,
    fields: PropTypes.array,
    fieldState: PropTypes.object,
    formState: PropTypes.object,
    fullWidth: PropTypes.bool,
    inline: PropTypes.bool,
    record: PropTypes.object,
    source: PropTypes.string,
    resource: PropTypes.string,
    translate: PropTypes.func,
    disableAdd: PropTypes.bool,
    disableRemove: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
    TransitionProps: PropTypes.shape({}),
};
var Root = styled('div', {
    name: SimpleFormIteratorPrefix,
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
        _b["& .".concat(SimpleFormIteratorClasses.line)] = (_c = {
                display: 'flex',
                listStyleType: 'none',
                borderBottom: "solid 1px ".concat(theme.palette.divider)
            },
            _c[theme.breakpoints.down('sm')] = { display: 'block' },
            _c),
        _b["& .".concat(SimpleFormIteratorClasses.index)] = (_d = {
                display: 'flex',
                alignItems: 'top',
                marginRight: theme.spacing(1),
                marginTop: theme.spacing(1)
            },
            _d[theme.breakpoints.down('md')] = { display: 'none' },
            _d),
        _b["& .".concat(SimpleFormIteratorClasses.form)] = {
            alignItems: 'flex-start',
            display: 'flex',
            flexDirection: 'column',
        },
        _b["&.fullwidth > ul > li > .".concat(SimpleFormIteratorClasses.form)] = {
            flex: 2,
        },
        _b["& .".concat(SimpleFormIteratorClasses.inline)] = {
            flexDirection: 'row',
            columnGap: '1em',
            flexWrap: 'wrap',
        },
        _b["& .".concat(SimpleFormIteratorClasses.action)] = {
            marginTop: theme.spacing(0.5),
            visibility: 'hidden',
            '@media(hover:none)': {
                visibility: 'visible',
            },
        },
        _b["& .".concat(SimpleFormIteratorClasses.buttons)] = {
            display: 'flex',
        },
        _b["& .".concat(SimpleFormIteratorClasses.add)] = {
            borderBottom: 'none',
        },
        _b["& .".concat(SimpleFormIteratorClasses.clear)] = {
            borderBottom: 'none',
        },
        _b["& .".concat(SimpleFormIteratorClasses.line, ":hover > .").concat(SimpleFormIteratorClasses.action)] = {
            visibility: 'visible',
        },
        _b);
});
//# sourceMappingURL=SimpleFormIterator.js.map