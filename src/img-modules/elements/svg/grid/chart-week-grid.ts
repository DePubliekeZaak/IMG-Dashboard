import { colours } from '@local/styleguide';
import { getWeek, getMonth } from '../../../../utils/date-object.utils';
import { DataPart } from '@local/d3_types';
import { ChartGrid } from './chart-grid';

export class ChartGridWeek extends ChartGrid {


    constructor(
        ctrlr,
    ) {
        super(ctrlr);
    }

    redraw(data,colour) {

        let self = this;

        super.redraw(data,colour);
            
        this.ctrlr.svg.gridNumbers
                .text( (d, i) => {

                    let date = new Date(d[self.ctrlr.parameters.x]);
                    // we rapporteren over de month ervoor
                    date.setDate(date.getDate() - 7);

                    if (i === data.length - 1) {

                        return '';

                    } else {

                        return getWeek(date)
                    }
                });

    }
}