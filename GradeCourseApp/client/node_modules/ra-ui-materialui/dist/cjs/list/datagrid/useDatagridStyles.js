"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatagridRoot = exports.DatagridClasses = void 0;
var material_1 = require("@mui/material");
var PREFIX = 'RaDatagrid';
exports.DatagridClasses = {
    root: "".concat(PREFIX, "-root"),
    table: "".concat(PREFIX, "-table"),
    tableWrapper: "".concat(PREFIX, "-tableWrapper"),
    thead: "".concat(PREFIX, "-thead"),
    tbody: "".concat(PREFIX, "-tbody"),
    headerRow: "".concat(PREFIX, "-headerRow"),
    headerCell: "".concat(PREFIX, "-headerCell"),
    checkbox: "".concat(PREFIX, "-checkbox"),
    row: "".concat(PREFIX, "-row"),
    clickableRow: "".concat(PREFIX, "-clickableRow"),
    rowEven: "".concat(PREFIX, "-rowEven"),
    rowOdd: "".concat(PREFIX, "-rowOdd"),
    rowCell: "".concat(PREFIX, "-rowCell"),
    selectable: "".concat(PREFIX, "-selectable"),
    expandHeader: "".concat(PREFIX, "-expandHeader"),
    expandIconCell: "".concat(PREFIX, "-expandIconCell"),
    expandIcon: "".concat(PREFIX, "-expandIcon"),
    expandable: "".concat(PREFIX, "-expandable"),
    expanded: "".concat(PREFIX, "-expanded"),
    expandedPanel: "".concat(PREFIX, "-expandedPanel"),
};
exports.DatagridRoot = (0, material_1.styled)('div', {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["& .".concat(exports.DatagridClasses.table)] = {
            tableLayout: 'auto',
        },
        _b["& .".concat(exports.DatagridClasses.tableWrapper)] = {},
        _b["& .".concat(exports.DatagridClasses.thead)] = {},
        _b["& .".concat(exports.DatagridClasses.tbody)] = {},
        _b["& .".concat(exports.DatagridClasses.headerRow)] = {},
        _b["& .".concat(exports.DatagridClasses.headerCell)] = {
            position: 'sticky',
            top: 0,
            zIndex: 2,
            backgroundColor: theme.palette.background.paper,
            '&:first-of-type': {
                borderTopLeftRadius: theme.shape.borderRadius,
            },
            '&:last-child': {
                borderTopRightRadius: theme.shape.borderRadius,
            },
        },
        _b["& .".concat(exports.DatagridClasses.checkbox)] = {},
        _b["& .".concat(exports.DatagridClasses.row)] = {},
        _b["& .".concat(exports.DatagridClasses.clickableRow)] = {
            cursor: 'pointer',
        },
        _b["& .".concat(exports.DatagridClasses.rowEven)] = {},
        _b["& .".concat(exports.DatagridClasses.rowOdd)] = {},
        _b["& .".concat(exports.DatagridClasses.rowCell)] = {},
        _b["& .".concat(exports.DatagridClasses.expandHeader)] = {
            padding: 0,
            width: theme.spacing(6),
        },
        _b["& .".concat(exports.DatagridClasses.expandIconCell)] = {
            width: theme.spacing(6),
        },
        _b["& .".concat(exports.DatagridClasses.expandIcon)] = {
            padding: theme.spacing(1),
            transform: 'rotate(-90deg)',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        _b["& .".concat(exports.DatagridClasses.expandIcon, ".").concat(exports.DatagridClasses.expanded)] = {
            transform: 'rotate(0deg)',
        },
        _b["& .".concat(exports.DatagridClasses.expandedPanel)] = {},
        _b);
});
//# sourceMappingURL=useDatagridStyles.js.map