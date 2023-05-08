"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inflection_1 = __importDefault(require("inflection"));
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
exports.default = (function (options) {
    if (!options)
        return [''];
    var label = options.label, prefix = options.prefix, resource = options.resource, resourceFromContext = options.resourceFromContext, source = options.source;
    if (typeof label !== 'undefined')
        return [label, { _: label }];
    if (typeof source === 'undefined')
        return [''];
    var _a = getSourceParts(source), sourceWithoutDigits = _a.sourceWithoutDigits, sourceSuffix = _a.sourceSuffix;
    var defaultLabel = inflection_1.default.transform(sourceSuffix.replace(/\./g, ' '), ['underscore', 'humanize']);
    if (resource) {
        return [
            "resources.".concat(resource, ".fields.").concat(sourceWithoutDigits),
            { _: defaultLabel },
        ];
    }
    if (prefix) {
        return ["".concat(prefix, ".").concat(sourceWithoutDigits), { _: defaultLabel }];
    }
    return [
        "resources.".concat(resourceFromContext, ".fields.").concat(sourceWithoutDigits),
        { _: defaultLabel },
    ];
});
/**
 * Uses the source string to guess a translation message and a default label.
 *
 * @example
 * getSourceParts('pictures') // { sourceWithoutDigits: 'pictures', sourceSuffix: 'pictures' }
 * getSourceParts('pictures.url') // { sourceWithoutDigits: 'pictures.url', sourceSuffix: 'pictures.url' }
 * getSourceParts('pictures.0.url') // { sourceWithoutDigits: 'pictures.url', sourceSuffix: 'url' }
 * getSourceParts('pictures.12.urls.5.protocol') // { sourceWithoutDigits: 'pictures.urls.protocol', sourceSuffix: 'protocol' }
 */
var getSourceParts = function (source) {
    // remove digits, e.g. 'book.authors.2.categories.3.identifier.name' => 'book.authors.categories.identifier.name'
    var sourceWithoutDigits = source.replace(/\.\d+\./g, '.');
    // get final part, e.g. 'book.authors.2.categories.3.identifier.name' => 'identifier.name'
    // we're not using a regexp here to avoid code sacnning alert "Polynomial regular expression used on uncontrolled data"
    var parts = source.split('.');
    var lastPartWithDigits;
    parts.forEach(function (part, index) {
        if (onlyDigits(part)) {
            lastPartWithDigits = index;
        }
    });
    var sourceSuffix = lastPartWithDigits != null
        ? parts.slice(lastPartWithDigits + 1).join('.')
        : source;
    return { sourceWithoutDigits: sourceWithoutDigits, sourceSuffix: sourceSuffix };
};
// 48 and 57 are the char codes for "0" and "9", respectively
var onlyDigits = function (s) {
    for (var i = s.length - 1; i >= 0; i--) {
        var d = s.charCodeAt(i);
        if (d < 48 || d > 57)
            return false;
    }
    return true;
};
//# sourceMappingURL=getFieldLabelTranslationArgs.js.map