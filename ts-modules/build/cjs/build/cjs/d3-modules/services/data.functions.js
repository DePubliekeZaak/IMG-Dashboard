"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNeededColumns = void 0;
const _helpers_1 = require("./_helpers");
function getNeededColumns(data, mapping) {
    let m = mapping.parameters;
    let columns = ['_date'];
    for (let n of m) {
        columns = columns.concat(n.map((o) => (0, _helpers_1.flattenColumn)(o.column)));
    }
    return columns;
}
exports.getNeededColumns = getNeededColumns;
