"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useIsMounted = exports.useTimeout = exports.useDeepCompareEffect = exports.usePrevious = exports.useSafeSetState = void 0;
var react_1 = require("react");
var isEqual_1 = __importDefault(require("lodash/isEqual"));
// thanks Kent C Dodds for the following helpers
function useSafeSetState(initialState) {
    var _a = (0, react_1.useState)(initialState), state = _a[0], setState = _a[1];
    var mountedRef = (0, react_1.useRef)(false);
    (0, react_1.useEffect)(function () {
        mountedRef.current = true;
        return function () {
            mountedRef.current = false;
        };
    }, []);
    var safeSetState = (0, react_1.useCallback)(function (args) {
        if (mountedRef.current) {
            return setState(args);
        }
    }, [mountedRef, setState]);
    return [state, safeSetState];
}
exports.useSafeSetState = useSafeSetState;
function usePrevious(value) {
    var ref = (0, react_1.useRef)();
    (0, react_1.useEffect)(function () {
        ref.current = value;
    });
    return ref.current;
}
exports.usePrevious = usePrevious;
function useDeepCompareEffect(callback, inputs) {
    var cleanupRef = (0, react_1.useRef)();
    (0, react_1.useEffect)(function () {
        if (!(0, isEqual_1.default)(previousInputs, inputs)) {
            cleanupRef.current = callback();
        }
        return cleanupRef.current;
    });
    var previousInputs = usePrevious(inputs);
}
exports.useDeepCompareEffect = useDeepCompareEffect;
/**
 * A hook that returns true once a delay has expired.
 * @param ms The delay in milliseconds
 * @param key A key that can be used to reset the timer
 * @returns true if the delay has expired, false otherwise
 */
function useTimeout(ms, key) {
    if (ms === void 0) { ms = 0; }
    if (key === void 0) { key = ''; }
    var _a = useSafeSetState(false), ready = _a[0], setReady = _a[1];
    (0, react_1.useEffect)(function () {
        setReady(false);
        var timer = setTimeout(function () {
            setReady(true);
        }, ms);
        return function () {
            clearTimeout(timer);
        };
    }, [key, ms, setReady]);
    return ready;
}
exports.useTimeout = useTimeout;
function useIsMounted() {
    var isMounted = (0, react_1.useRef)(true);
    (0, react_1.useEffect)(function () {
        isMounted.current = true;
        return function () {
            isMounted.current = false;
        };
    }, []);
    return isMounted;
}
exports.useIsMounted = useIsMounted;
//# sourceMappingURL=hooks.js.map