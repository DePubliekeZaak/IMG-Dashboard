"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLongMonthFromNumber = exports.getMonthFromNumber = exports.getMonth = exports.getWeek = void 0;
function getWeek(date) {
    date.setHours(0, 0, 0, 0);
    // Thursday in current week decides the year.
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    // January 4 is always in week 1.
    const week1 = new Date(date.getFullYear(), 0, 4);
    // Adjust to Thursday in week 1 and count number of weeks from date to week1.
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000
        - 3 + (week1.getDay() + 6) % 7) / 7);
}
exports.getWeek = getWeek;
function getMonth(date) {
    return ['jan', 'feb', 'maa', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'][date.getMonth()];
}
exports.getMonth = getMonth;
function getMonthFromNumber(number) {
    return ['jan', 'feb', 'maa', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'][number - 1];
}
exports.getMonthFromNumber = getMonthFromNumber;
function getLongMonthFromNumber(number) {
    return ['Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December'][number - 1];
}
exports.getLongMonthFromNumber = getLongMonthFromNumber;
