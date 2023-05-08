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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterClasses = exports.Filter = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var FilterForm_1 = require("./FilterForm");
var FilterButton_1 = require("./FilterButton");
var FilterContext_1 = require("../FilterContext");
/**
 * Filter button/form combo
 *
 * @example
 *
 * const PostFilter = (props) => (
 *     <Filter {...props}>
 *         <TextInput label="Search" source="q" alwaysOn />
 *         <TextInput label="Title" source="title" defaultValue="Hello, World!" />
 *     </Filter>
 * );
 *
 * export const PostList = () => (
 *     <List filters={<PostFilter />}>
 *         ...
 *     </List>
 * );
 *
 */
var Filter = function (props) {
    var children = props.children;
    var renderButton = function () {
        return React.createElement(FilterButton_1.FilterButton, { className: exports.FilterClasses.button });
    };
    var renderForm = function () {
        return React.createElement(FilterForm_1.FilterForm, { className: exports.FilterClasses.form });
    };
    return (React.createElement(FilterContext_1.FilterContext.Provider, { value: react_1.Children.toArray(children) }, props.context === 'button' ? renderButton() : renderForm()));
};
exports.Filter = Filter;
exports.Filter.propTypes = {
    children: prop_types_1.default.node,
    classes: prop_types_1.default.object,
    context: prop_types_1.default.oneOf(['form', 'button']),
};
var PREFIX = 'RaFilter';
exports.FilterClasses = {
    button: "".concat(PREFIX, "-button"),
    form: "".concat(PREFIX, "-form"),
};
//# sourceMappingURL=Filter.js.map