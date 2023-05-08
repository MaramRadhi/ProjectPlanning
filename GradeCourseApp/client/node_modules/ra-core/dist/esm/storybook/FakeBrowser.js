import * as React from 'react';
import { useEffect, useState } from 'react';
import { createMemoryHistory, createPath, parsePath, } from 'history';
/**
 * This is a storybook decorator that wrap the story inside a fake browser.
 * It features an editable address bar with back and forward buttons.
 *
 * @example Usage in a storybook
 * export default {
 *     title: 'ra-core/Admin/CustomRoutes/Authenticated',
 *     decorators: [FakeBrowserDecorator],
 *     parameters: {
 *         // You can pass the react-router history initial entries like this
 *         initialEntries: ['/authenticated'],
 *     },
 * };
 *
 * const MyStory = (args, context) => (
 *     // Don't forget to pass the history to the Admin component so that
 *     // user changes from the fake browser address bar can impact the application
 *     <Admin history={context.history}>
 *     </Admin>
 * );
 */
export var FakeBrowserDecorator = function (Story, context) {
    var history = createMemoryHistory({
        initialEntries: context.parameters.initialEntries,
    });
    return (React.createElement(Browser, { history: history },
        React.createElement(Story, { history: history })));
};
var Browser = function (_a) {
    var children = _a.children, history = _a.history;
    return (React.createElement(React.Fragment, null,
        React.createElement("style", { dangerouslySetInnerHTML: {
                __html: styles,
            } }),
        React.createElement("div", { className: "browser" },
            React.createElement(BrowserBar, { history: history }),
            React.createElement("div", { className: "browser-container" }, children))));
};
var BrowserBar = function (_a) {
    var history = _a.history;
    var _b = useState(history.location), location = _b[0], setLocation = _b[1];
    useEffect(function () {
        var unsubscribe = history.listen(function (update) {
            setLocation(update.location);
        });
        return unsubscribe;
    }, [history]);
    var handleSubmit = function (event) {
        event.preventDefault();
        var newLocation = parsePath(event.target.elements.location.value.replace('http://localhost:3000', ''));
        history.push(newLocation);
    };
    return (React.createElement("div", { className: "browser-bar" },
        React.createElement("div", { className: "button" },
            React.createElement("button", { "aria-label": "Back", onClick: function () {
                    history.back();
                } },
                React.createElement(BackwardIcon, null))),
        React.createElement("div", { className: "button" },
            React.createElement("button", { "aria-label": "Forward", onClick: function () {
                    history.forward();
                } },
                React.createElement(ForwardIcon, null))),
        React.createElement("div", { className: "button" },
            React.createElement("button", { "aria-label": "Refresh" },
                React.createElement("span", { "aria-hidden": true },
                    React.createElement(RefreshIcon, null)))),
        React.createElement("form", { onSubmit: handleSubmit },
            React.createElement("input", { name: "location", type: "text", key: createPath(location), defaultValue: "http://localhost:3000".concat(createPath(location)) }))));
};
var styles = "\n.browser {\n    color: black;\n    display: flex;\n    flex-direction: column;\n    margin: 10px;\n}\n.browser-bar {\n    padding: 10px 8px 6px;\n    border-top-left-radius: 3px;\n    border-top-right-radius: 3px;\n    border-bottom: 2px solid #ccc;\n    background: #ddd;\n    display: flex;\n    gap: 2px;\n}\n.browser-bar .button button {\n    background: none;\n    border: none;\n}\n.browser-bar .button {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    border-radius: 3px;\n}\n.browser-bar .button:hover {\n    background-color: #aaa;\n}\n.browser-bar svg {\n    height: 16px;\n    width: 16px;\n}\n\n.browser-bar form {\n    background-color: white;\n    color: #bbb;\n    border-radius: 3px;\n    border-width: 1px;\n    border-style: solid;\n    border-color: #d7d3d3;\n    font-size: 10px;\n    flex-grow: 1;\n    display: flex;\n    flex-direction: column;\n}\n.browser-bar input {\n    border: none;\n    border-radius: 3px;\n    padding: 3px 7px 4px;\n}\n\n.browser-container {\n    background-color: #fff;\n    height: 350px;\n    border-left: 1px solid #ccc;\n    border-right: 1px solid #ccc;\n    border-bottom: 1px solid #ccc;\n    border-bottom-left-radius: 3px;\n    border-bottom-right-radius: 3px;\n}\n";
var BackwardIcon = function () { return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }))); };
var ForwardIcon = function () { return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }))); };
var RefreshIcon = function () { return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" }))); };
//# sourceMappingURL=FakeBrowser.js.map