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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStatusForArrayInput = exports.getSelectedReferencesStatus = exports.getStatusForInput = void 0;
var referenceDataStatus_1 = require("./referenceDataStatus");
Object.defineProperty(exports, "getStatusForInput", { enumerable: true, get: function () { return referenceDataStatus_1.getStatusForInput; } });
Object.defineProperty(exports, "getSelectedReferencesStatus", { enumerable: true, get: function () { return referenceDataStatus_1.getSelectedReferencesStatus; } });
Object.defineProperty(exports, "getStatusForArrayInput", { enumerable: true, get: function () { return referenceDataStatus_1.getStatusForArrayInput; } });
__exportStar(require("./useReferenceArrayInputController"), exports);
__exportStar(require("./useReferenceInputController"), exports);
//# sourceMappingURL=index.js.map