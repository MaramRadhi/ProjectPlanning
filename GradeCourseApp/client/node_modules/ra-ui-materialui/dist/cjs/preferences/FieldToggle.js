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
exports.FieldToggle = void 0;
var React = __importStar(require("react"));
var ra_core_1 = require("ra-core");
var material_1 = require("@mui/material");
var DragIndicator_1 = __importDefault(require("@mui/icons-material/DragIndicator"));
var styles_1 = require("@mui/material/styles");
/**
 * UI to enable/disable a field
 */
var FieldToggle = function (props) {
    var selected = props.selected, label = props.label, onToggle = props.onToggle, onMove = props.onMove, source = props.source, index = props.index;
    var resource = (0, ra_core_1.useResourceContext)();
    var dropIndex = React.useRef(null);
    var x = React.useRef(null);
    var y = React.useRef(null);
    var handleDocumentDragOver = React.useCallback(function (event) {
        x.current = event.clientX;
        y.current = event.clientY;
    }, []);
    var handleDragStart = function () {
        document.addEventListener('dragover', handleDocumentDragOver);
    };
    var handleDrag = function (event) {
        // imperative DOM manipulations using the native Drag API
        var selectedItem = event.target;
        selectedItem.classList.add('drag-active');
        var list = selectedItem.parentNode;
        var dropItem = document.elementFromPoint(x.current, y.current) === null
            ? selectedItem
            : document.elementFromPoint(x.current, y.current);
        if (dropItem.classList.contains('dragIcon')) {
            dropItem = dropItem.parentNode;
        }
        if (dropItem === selectedItem) {
            return;
        }
        if (list === dropItem.parentNode) {
            dropIndex.current = dropItem.dataset.index;
            if (dropItem === selectedItem.nextSibling) {
                dropItem = dropItem.nextSibling;
            }
            list.insertBefore(selectedItem, dropItem);
        }
    };
    var handleDragEnd = function (event) {
        var selectedItem = event.target;
        onMove(selectedItem.dataset.index, dropIndex.current);
        selectedItem.classList.remove('drag-active');
        document.removeEventListener('dragover', handleDocumentDragOver);
    };
    var handleDragOver = function (event) {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    };
    return (React.createElement(Root, { key: source, draggable: onMove ? 'true' : undefined, onDrag: onMove ? handleDrag : undefined, onDragStart: onMove ? handleDragStart : undefined, onDragEnd: onMove ? handleDragEnd : undefined, onDragOver: onMove ? handleDragOver : undefined, "data-index": index },
        React.createElement("label", { htmlFor: "switch_".concat(index) },
            React.createElement(material_1.Switch, { checked: selected, onChange: onToggle, name: index, id: "switch_".concat(index), size: "small", sx: { mr: 0.5, ml: -0.5 } }),
            React.createElement(material_1.Typography, { variant: "body2", component: "span" },
                React.createElement(ra_core_1.FieldTitle, { label: label, source: source, resource: resource }))),
        onMove && (React.createElement(DragIndicator_1.default, { className: "dragIcon", color: "disabled", fontSize: "small" }))));
};
exports.FieldToggle = FieldToggle;
var Root = (0, styles_1.styled)('div')(function (_a) {
    var theme = _a.theme;
    return ({
        display: 'flex',
        justifyContent: 'space-between',
        '& svg': {
            cursor: 'move',
        },
        '&.drag-active': {
            background: 'transparent',
            color: 'transparent',
            outline: "1px solid ".concat(theme.palette.action.selected),
            '& .MuiSwitch-root, & svg': {
                visibility: 'hidden',
            },
        },
    });
});
//# sourceMappingURL=FieldToggle.js.map