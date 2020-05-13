import { colours } from '../_styleguide/_colours.js';

export class HtmlCircle {

    constructor(
        private config,
        private dataMapping,
        private element,
        private label
    ){}

    draw(data) {

        let miniContainer = document.createElement('div');

        let div = document.createElement('div');
        div.classList.add('number_circle');
        div.style.backgroundColor =  colours[this.dataMapping[0].colour][0];
        div.style.borderRadius = '50%';
        div.style.display =  'flex';
        div.style.flexDirection = 'column';
        div.style.justifyContent = 'center';
        div.style.alignItems = 'center';
        div.style.width = '7.25rem';
        div.style.height = '7.25rem';

        // div.style.marginBottom = '1rem';

        let number = document.createElement('span');
        number.classList.add('number');
        number.style.fontSize = '3rem';
        number.style.color = 'white';
        number.style.fontFamily = 'Replica';

        // number.innerText = data[0][this.property];
        div.appendChild(number);

        if(config.units && config.units !== undefined) {

            let units = document.createElement('span');
            units.classList.add('units');
            units.innerText = config.units;
            units.style.color = 'white';
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

        miniContainer.appendChild(div);

        // return miniContainer;

        this.element.prepend(miniContainer);


    }


    redraw(data,parameter) {

        let value =  Math.round(data[0][parameter]);

        if (config.suspended) {

            this.element.querySelector('.number').innerText = '---';

        } else {

            this.element.querySelector('.number').innerText = (this.config.qualifier && this.config.qualifier !== undefined) ? value + this.config.qualifier : value;
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
