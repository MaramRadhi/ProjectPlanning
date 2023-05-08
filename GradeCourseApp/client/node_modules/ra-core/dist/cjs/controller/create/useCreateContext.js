"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCreateContext = void 0;
var react_1 = require("react");
var defaults_1 = __importDefault(require("lodash/defaults"));
var CreateContext_1 = require("./CreateContext");
/**
 * Hook to read the create controller props from the CreateContext.
 *
 * Mostly used within a <CreateContext.Provider> (e.g. as a descendent of <Create>).
 *
 * But you can also use it without a <CreateContext.Provider>. In this case, it is up to you
 * to pass all the necessary props.
 *
 * The given props will take precedence over context values.
 *
 * @typedef {Object} CreateControllerProps
 *
 * @returns {CreateControllerResult} create controller props
 *
 * @see useCreateController for how it is filled
 *
 */
var useCreateContext = function (props) {
    var context = (0, react_1.useContext)(
    // Can't find a way to specify the RecordType when CreateContext is declared
    // @ts-ignore
    CreateContext_1.CreateContext);
    // Props take precedence over the context
    return (0, react_1.useMemo)(function () {
        return (0, defaults_1.default)({}, props != null ? extractCreateContextProps(props) : {}, context);
    }, [context, props]);
};
exports.useCreateContext = useCreateContext;
/**
 * Extract only the create controller props
 *
 * @param {Object} props props passed to the useCreateContext hook
 *
 * @returns {CreateControllerResult} create controller props
 */
var extractCreateContextProps = function (_a) {
    var record = _a.record, defaultTitle = _a.defaultTitle, isFetching = _a.isFetching, isLoading = _a.isLoading, redirect = _a.redirect, resource = _a.resource, save = _a.save, saving = _a.saving;
    return ({
        record: record,
        defaultTitle: defaultTitle,
        isFetching: isFetching,
        isLoading: isLoading,
        redirect: redirect,
        resource: resource,
        save: save,
        saving: saving,
    });
};
//# sourceMappingURL=useCreateContext.js.map