import { colours } from '../_styleguide/_colours';
import {thousands} from "../d3-services/_helpers";
import { GraphData } from '../types/data';

export class HtmlAverage {

    constructor(
        private ctrlr
    ){}

    draw() {

        let miniContainer = document.createElement('div');
        miniContainer.style.display ='flex';
        miniContainer.style.flexDirection = 'column';
        // miniContainer.style.justifyContent = 'center';
        miniContainer.style.alignItems = 'center';

        let div = document.createElement('div');
        div.classList.add('number_circle');
        div.style.border =  '5px solid ' + colours[this.ctrlr.mapping.parameters[0][0].colour][0];
        div.style.borderRadius = '50%';
        div.style.display =  'flex';
        div.style.position = 'relative';
        div.style.flexDirection = 'column';
        div.style.justifyContent = 'center';
        div.style.alignItems = 'center';
        div.style.width = '7.5rem';
        div.style.height = '7.5rem';
        div.style.marginBottom = '2rem';

        let number = document.createElement('div');
        number.classList.add('total');
        number.style.fontSize = '3.5rem';
        number.style.lineHeight = "2";
        number.style.color = colours[this.ctrlr.mapping.parameters[0][0].colour][0];
        number.style.fontFamily = "Replica";
        number.style.letterSpacing = '-4px';

        // number.innerText = data[0][this.property];
        div.appendChild(number);

        miniContainer.appendChild(div);

        this.ctrlr.element.appendChild(miniContainer)
    }


    redraw(data: GraphData) {

        // console.log(data.latest)
        // console.log(this.ctrlr.parameters.y)

        let value =  Math.round(100 * data.latest[this.ctrlr.parameters.y]) / 100;

        this.ctrlr.element.querySelector('.total').innerText = (value > 9999) ? thousands(value) : value;

    }
}
