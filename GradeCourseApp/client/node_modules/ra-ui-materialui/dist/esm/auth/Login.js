var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from 'react';
import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from 'react-router-dom';
import { useCheckAuth } from 'ra-core';
import { LoginForm as DefaultLoginForm } from './LoginForm';
/**
 * A standalone login page, to serve as authentication gate to the admin
 *
 * Expects the user to enter a login and a password, which will be checked
 * by the `authProvider.login()` method. Redirects to the root page (/)
 * upon success, otherwise displays an authentication error message.
 *
 * Copy and adapt this component to implement your own login logic
 * (e.g. to authenticate via email or facebook or anything else).
 *
 * @example
 *     import MyLoginPage from './MyLoginPage';
 *     const App = () => (
 *         <Admin loginPage={MyLoginPage} authProvider={authProvider}>
 *             ...
 *        </Admin>
 *     );
 */
export var Login = function (props) {
    var children = props.children, backgroundImage = props.backgroundImage, rest = __rest(props, ["children", "backgroundImage"]);
    var containerRef = useRef();
    var backgroundImageLoaded = false;
    var checkAuth = useCheckAuth();
    var navigate = useNavigate();
    useEffect(function () {
        checkAuth({}, false)
            .then(function () {
            // already authenticated, redirect to the home page
            navigate('/');
        })
            .catch(function () {
            // not authenticated, stay on the login page
        });
    }, [checkAuth, navigate]);
    var updateBackgroundImage = function () {
        if (!backgroundImageLoaded && containerRef.current) {
            containerRef.current.style.backgroundImage = "url(".concat(backgroundImage, ")");
            backgroundImageLoaded = true;
        }
    };
    // Load background image asynchronously to speed up time to interactive
    var lazyLoadBackgroundImage = function () {
        if (backgroundImage) {
            var img = new Image();
            img.onload = updateBackgroundImage;
            img.src = backgroundImage;
        }
    };
    useEffect(function () {
        if (!backgroundImageLoaded) {
            lazyLoadBackgroundImage();
        }
    });
    return (React.createElement(Root, __assign({}, rest, { ref: containerRef }),
        React.createElement(Card, { className: LoginClasses.card },
            React.createElement("div", { className: LoginClasses.avatar },
                React.createElement(Avatar, { className: LoginClasses.icon },
                    React.createElement(LockIcon, null))),
            children)));
};
var PREFIX = 'RaLogin';
export var LoginClasses = {
    card: "".concat(PREFIX, "-card"),
    avatar: "".concat(PREFIX, "-avatar"),
    icon: "".concat(PREFIX, "-icon"),
};
var Root = styled('div', {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            height: '1px',
            alignItems: 'center',
            justifyContent: 'flex-start',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundImage: 'radial-gradient(circle at 50% 14em, #313264 0%, #00023b 60%, #00023b 100%)'
        },
        _b["& .".concat(LoginClasses.card)] = {
            minWidth: 300,
            marginTop: '6em',
        },
        _b["& .".concat(LoginClasses.avatar)] = {
            margin: '1em',
            display: 'flex',
            justifyContent: 'center',
        },
        _b["& .".concat(LoginClasses.icon)] = {
            backgroundColor: theme.palette.secondary[500],
        },
        _b);
});
Login.propTypes = {
    backgroundImage: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
};
Login.defaultProps = {
    children: React.createElement(DefaultLoginForm, null),
};
//# sourceMappingURL=Login.js.map