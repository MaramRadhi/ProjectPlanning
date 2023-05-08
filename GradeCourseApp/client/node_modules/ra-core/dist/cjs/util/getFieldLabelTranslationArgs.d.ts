interface Args {
    label?: string;
    prefix?: string;
    resource?: string;
    resourceFromContext?: string;
    source?: string;
}
declare type TranslationArguments = [string, any?];
/**
 * Returns an array of arguments to use with the translate function for the label of a field.
 * The label will be the one specified by the label prop or one computed from the resource and source props.
 *
 * Usage:
 *  <span>
 *      {translate(...getFieldLabelTranslationArgs({ label, resource, source }))}
 *  </span>
 *
 * @see useTranslateLabel for a ready-to-use hook
 */
declare const _default: (options?: Args) => TranslationArguments;
export default _default;
//# sourceMappingURL=getFieldLabelTranslationArgs.d.ts.map