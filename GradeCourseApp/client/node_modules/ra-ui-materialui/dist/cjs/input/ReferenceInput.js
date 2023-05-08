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
exports.ReferenceInput = void 0;
var react_1 = __importStar(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var ra_core_1 = require("ra-core");
var AutocompleteInput_1 = require("./AutocompleteInput");
/**
 * An Input component for choosing a reference record. Useful for foreign keys.
 *
 * This component fetches the possible values in the reference resource
 * (using `dataProvider.getList()`), then renders an `<AutocompleteInput>`,
 * to which it passes the possible choices via a `ChoicesContext`.
 *
 * You can pass a child select component to customize the way the reference
 * selector is displayed (e.g. using `<SelectInput>` or `<RadioButtonGroupInput>`
 * instead of `<AutocompleteInput>`).
 *
 * @example // default selector: AutocompleteInput
 * export const CommentEdit = (props) => (
 *     <Edit {...props}>
 *         <SimpleForm>
 *             <ReferenceInput label="Post" source="post_id" reference="posts" />
 *         </SimpleForm>
 *     </Edit>
 * );
 *
 * @example // using a SelectInput as selector
 * export const CommentEdit = (props) => (
 *     <Edit {...props}>
 *         <SimpleForm>
 *             <ReferenceInput label="Post" source="post_id" reference="posts">
 *                 <SelectInput optionText="title" />
 *             </ReferenceInput>
 *         </SimpleForm>
 *     </Edit>
 * );
 *
 * By default, restricts the possible values to 25. You can extend this limit
 * by setting the `perPage` prop.
 *
 * @example
 * <ReferenceInput source="post_id" reference="posts" perPage={100}/>
 *
 * By default, orders the possible values by id desc. You can change this order
 * by setting the `sort` prop (an object with `field` and `order` properties).
 *
 * @example
 * <ReferenceInput
 *      source="post_id"
 *      reference="posts"
 *      sort={{ field: 'title', order: 'ASC' }}
 * />
 *
 * Also, you can filter the query used to populate the possible values. Use the
 * `filter` prop for that.
 *
 * @example
 * <ReferenceInput
 *      source="post_id"
 *      reference="posts"
 *      filter={{ is_published: true }}
 * />
 *
 * The enclosed component may filter results. ReferenceInput create a ChoicesContext which provides
 * a `setFilters` function. You can call this function to filter the results.
 */
var ReferenceInput = function (props) {
    var children = props.children, reference = props.reference;
    var controllerProps = (0, ra_core_1.useReferenceInputController)(props);
    if (react_1.Children.count(children) !== 1) {
        throw new Error('<ReferenceInput> only accepts a single child');
    }
    return (react_1.default.createElement(ra_core_1.ResourceContextProvider, { value: reference },
        react_1.default.createElement(ra_core_1.ChoicesContextProvider, { value: controllerProps }, children)));
};
exports.ReferenceInput = ReferenceInput;
exports.ReferenceInput.propTypes = {
    children: prop_types_1.default.element,
    filter: prop_types_1.default.object,
    label: prop_types_1.default.string,
    page: prop_types_1.default.number,
    perPage: prop_types_1.default.number,
    record: prop_types_1.default.object,
    reference: prop_types_1.default.string.isRequired,
    resource: prop_types_1.default.string,
    sort: prop_types_1.default.shape({
        field: prop_types_1.default.string,
        order: prop_types_1.default.oneOf(['ASC', 'DESC']),
    }),
    source: prop_types_1.default.string,
};
exports.ReferenceInput.defaultProps = {
    filter: {},
    page: 1,
    perPage: 25,
    sort: { field: 'id', order: 'DESC' },
    children: react_1.default.createElement(AutocompleteInput_1.AutocompleteInput, null),
};
//# sourceMappingURL=ReferenceInput.js.map