"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var merge_1 = __importDefault(require("lodash/merge"));
function getFormInitialValues(defaultValues, record) {
    var finalInitialValues = (0, merge_1.default)({}, getValues(defaultValues, record), record);
    return finalInitialValues;
}
exports.default = getFormInitialValues;
function getValues(values, record) {
    if (typeof values === 'object') {
        return values;
    }
    if (typeof values === 'function') {
        return values(record);
    }
    return {};
}
//# sourceMappingURL=getFormInitialValues.js.map