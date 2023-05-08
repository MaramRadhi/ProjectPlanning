"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fieldPropTypes = void 0;
var prop_types_1 = __importDefault(require("prop-types"));
exports.fieldPropTypes = {
    sortBy: prop_types_1.default.string,
    sortByOrder: prop_types_1.default.oneOf(['ASC', 'DESC']),
    source: prop_types_1.default.string,
    label: prop_types_1.default.oneOfType([
        prop_types_1.default.string,
        prop_types_1.default.element,
        prop_types_1.default.bool,
    ]),
    sortable: prop_types_1.default.bool,
    className: prop_types_1.default.string,
    cellClassName: prop_types_1.default.string,
    headerClassName: prop_types_1.default.string,
    textAlign: prop_types_1.default.oneOf([
        'inherit',
        'left',
        'center',
        'right',
        'justify',
    ]),
    emptyText: prop_types_1.default.string,
};
//# sourceMappingURL=types.js.map