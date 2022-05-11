import { colours } from '../_styleguide/_colours';
import {thousands} from "../helpers/_helpers";

export class HtmlAverage {

    constructor(
        private config,
        private dataMapping,
        private element,
        private label
    ){}

    draw() {

        let miniContainer = document.createElement('div');
        miniContainer.style.display ='flex';
        miniContainer.style.flexDirection = 'column';
        // miniContainer.style.justifyContent = 'center';
        miniContainer.style.alignItems = 'center';

        let div = document.createElement('div');
        div.classList.add('number_circle');
        div.style.border =  '5px solid ' + colours[this.dataMapping[0].colour][0];
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
        number.style.color = colours[this.dataMapping[0].colour][0];
        number.style.fontFamily = "Replica";
        number.style.letterSpacing = '-4px';

        // number.innerText = data[0][this.property];
        div.appendChild(number);

        miniContainer.appendChild(div);

        this.element.insertBefore(miniContainer,this.element.childNodes[0])
    }


    redraw(data,parameter) {

        let value =  Math.round(100 * data[0][parameter]) / 100;

        this.element.querySelector('.total').innerText = (value > 9999) ? thousands(value) : value;

    }
}
