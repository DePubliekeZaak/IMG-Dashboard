import { colours } from '../_styleguide/_colours';
import {thousands} from "../d3-services/_helpers";

export class HtmlCircle {

    constructor(
        private config,
        private dataMapping,
        private element,
        private firstMapping
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
            qualifier.style.fontSize = '.8rem';
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
            qualifier.style.margin = '0 auto .75rem auto';
            miniContainer.appendChild(qualifier);
        }


        let div = document.createElement('div');
        div.classList.add('number_circle');
        div.style.backgroundColor =  colours[this.firstMapping.colour][0];
        div.style.borderRadius = '50%';
        div.style.display =  'flex';
        div.style.position = 'relative';
        div.style.flexDirection = 'column';
        div.style.justifyContent = 'center';
        div.style.alignItems = 'center';
        div.style.width = (this.config.extra.circleRadius) ? this.config.extra.circleRadius.toString() + 'rem' : '7.5rem';
        div.style.height = (this.config.extra.circleRadius) ? this.config.extra.circleRadius.toString() + 'rem' : '7.5rem';
        div.style.marginBottom = '1.5rem';

        // div.style.marginBottom = '1rem';

        let number = document.createElement('span');
        number.classList.add('number');
        number.style.fontSize = '3rem';
        number.style.lineHeight = "1";
        number.style.color = 'white';
        number.style.fontFamily = "Replica";

        // number.innerText = data[0][this.property];
        div.appendChild(number);

        if(this.config.extra.units || this.firstMapping.units) {

            let units = document.createElement('span');
            units.classList.add('units');
            units.innerText = this.config.extra.units || this.firstMapping.units;
            units.style.color = 'white';
            units.style.fontFamily = 'NotoSans Regular';
            units.style.fontSize = '0.8rem';
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
            period.style.fontSize = '.8rem';
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

        if(this.config.extra.trendlineLabel) {

            let label = document.createElement('span');
            label.classList.add('label');
            label.style.fontSize = '.8rem';
            label.style.height = '1rem';
            // qualifier.style.position = 'absolute';
            // qualifier.style.top = 'calc(50% - .5rem)';
            // qualifier.style.left = '-130px';
            label.style.color = 'black';
            // qualifier.style.marginTop = '-.75rem';
            label.style.fontFamily = 'NotoSans Regular';
            label.style.fontWeight = 'normal';
            // period.style.textTransform = 'uppercase';
            label.innerText = this.config.extra.trendlineLabel;
            label.style.margin = '0rem auto .75rem auto';
            miniContainer.appendChild(label);
        }

        if(this.config.extra.noRespondents) {

            let label = document.createElement('span');
            label.classList.add('label');
            label.classList.add('no_respondents');
            label.classList.add(this.config.extra.slug);
            label.style.fontSize = '.8rem';
            label.style.height = '1rem';
            // qualifier.style.position = 'absolute';
            // qualifier.style.top = 'calc(50% - .5rem)';
            // qualifier.style.left = '-130px';
            label.style.color = 'black';
            // qualifier.style.marginTop = '-.75rem';
            label.style.fontFamily = 'NotoSans Regular';
            label.style.fontWeight = 'normal';
            label.style.display = 'flex';
            label.style.flexDirection = 'column';
            label.style.alignItems = 'center';
            // period.style.textTransform = 'uppercase';
            label.innerHTML = '<span></span><span>respondenten</span>';
            label.style.margin = '0rem auto 2.5rem auto';
            miniContainer.appendChild(label);
        }

        //this.element.insertBefore(miniContainer,this.element.childNodes[0])
        this.element.appendChild(miniContainer)
    }


    redraw(data,parameter,extraParameter) {

        let value =  (this.config.extra.decimal) ? Math.round(data[0][parameter] * 10) / 10 : Math.round(data[0][parameter]);

        if (this.config.extra.segmentIndicator) {

            this.element.querySelector('.number').innerText = (this.config.qualifier && this.config.qualifier !== undefined) ? value + this.config.qualifier : value;

        } else {

            this.element.querySelector('.number').innerText = (value > 9999) ? thousands(value) : value;
        }

        if(value > 9999) {

            this.element.querySelector('.number').style.fontSize = '2rem'
        }

        if(this.config.extra.noRespondents) {
            document.querySelector('.label.no_respondents.' + this.config.extra.slug +' span:first-child').innerHTML = data[0][extraParameter];
        }
    }
}
