"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartGridWeek = void 0;
const img_services_1 = require("@local/img-services");
const chart_grid_1 = require("./dirty/chart-grid");
class ChartGridWeek extends chart_grid_1.ChartGrid {
    constructor(ctrlr) {
        super(ctrlr);
    }
    redraw(data, colour) {
        let self = this;
        super.redraw(data, colour);
        this.ctrlr.svg.gridNumbers
            .text((d, i) => {
            let date = new Date(d[self.ctrlr.parameters.x]);
            // we rapporteren over de month ervoor
            date.setDate(date.getDate() - 7);
            if (i === data.length - 1) {
                return '';
            }
            else {
                return (0, img_services_1.getWeek)(date);
            }
        });
    }
}
exports.ChartGridWeek = ChartGridWeek;
