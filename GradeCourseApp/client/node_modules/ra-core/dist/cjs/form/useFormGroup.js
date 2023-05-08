"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFormGroupState = exports.useFormGroup = void 0;
var react_1 = require("react");
var get_1 = __importDefault(require("lodash/get"));
var isEqual_1 = __importDefault(require("lodash/isEqual"));
var react_hook_form_1 = require("react-hook-form");
var useFormGroups_1 = require("./useFormGroups");
/**
 * Retrieve a specific form group data such as its validation status (valid/invalid) or
 * or whether its inputs have been updated (dirty/pristine)
 *
 * @example
 * import { Edit, SimpleForm, TextInput, FormGroupContextProvider, useFormGroup, minLength } from 'react-admin';
 * import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
 * import ExpandMoreIcon from '@mui/icons-material/ExpandMoreIcon';
 *
 * const PostEdit = (props) => (
 *     <Edit {...props}>
 *         <SimpleForm>
 *             <TextInput source="title" />
 *             <FormGroupContextProvider name="options">
 *                 <Accordion>
 *                     <AccordionSummary
 *                         expandIcon={<ExpandMoreIcon />}
 *                         aria-controls="options-content"
 *                         id="options-header"
 *                     >
 *                         <AccordionSectionTitle name="options">Options</AccordionSectionTitle>
 *                     </AccordionSummary>
 *                     <AccordionDetails id="options-content" aria-labelledby="options-header">
 *                         <TextInput source="teaser" validate={minLength(20)} />
 *                     </AccordionDetails>
 *                 </Accordion>
 *             </FormGroupContextProvider>
 *         </SimpleForm>
 *     </Edit>
 * );
 *
 * const AccordionSectionTitle = ({ children, name }) => {
 *     const formGroupState = useFormGroup(name);
 *     return (
 *         <Typography color={!formGroupState.isValid && formGroupState.isDirty ? 'error' : 'inherit'}>
 *             {children}
 *         </Typography>
 *     );
 * }
 *
 * @param {string} name The form group name
 * @returns {FormGroupState} The form group state
 */
var useFormGroup = function (name) {
    var _a = (0, react_hook_form_1.useFormState)(), dirtyFields = _a.dirtyFields, touchedFields = _a.touchedFields, errors = _a.errors;
    var formGroups = (0, useFormGroups_1.useFormGroups)();
    var _b = (0, react_1.useState)({
        errors: undefined,
        isDirty: false,
        isTouched: false,
        isValid: true,
    }), state = _b[0], setState = _b[1];
    var updateGroupState = (0, react_1.useCallback)(function () {
        var fields = formGroups.getGroupFields(name);
        var fieldStates = fields
            .map(function (field) {
            return {
                name: field,
                error: (0, get_1.default)(errors, field, undefined),
                isDirty: (0, get_1.default)(dirtyFields, field, false) !== false,
                isValid: (0, get_1.default)(errors, field, undefined) == undefined,
                isTouched: (0, get_1.default)(touchedFields, field, false) !== false,
            };
        })
            .filter(function (fieldState) { return fieldState != undefined; }); // eslint-disable-line
        var newState = (0, exports.getFormGroupState)(fieldStates);
        setState(function (oldState) {
            if (!(0, isEqual_1.default)(oldState, newState)) {
                return newState;
            }
            return oldState;
        });
    }, [dirtyFields, errors, touchedFields, formGroups, name]);
    (0, react_1.useEffect)(function () {
        updateGroupState();
    }, 
    // eslint-disable-next-line
    [
        // eslint-disable-next-line
        JSON.stringify({ dirtyFields: dirtyFields, errors: errors, touchedFields: touchedFields }),
        updateGroupState,
    ]);
    (0, react_1.useEffect)(function () {
        // Whenever the group content changes (input are added or removed)
        // we must update its state
        return formGroups.subscribe(name, function () {
            updateGroupState();
        });
    }, [formGroups, name, updateGroupState]);
    return state;
};
exports.useFormGroup = useFormGroup;
/**
 * Get the state of a form group
 *
 * @param {FieldState[]} fieldStates A map of field states from react-hook-form where the key is the field name.
 * @returns {FormGroupState} The state of the group.
 */
var getFormGroupState = function (fieldStates) {
    return fieldStates.reduce(function (acc, fieldState) {
        var errors = acc.errors || {};
        if (fieldState.error) {
            errors[fieldState.name] = fieldState.error;
        }
        var newState = {
            isDirty: acc.isDirty || fieldState.isDirty,
            errors: errors,
            isTouched: acc.isTouched || fieldState.isTouched,
            isValid: acc.isValid && fieldState.isValid,
        };
        return newState;
    }, {
        isDirty: false,
        errors: undefined,
        isValid: true,
        isTouched: false,
    });
};
exports.getFormGroupState = getFormGroupState;
//# sourceMappingURL=useFormGroup.js.map