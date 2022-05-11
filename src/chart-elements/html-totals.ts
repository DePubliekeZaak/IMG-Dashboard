import { colours } from '../_styleguide/_colours';
import {thousands} from "../helpers/_helpers";

export class HtmlTotals {

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

        let total = document.createElement('span');
        total.classList.add('label');
        total.style.display = 'block';
        total.style.color = 'black';
        total.style.fontFamily = 'NotoSans Regular';
        total.style.fontWeight = 'normal';
        total.style.fontSize = '0.8rem';
        total.style.lineHeight = "1";
        total.innerText = 'totaal:';
        total.style.margin = '0 auto .75rem auto';

        // number.innerText = data[0][this.property];
        miniContainer.appendChild(total);

        let div = document.createElement('div');
        div.classList.add('totals_circle');
        div.style.backgroundColor =  colours[this.dataMapping[0].colour][0];
        div.style.borderRadius = '5px';
        div.style.display =  'flex';
        div.style.position = 'relative';
        div.style.flexDirection = 'column';
        div.style.justifyContent = 'center';
        div.style.alignItems = 'center';
        div.style.width = '10rem';
        div.style.height = '3.75rem';
        div.style.marginBottom = '1.5rem';

        let number = document.createElement('span');
        number.classList.add('total');
        number.style.fontSize = '2.5rem';
        number.style.lineHeight = "1";
        number.style.color = 'white';
        number.style.fontFamily = "Replica";

        // number.innerText = data[0][this.property];
        div.appendChild(number);

        miniContainer.appendChild(div);

        this.element.insertBefore(miniContainer,this.element.childNodes[0])
    }


    redraw(data,parameter) {

        let value =  Math.round(data[0][parameter]);


        if (this.config.extra.segmentIndicator) {


            this.element.querySelector('.total').innerText = (this.config.qualifier && this.config.qualifier !== undefined) ? value + this.config.qualifier : value;

        } else {

            this.element.querySelector('.total').innerText = (value > 9999) ? thousands(value) : value;
        }

        // if(value > 9999) {
        //
        //     this.element.querySelector('.total').style.fontSize = '2rem'
        // }

        // let span = document.createElement('span');
        // span.innerText = Math.round(100 * (data[0][this.property] - gem) / gem) + '%';

        // let SVGspan = document.createElement('span');
        // SVGspan.innerHTML = svgUp;

        //  let isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

        // let diff = this.element.querySelector('.diff');
        //
        // if ((data[0][this.property] - gem) === 0) {
        //
        //     this.element.querySelector('.diff').innerHTML = "--";
        //
        // } else if ((data[0][this.property] - gem) < 0) {
        //
        //     diff.appendChild(span);
        //     if(!isIE11) { diff.appendChild(SVGspan); }
        //     diff.classList.add('down');
        //
        // } else if ((data[0][this.property] - gem) > 0) {
        //
        //     diff.appendChild(span);
        //     if(!isIE11) { diff.appendChild(SVGspan); }
        //
        //   //  this.element.querySelector('.diff').innerHTML = Math.round(100 * (data[0][this.property] - gem) / gem) + '%' + svgUp;
        //     diff.classList.remove('down');
        // }
    }
}
