import { useCallback, useEffect, useState } from 'react';
import get from 'lodash/get';
import isEqual from 'lodash/isEqual';
import { useFormState } from 'react-hook-form';
import { useFormGroups } from './useFormGroups';
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
export var useFormGroup = function (name) {
    var _a = useFormState(), dirtyFields = _a.dirtyFields, touchedFields = _a.touchedFields, errors = _a.errors;
    var formGroups = useFormGroups();
    var _b = useState({
        errors: undefined,
        isDirty: false,
        isTouched: false,
        isValid: true,
    }), state = _b[0], setState = _b[1];
    var updateGroupState = useCallback(function () {
        var fields = formGroups.getGroupFields(name);
        var fieldStates = fields
            .map(function (field) {
            return {
                name: field,
                error: get(errors, field, undefined),
                isDirty: get(dirtyFields, field, false) !== false,
                isValid: get(errors, field, undefined) == undefined,
                isTouched: get(touchedFields, field, false) !== false,
            };
        })
            .filter(function (fieldState) { return fieldState != undefined; }); // eslint-disable-line
        var newState = getFormGroupState(fieldStates);
        setState(function (oldState) {
            if (!isEqual(oldState, newState)) {
                return newState;
            }
            return oldState;
        });
    }, [dirtyFields, errors, touchedFields, formGroups, name]);
    useEffect(function () {
        updateGroupState();
    }, 
    // eslint-disable-next-line
    [
        // eslint-disable-next-line
        JSON.stringify({ dirtyFields: dirtyFields, errors: errors, touchedFields: touchedFields }),
        updateGroupState,
    ]);
    useEffect(function () {
        // Whenever the group content changes (input are added or removed)
        // we must update its state
        return formGroups.subscribe(name, function () {
            updateGroupState();
        });
    }, [formGroups, name, updateGroupState]);
    return state;
};
/**
 * Get the state of a form group
 *
 * @param {FieldState[]} fieldStates A map of field states from react-hook-form where the key is the field name.
 * @returns {FormGroupState} The state of the group.
 */
export var getFormGroupState = function (fieldStates) {
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
//# sourceMappingURL=useFormGroup.js.map