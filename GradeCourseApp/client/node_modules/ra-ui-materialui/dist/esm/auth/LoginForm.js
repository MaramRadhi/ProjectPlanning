import * as React from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { Button, CardContent, CircularProgress } from '@mui/material';
import { Form, required, useTranslate, useLogin, useNotify, useSafeSetState, } from 'ra-core';
import { TextInput } from '../input';
export var LoginForm = function (props) {
    var redirectTo = props.redirectTo, className = props.className;
    var _a = useSafeSetState(false), loading = _a[0], setLoading = _a[1];
    var login = useLogin();
    var translate = useTranslate();
    var notify = useNotify();
    var submit = function (values) {
        setLoading(true);
        login(values, redirectTo)
            .then(function () {
            setLoading(false);
        })
            .catch(function (error) {
            setLoading(false);
            notify(typeof error === 'string'
                ? error
                : typeof error === 'undefined' || !error.message
                    ? 'ra.auth.sign_in_error'
                    : error.message, {
                type: 'error',
                messageArgs: {
                    _: typeof error === 'string'
                        ? error
                        : error && error.message
                            ? error.message
                            : undefined,
                },
            });
        });
    };
    return (React.createElement(StyledForm, { onSubmit: submit, mode: "onChange", noValidate: true, className: className },
        React.createElement(CardContent, { className: LoginFormClasses.content },
            React.createElement(TextInput, { autoFocus: true, source: "username", label: translate('ra.auth.username'), autoComplete: "username", validate: required(), fullWidth: true }),
            React.createElement(TextInput, { source: "password", label: translate('ra.auth.password'), type: "password", autoComplete: "current-password", validate: required(), fullWidth: true }),
            React.createElement(Button, { variant: "contained", type: "submit", color: "primary", disabled: loading, fullWidth: true, className: LoginFormClasses.button }, loading ? (React.createElement(CircularProgress, { className: LoginFormClasses.icon, size: 19, thickness: 3 })) : (translate('ra.auth.sign_in'))))));
};
var PREFIX = 'RaLoginForm';
export var LoginFormClasses = {
    content: "".concat(PREFIX, "-content"),
    button: "".concat(PREFIX, "-button"),
    icon: "".concat(PREFIX, "-icon"),
};
var StyledForm = styled(Form, {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["& .".concat(LoginFormClasses.content)] = {
            width: 300,
        },
        _b["& .".concat(LoginFormClasses.button)] = {
            marginTop: theme.spacing(2),
        },
        _b["& .".concat(LoginFormClasses.icon)] = {
            margin: theme.spacing(0.3),
        },
        _b);
});
LoginForm.propTypes = {
    redirectTo: PropTypes.string,
};
//# sourceMappingURL=LoginForm.js.map