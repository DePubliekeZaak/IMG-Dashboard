"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseHistoryForStackedArea = exports.trimLatest = exports.filterWeeksPlusColour = exports.filterWeeks = exports.groupByMonths = exports.isArrayOfMaps = exports.getNeededColumnsForHistoryV2 = exports.getNeededColumnsForHistory = void 0;
const lodash_1 = __importDefault(require("lodash"));
const d3_services_1 = require("@local/d3-services");
function getNeededColumnsForHistory(data, graphObject) {
    let m = graphObject.mapping;
    let columns = ['_date', '_month', '_week', '_year'];
    if (isArrayOfMaps(m)) {
        columns = columns.concat(m.map((c) => c.column));
    }
    m.forEach(m => {
        while (true) {
            if (isArrayOfMaps(m)) {
                columns = columns.concat(m.map((c) => c.column));
                return;
            }
            else if (m[0]) {
                m = m[0];
            }
            else {
                return;
            }
        }
    });
    return columns;
}
exports.getNeededColumnsForHistory = getNeededColumnsForHistory;
function getNeededColumnsForHistoryV2(data, mapping) {
    let m = mapping.parameters;
    let columns = ['_date', '_month', '_week', '_year'];
    for (let n of m) {
        columns = columns.concat(n.map((o) => (0, d3_services_1.flattenColumn)(o.column)));
    }
    return columns;
}
exports.getNeededColumnsForHistoryV2 = getNeededColumnsForHistoryV2;
function isArrayOfMaps(o) {
    return (o[0] && o[0].column != undefined && o[0].label != undefined) ? true : false;
}
exports.isArrayOfMaps = isArrayOfMaps;
function groupByMonths(newData, neededColumns) {
    let array = [];
    const groupedData = lodash_1.default.groupBy(newData, (w) => w._month.toString() + w._year.toString());
    const groupedArray = Object.values(groupedData).sort((a, b) => +new Date(b[0]._date) - +new Date(a[0]._date));
    for (let group of groupedArray) {
        group.sort((a, b) => (a._year.toString() + a._week.toString()) - (b._year.toString() + b._week.toString()));
        if (new Date(group.reverse()[0]._date).getDate() <= 7) {
            let o = {};
            for (let column of neededColumns) {
                if (group[0][column] !== null) {
                    o[column] = group[0][column];
                }
            }
            array.push(o);
        }
    }
    return array;
}
exports.groupByMonths = groupByMonths;
function filterWeeks(data, neededColumns) {
    let array = [];
    let hasEnoughData;
    for (let week of data.slice(0, data.length - 1)) {
        hasEnoughData = true;
        let clearWeek = {};
        for (let column of neededColumns) {
            if (week[column] !== null && week[column] !== undefined) {
                clearWeek[column] = week[column];
            }
            else {
                //  console.log(column);
                hasEnoughData = false;
            }
        }
        if (hasEnoughData) {
            array.push(clearWeek);
        }
        else {
            //  console.log('lacking data');
        }
    }
    return array;
}
exports.filterWeeks = filterWeeks;
function filterWeeksPlusColour(data, neededColumns) {
    let o = {
        colour: this.graphObject.mapping[0].colour
    };
    for (let p of Object.entries(data)) {
        if (neededColumns.indexOf(p[0]) > -1) {
            o[p[0]] = p[1] !== null ? p[1] : 0;
        }
    }
}
exports.filterWeeksPlusColour = filterWeeksPlusColour;
function trimLatest(week, neededColumns) {
    let latestData;
    for (let column of neededColumns) {
        if (week[column] !== null) {
            latestData[column] = week[column];
        }
    }
    return latestData;
}
exports.trimLatest = trimLatest;
function parseHistoryForStackedArea(mapping, rawData) {
    let data = [];
    let m;
    for (let week of rawData) {
        let o = {};
        let legit = true;
        let columns = [].concat(...mapping.parameters[0].map((map) => map.column));
        for (let column of columns) {
            m = mapping.parameters[0].find((map) => map.column === column);
            o[column] = week[column];
            o['_date'] = week['_date'];
            o['gemeente'] = week['gemeente'];
            o['label'] = m.label;
            o['colour'] = m.colour;
            if (o[column] === null) {
                legit = false;
            }
        }
        if (legit) {
            data.push(o);
        }
    }
    data.sort(function (a, b) {
        return new Date(a._date).getTime() - new Date(b._date).getTime();
    });
    return data;
}
exports.parseHistoryForStackedArea = parseHistoryForStackedArea;
