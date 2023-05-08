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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatagridInput = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var clsx_1 = __importDefault(require("clsx"));
var ra_core_1 = require("ra-core");
var InputHelperText_1 = require("./InputHelperText");
var datagrid_1 = require("../list/datagrid");
var filter_1 = require("../list/filter");
var FilterContext_1 = require("../list/FilterContext");
var pagination_1 = require("../list/pagination");
var defaultPagination = React.createElement(pagination_1.Pagination, null);
/**
 * WIP: This component is not yet ready to be used.
 *
 * An input for selecting items displayed in a datagrid
 *
 * @example
 * const membersFilters = [
 *     <TextInput label="Search" source="q" alwaysOn />,
 * ];
 * const TeamEdit = () => (
 *    <Edit>
 *        <SimpleForm>
 *            <TextInput source="name" />
 *            <ReferenceArrayInput
 *                source="members"
 *                reference="users"
 *                filter={{ is_retired: false }}
 *                perPage={50}
 *                sort={{ field: 'lastName', order: 'ASC' }}
 *            >
 *                <DatagridInput
 *                    filters={membersFilters}
 *                >
 *                    <TextField source="firstName" />
 *                    <TextField source="lastName" />
 *                </DatagridInput>
 *            </ReferenceArrayInput>
 *        </SimpleForm>
 *    </Edit>
 * );
 */
var DatagridInput = function (props) {
    var _a;
    var choices = props.choices, className = props.className, _b = props.pagination, pagination = _b === void 0 ? defaultPagination : _b, filters = props.filters, sourceProp = props.source, resourceProp = props.resource, rest = __rest(props, ["choices", "className", "pagination", "filters", "source", "resource"]);
    var _c = (0, ra_core_1.useChoicesContext)({
        choices: choices,
        resource: resourceProp,
        source: sourceProp,
    }), allChoices = _c.allChoices, availableChoices = _c.availableChoices, selectedChoices = _c.selectedChoices, fetchError = _c.error, source = _c.source, choicesContext = __rest(_c, ["allChoices", "availableChoices", "selectedChoices", "error", "source"]);
    var _d = (0, ra_core_1.useInput)(__assign(__assign(__assign({}, props), choicesContext), { source: source })), field = _d.field, fieldState = _d.fieldState, formState = _d.formState;
    var onSelect = (0, react_1.useCallback)(function (idsToAdd) {
        field.onChange(idsToAdd);
    }, [field]);
    var onToggleItem = (0, react_1.useCallback)(function (id) {
        if (field.value.includes(id)) {
            field.onChange(field.value.filter(function (item) { return item !== id; }));
        }
        else {
            field.onChange(__spreadArray(__spreadArray([], field.value, true), [id], false));
        }
    }, [field]);
    var onUnselectItems = (0, react_1.useCallback)(function () {
        field.onChange([]);
    }, [field]);
    var listContext = React.useMemo(function () { return (__assign(__assign({}, choicesContext), { data: availableChoices, onSelect: onSelect, onToggleItem: onToggleItem, onUnselectItems: onUnselectItems, selectedIds: field.value })); }, [
        availableChoices,
        choicesContext,
        field,
        onSelect,
        onToggleItem,
        onUnselectItems,
    ]);
    return (React.createElement("div", { className: (0, clsx_1.default)('ra-input', "ra-input-".concat(source), className) },
        React.createElement(ra_core_1.ListContextProvider, { value: listContext },
            filters ? (Array.isArray(filters) ? (React.createElement(FilterContext_1.FilterContext.Provider, { value: filters },
                React.createElement(React.Fragment, null,
                    React.createElement(filter_1.FilterForm, null),
                    React.createElement(filter_1.FilterButton, null)))) : (React.createElement(React.Fragment, null,
                (0, react_1.cloneElement)(filters, {
                    context: 'form',
                }),
                (0, react_1.cloneElement)(filters, {
                    context: 'button',
                })))) : null,
            !fieldState.error && !fetchError && (React.createElement(React.Fragment, null,
                React.createElement(datagrid_1.Datagrid, __assign({}, rest)),
                pagination !== false && pagination)),
            React.createElement(InputHelperText_1.InputHelperText, { touched: fieldState.isTouched ||
                    formState.isSubmitted ||
                    fetchError, error: ((_a = fieldState.error) === null || _a === void 0 ? void 0 : _a.message) || (fetchError === null || fetchError === void 0 ? void 0 : fetchError.message) }))));
};
exports.DatagridInput = DatagridInput;
//# sourceMappingURL=DatagridInput.js.map