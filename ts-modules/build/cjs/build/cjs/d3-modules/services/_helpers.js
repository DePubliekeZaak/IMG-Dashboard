"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flattenColumn = exports.getMappingKey = exports.getParameter = exports.getFirstMapping = exports.slugify = exports.displayDate = exports.shortenCurrency = exports.convertToCurrency = exports.thousands = void 0;
var trimColumns = function (json, neededColumns) {
    json.forEach((week, i) => {
        Object.keys(week).forEach((key) => {
            if (neededColumns.indexOf(key) < 0) {
                delete week[key];
            }
        });
    });
    return json;
};
// var trimColumnsAndOrder =  function(json,neededColumns) {
//     let newArray = [];
//     let newObject;
//     json.forEach( (obj,i) => {
//         newObject = {};
//         neededColumns.forEach( (nc) => {
//             newObject[nc] = obj[nc];
//         });
//         newArray.push(newObject)
//     });
//     return newArray;
// }
var hasValue = function (array, value) {
    return array.filter((i) => {
        return i[value] !== null;
    });
};
function thousands(number) {
    return number.toLocaleString('nl-NL');
}
exports.thousands = thousands;
function convertToCurrency(number) {
    number = Math.ceil(number);
    return number.toLocaleString('nl-NL', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0 });
}
exports.convertToCurrency = convertToCurrency;
function shortenCurrency(string) {
    if (string.length < 7) {
        return string;
    }
    else if (string.length < 11) {
        return string.slice(0, string.length - 4) + 'K';
    }
    else {
        return string.slice(0, string.length - 6) + 'M';
    }
}
exports.shortenCurrency = shortenCurrency;
function displayDate(date) {
    date = new Date(date);
    return date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
}
exports.displayDate = displayDate;
function slugify(str) {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();
    // remove accents, swap ñ for n, etc
    var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to = "aaaaeeeeiiiioooouuuunc------";
    for (var i = 0, l = from.length; i < l; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }
    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes
    return str;
}
exports.slugify = slugify;
function getFirstMapping(o) {
    let m = o.mapping[0];
    while (true) {
        if (!m.column) {
            m = m[0];
        }
        else {
            return {
                column: m.column || "",
                label: m.label,
                colour: m.colour,
                units: m.units,
                format: m.format
            };
        }
    }
}
exports.getFirstMapping = getFirstMapping;
function getParameter(o, i) {
    // if(o && o != true) {
    let m = o.parameters[i];
    while (true) {
        if (!m.column) {
            m = m[0];
        }
        else {
            return {
                column: m.column || "",
                label: m.label,
                colour: m.colour,
                units: m.units,
                format: m.format
            };
        }
    }
    // }
}
exports.getParameter = getParameter;
function getMappingKey(m, key) {
    return m[key].toString();
}
exports.getMappingKey = getMappingKey;
function flattenColumn(column) {
    return Array.isArray(column) ? column[0] : column;
}
exports.flattenColumn = flattenColumn;
