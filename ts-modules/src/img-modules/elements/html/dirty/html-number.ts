import { colours } from '@local/styleguide';
import {thousands} from "@local/d3-services";

export class HtmlNumber {

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

        // let total = document.createElement('span');
        // total.classList.add('label');
        // total.style.display = 'block';
        // total.style.color = 'black';
        // total.style.fontFamily = 'NotoSans Regular';
        // total.style.fontWeight = 'normal';
        // total.style.fontSize = '0.8rem';
        // total.style.lineHeight = "1";
        // total.innerText = 'totaal:';
        // total.style.margin = '0 auto .75rem auto';

        let number = document.createElement('div');
        number.classList.add('total');
        number.style.fontSize = '3.2rem';
        number.style.lineHeight = "1";
        number.style.color = colours[this.dataMapping[0].colour][0];
        number.style.fontFamily = "Replica";
        number.style.margin = '1.5rem auto .5rem auto';

        // number.innerText = data[0][this.property];
        miniContainer.appendChild(number);


        this.element.insertBefore(miniContainer,this.element.childNodes[0])
    }


    redraw(data,parameter) {

        let value =  Math.round(data[0][parameter]);


        if (this.config.extra.segmentIndicator) {


            this.element.querySelector('.total').innerText = (this.config.qualifier && this.config.qualifier !== undefined) ? value + this.config.qualifier : value;

        } else {

            this.element.querySelector('.total').innerText = (value > 9999) ? thousands(value) : value;
        }

    }
}
