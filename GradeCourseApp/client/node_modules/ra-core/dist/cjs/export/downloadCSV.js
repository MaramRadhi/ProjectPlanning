"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (csv, filename) {
    var fakeLink = document.createElement('a');
    fakeLink.style.display = 'none';
    document.body.appendChild(fakeLink);
    var blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
    // @ts-ignore
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        // Manage IE11+ & Edge
        // @ts-ignore
        window.navigator.msSaveOrOpenBlob(blob, "".concat(filename, ".csv"));
    }
    else {
        fakeLink.setAttribute('href', URL.createObjectURL(blob));
        fakeLink.setAttribute('download', "".concat(filename, ".csv"));
        fakeLink.click();
    }
});
//# sourceMappingURL=downloadCSV.js.map