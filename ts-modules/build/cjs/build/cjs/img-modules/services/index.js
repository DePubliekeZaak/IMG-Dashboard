"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataService = exports.slugify = exports.getMonthFromNumber = exports.getWeek = exports.getMonth = exports.filterWeeks = exports.getNeededColumnsForHistoryV2 = exports.munis = void 0;
// export { default as BallenbakSimulation } from './ballenbak.simulation';
var municipalities_1 = require("./municipalities");
Object.defineProperty(exports, "munis", { enumerable: true, get: function () { return municipalities_1.munis; } });
var data_with_history_functions_1 = require("./data-with-history.functions");
//     getNeededColumnsForHistory,
Object.defineProperty(exports, "getNeededColumnsForHistoryV2", { enumerable: true, get: function () { return data_with_history_functions_1.getNeededColumnsForHistoryV2; } });
//     isArrayOfMaps,
//     groupByMonths,
Object.defineProperty(exports, "filterWeeks", { enumerable: true, get: function () { return data_with_history_functions_1.filterWeeks; } });
var date_object_utils_1 = require("./date-object.utils");
Object.defineProperty(exports, "getMonth", { enumerable: true, get: function () { return date_object_utils_1.getMonth; } });
Object.defineProperty(exports, "getWeek", { enumerable: true, get: function () { return date_object_utils_1.getWeek; } });
Object.defineProperty(exports, "getMonthFromNumber", { enumerable: true, get: function () { return date_object_utils_1.getMonthFromNumber; } });
var slugify_utils_1 = require("./slugify.utils");
Object.defineProperty(exports, "slugify", { enumerable: true, get: function () { return slugify_utils_1.slugify; } });
var data_service_1 = require("./data.service");
Object.defineProperty(exports, "DataService", { enumerable: true, get: function () { return data_service_1.DataService; } });
