"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_is_1 = require("react-is");
exports.default = (function (props, propName, componentName) {
    if (props[propName] && !(0, react_is_1.isValidElementType)(props[propName])) {
        return new Error("Invalid prop '".concat(propName, "' supplied to '").concat(componentName, "': the prop is not a valid React component"));
    }
});
//# sourceMappingURL=ComponentPropType.js.map