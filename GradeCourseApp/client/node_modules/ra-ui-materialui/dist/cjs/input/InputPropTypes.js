"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputPropTypes = void 0;
var prop_types_1 = __importDefault(require("prop-types"));
/**
 * Common PropTypes for all react-admin inputs
 */
exports.InputPropTypes = {
    label: prop_types_1.default.oneOfType([
        prop_types_1.default.string,
        prop_types_1.default.bool,
        prop_types_1.default.element,
    ]),
    resource: prop_types_1.default.string,
    source: prop_types_1.default.string,
};
//# sourceMappingURL=InputPropTypes.js.map