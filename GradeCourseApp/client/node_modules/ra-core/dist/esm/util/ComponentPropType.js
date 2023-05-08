import { isValidElementType } from 'react-is';
export default (function (props, propName, componentName) {
    if (props[propName] && !isValidElementType(props[propName])) {
        return new Error("Invalid prop '".concat(propName, "' supplied to '").concat(componentName, "': the prop is not a valid React component"));
    }
});
//# sourceMappingURL=ComponentPropType.js.map