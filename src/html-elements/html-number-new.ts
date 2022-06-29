import { colours } from '../_styleguide/_colours';
import {thousands, convertToCurrency } from "../d3-services/_helpers";
import { GraphData } from '../types/data';

export class HtmlNumberNew {

    constructor(
        private ctrlr
    ){}

    draw() {

        let miniContainer = document.createElement('div');
        miniContainer.style.display ='flex';
        miniContainer.style.flexDirection = 'column';
        miniContainer.style.alignItems = 'flex-end';
        miniContainer.style.margin = '0 auto 1.5rem auto';

        let number = document.createElement('span');
        number.classList.add('total');
        number.style.fontSize = '2rem';
        number.style.lineHeight = "1";
        number.style.color = colours[this.ctrlr.graphObject.mapping[0][0].colour][0];
        number.style.fontFamily = "Replica";
        number.style.margin = '2.3rem auto 0rem auto';

        miniContainer.appendChild(number);
        this.ctrlr.element.appendChild(miniContainer)
    }


    redraw(data: GraphData) {


        let value =  Math.round(data.latest[this.ctrlr.graphObject.mapping[0][1].column]);
        let lastWeek = Math.round(data.latest[this.ctrlr.graphObject.mapping[0][0].column]);

        if (this.ctrlr.graphObject.config.extra.segmentIndicator) {

            this.ctrlr.element.querySelector('.total').innerText = (this.ctrlr.graphObject.config.qualifier && this.ctrlr.graphObject.config.qualifier !== undefined) ? value + this.ctrlr.graphObject.config.qualifier : value;

        } else if (this.ctrlr.graphObject.config.extra.currency) {

            this.ctrlr.element.querySelector('.total').innerText = convertToCurrency(value);

        } else {

            this.ctrlr.element.querySelector('.total').innerText = (value > 9999) ? thousands(value) : value;
            // this.element.querySelector('.new').innerText = 'vorige week: ' + lastWeek;
        }

    }
}
