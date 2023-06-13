import { getWeek } from '@local/img-services';
import { ChartGrid } from './dirty/chart-grid';
export class ChartGridWeek extends ChartGrid {
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
                return getWeek(date);
            }
        });
    }
}
