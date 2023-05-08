import { useStore } from 'ra-core';
import { useTheme as useThemeMUI } from '@mui/material';
export var useTheme = function (themeOverride) {
    var themeMUI = useThemeMUI();
    var _a = useStore('theme', themeOverride), theme = _a[0], setter = _a[1];
    return [theme || themeMUI, setter];
};
//# sourceMappingURL=useTheme.js.map