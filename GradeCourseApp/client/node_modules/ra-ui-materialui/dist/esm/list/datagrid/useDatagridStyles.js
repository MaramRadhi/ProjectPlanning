import { styled } from '@mui/material';
var PREFIX = 'RaDatagrid';
export var DatagridClasses = {
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
export var DatagridRoot = styled('div', {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["& .".concat(DatagridClasses.table)] = {
            tableLayout: 'auto',
        },
        _b["& .".concat(DatagridClasses.tableWrapper)] = {},
        _b["& .".concat(DatagridClasses.thead)] = {},
        _b["& .".concat(DatagridClasses.tbody)] = {},
        _b["& .".concat(DatagridClasses.headerRow)] = {},
        _b["& .".concat(DatagridClasses.headerCell)] = {
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
        _b["& .".concat(DatagridClasses.checkbox)] = {},
        _b["& .".concat(DatagridClasses.row)] = {},
        _b["& .".concat(DatagridClasses.clickableRow)] = {
            cursor: 'pointer',
        },
        _b["& .".concat(DatagridClasses.rowEven)] = {},
        _b["& .".concat(DatagridClasses.rowOdd)] = {},
        _b["& .".concat(DatagridClasses.rowCell)] = {},
        _b["& .".concat(DatagridClasses.expandHeader)] = {
            padding: 0,
            width: theme.spacing(6),
        },
        _b["& .".concat(DatagridClasses.expandIconCell)] = {
            width: theme.spacing(6),
        },
        _b["& .".concat(DatagridClasses.expandIcon)] = {
            padding: theme.spacing(1),
            transform: 'rotate(-90deg)',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        _b["& .".concat(DatagridClasses.expandIcon, ".").concat(DatagridClasses.expanded)] = {
            transform: 'rotate(0deg)',
        },
        _b["& .".concat(DatagridClasses.expandedPanel)] = {},
        _b);
});
//# sourceMappingURL=useDatagridStyles.js.map