import * as React from 'react';
import lodashGet from 'lodash/get';
import { I18nContextProvider } from './I18nContextProvider';
export var TestTranslationProvider = function (_a) {
    var translate = _a.translate, messages = _a.messages, children = _a.children;
    return (React.createElement(I18nContextProvider, { value: {
            translate: messages
                ? function (key, options) {
                    var message = lodashGet(messages, key);
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
//# sourceMappingURL=TestTranslationProvider.js.map