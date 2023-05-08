"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestTranslationProvider = void 0;
var React = __importStar(require("react"));
var get_1 = __importDefault(require("lodash/get"));
var I18nContextProvider_1 = require("./I18nContextProvider");
var TestTranslationProvider = function (_a) {
    var translate = _a.translate, messages = _a.messages, children = _a.children;
    return (React.createElement(I18nContextProvider_1.I18nContextProvider, { value: {
            translate: messages
                ? function (key, options) {
                    var message = (0, get_1.default)(messages, key);
                    return message
                        ? typeof message === 'function'
                            ? message(options)
                            : message
                        : options._;
                }
                : translate,
            changeLocale: function () { return Promise.resolve(); },
            getLocale: function () { return 'en'; },
        } }, children));
};
exports.TestTranslationProvider = TestTranslationProvider;
//# sourceMappingURL=TestTranslationProvider.js.map