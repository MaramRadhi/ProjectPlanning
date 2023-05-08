import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { useChoices } from 'ra-core';
export var RadioButtonGroupInputItem = function (_a) {
    var choice = _a.choice, optionText = _a.optionText, optionValue = _a.optionValue, source = _a.source, translateChoice = _a.translateChoice;
    var _b = useChoices({
        optionText: optionText,
        optionValue: optionValue,
        translateChoice: translateChoice,
    }), getChoiceText = _b.getChoiceText, getChoiceValue = _b.getChoiceValue;
    var label = getChoiceText(choice);
    var value = getChoiceValue(choice);
    var nodeId = "".concat(source, "_").concat(value);
    return (React.createElement(FormControlLabel, { label: label, htmlFor: nodeId, value: value, control: React.createElement(Radio, { id: nodeId, color: "primary" }) }));
};
export default RadioButtonGroupInputItem;
//# sourceMappingURL=RadioButtonGroupInputItem.js.map