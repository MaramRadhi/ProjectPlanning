import * as React from 'react';
import { memo } from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useTranslate } from 'ra-core';
/**
 * @deprecated Empty state should be handled by the component displaying data (Datagrid, SimpleList).
 */
export var PaginationLimit = memo(function () {
    var translate = useTranslate();
    return (React.createElement(CardContent, null,
        React.createElement(Typography, { variant: "body2" }, translate('ra.navigation.no_results'))));
});
//# sourceMappingURL=PaginationLimit.js.map