import { colours } from '../_styleguide/_colours';
import {thousands} from "../d3-services/_helpers";

export class HtmlTriangle {

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

        if(this.config.extra.circleLabel) {

            let qualifier = document.createElement('span');
            qualifier.classList.add('label');
            qualifier.style.fontSize = '.825rem';
            qualifier.style.height = '1rem';
            // qualifier.style.position = 'absolute';
            // qualifier.style.top = 'calc(50% - .5rem)';
            // qualifier.style.left = '-130px';
            qualifier.style.color = 'black';
            // qualifier.style.marginTop = '-.75rem';
            qualifier.style.fontFamily = 'NotoSans Regular';
            qualifier.style.fontWeight = 'normal';
            // period.style.textTransform = 'uppercase';
            qualifier.innerText = this.config.extra.circleLabel;
            qualifier.style.margin = '0 auto .25rem auto';
            miniContainer.appendChild(qualifier);
        }

        const tSize = 4;

        let div = document.createElement('div');
        div.classList.add('number_triangle');
       // div.style.backgroundColor =  colours[this.dataMapping[0].colour][0];
        div.style.borderRadius = '5px';
        div.style.width = '0';
        div.style.height = '0';
        div.style.borderLeft =  tSize + 'em solid transparent';
        div.style.borderRight = tSize + 'rem solid transparent';
        div.style.borderTop = tSize + 'rem solid ' + colours[this.dataMapping[0].colour][0];
        div.style.display =  'flex';
        div.style.position = 'relative';
        div.style.flexDirection = 'column';
        div.style.justifyContent = 'flex-start';
        div.style.alignItems = 'center';
        // div.style.marginBottom = '1.5rem';

        // div.style.marginBottom = '1rem';

        let number = document.createElement('span');
        number.classList.add('number');
        number.style.fontSize = '1.25rem';
        number.style.lineHeight = "1";
        number.style.color = 'white';
        number.style.fontFamily = "Replica";
        number.style.marginTop = 'calc(-' + tSize + 'rem + .4rem)'

        // number.innerText = data[0][this.property];
        div.appendChild(number);

        if(this.config.extra.units) {

            let units = document.createElement('span');
            units.classList.add('units');
            units.innerText = this.config.extra.units;
            units.style.color = 'white';
            units.style.fontFamily = 'NotoSans Regular';
            units.style.fontSize = '0.825rem';
            units.style.display = 'block';
            // units.style.marginTop = '1rem';
            div.appendChild(units);
        }



        //
        // let diff = document.createElement('span');
        // diff.classList.add('diff');


        // diff.innerHTML = (((data[0][this.property] - gem) / gem) * 100).toFixed(0) + '%' + svgUp;
        //
        // if ((data[0][this.property] - gem) < 0) {
        //     this.element.querySelector('.diff').classList.add('down');
        // } else {
        //     this.element.querySelector('.diff').classList.remove('down');
        // }
        //
        // div.appendChild(diff);



        //

        if(this.config.extra.firstInLine) {

            let period = document.createElement('span');
            period.classList.add('period');
            period.style.fontSize = '.825rem';
            period.style.height = '1rem';
            period.style.position = 'absolute';
            period.style.top = 'calc(50% - .5rem)';
            period.style.left = '-130px';
            period.style.fontFamily = 'NotoSans Regular';
            // period.style.textTransform = 'uppercase';
            period.innerText = 'deze week:';
            div.appendChild(period);
        }


        miniContainer.appendChild(div);

        // if(this.config.extra.trendlineLabel) {
        //
        //     let label = document.createElement('span');
        //     label.classList.add('label');
        //     label.style.fontSize = '.825rem';
        //     label.style.height = '1rem';
        //     // qualifier.style.position = 'absolute';
        //     // qualifier.style.top = 'calc(50% - .5rem)';
        //     // qualifier.style.left = '-130px';
        //     label.style.color = 'black';
        //     // qualifier.style.marginTop = '-.75rem';
        //     label.style.fontFamily = 'NotoSans Regular';
        //     label.style.fontWeight = 'normal';
        //     // period.style.textTransform = 'uppercase';
        //     label.innerText = this.config.extra.trendlineLabel;
        //     label.style.margin = '1.5rem auto .75rem auto';
        //     miniContainer.appendChild(label);
        // }

        this.element.insertBefore(miniContainer,this.element.childNodes[0])
    }


    redraw(data,parameter) {


        let value =  Math.round(data[0][parameter]);


        if (this.config.extra.segmentIndicator) {

            this.element.querySelector('.number').innerText = (this.config.qualifier && this.config.qualifier !== undefined) ? value + this.config.qualifier : value;

        } else {

            this.element.querySelector('.number').innerText = (value > 9999) ? thousands(value) : value;
        }

        if(value > 9999) {

            this.element.querySelector('.number').style.fontSize = '2rem'
        }

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
