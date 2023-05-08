"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTheme = void 0;
var ra_core_1 = require("ra-core");
var material_1 = require("@mui/material");
var useTheme = function (themeOverride) {
    var themeMUI = (0, material_1.useTheme)();
    var _a = (0, ra_core_1.useStore)('theme', themeOverride), theme = _a[0], setter = _a[1];
    return [theme || themeMUI, setter];
};
exports.useTheme = useTheme;
//# sourceMappingURL=useTheme.js.map