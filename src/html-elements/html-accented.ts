import { colours } from '../img-modules/_styleguide';
import {convertToCurrency, thousands} from "../d3-services/_helpers";
import { breakpoints } from '../img-modules/_styleguide';

export class HtmlAccented {

    constructor(
        private ctrlr,
        private element? 
    ){}

    draw() {


        let element = this.element != undefined ? this.element : this.ctrlr.element;

      //  console.log(this.ctrlr.mapping.parameters);

      let marginTop = '0';

      if (window.innerWidth < breakpoints.sm) {
        marginTop = '1.5rem';
      } else if(window.innerWidth < breakpoints.lg) {
        marginTop = '.5rem';
      }


        let miniContainer = document.createElement('div');
        miniContainer.style.display ='flex';
        miniContainer.style.flexDirection = 'column';
        miniContainer.style.alignItems = 'center';


        let div = document.createElement('div');
        div.classList.add('number_accented');
        div.style.display =  'flex';
        div.style.position = 'relative';
        div.style.flexDirection = 'column';
        div.style.justifyContent = 'center';
        div.style.alignItems = window.innerWidth < breakpoints.lg ? 'center' : 'center';
        div.style.width = 'auto';
      //  div.style.height = (this.ctrlr.config.extra.circleRadius) ? this.ctrlr.config.extra.circleRadius.toString() + 'rem' : '7.5rem';
        div.style.marginBottom = marginTop;
        div.style.marginTop = marginTop;


        let number = document.createElement('span');
        number.classList.add('number');
        number.classList.add('accented');
        number.style.fontSize = '2rem';
        number.style.lineHeight = "1.2";
        number.style.color = 'black';
        number.style.fontFamily = "Replica";
        number.style.borderBottom =  '2px solid ' +  colours[this.ctrlr.firstMapping.colour][0];

        div.appendChild(number);

        if(this.ctrlr.firstMapping.units) {

            let units = document.createElement('span');
            units.classList.add('units');
            units.innerText = this.ctrlr.firstMapping.units;
            units.style.color = 'black';
            units.style.fontFamily = 'NotoSans Regular';
            units.style.fontSize = '.8rem';
            // units.style.textTransform = 'uppercase'
            units.style.display = 'block';
            units.style.marginTop = '.37rem';
            units.style.textAlign =  window.innerWidth < breakpoints.lg ? 'center' : 'right';
            div.appendChild(units);
        }


        miniContainer.appendChild(div);


        element.appendChild(miniContainer)
    }


    redraw(data,extraParameter) {

        let element = this.element != undefined ? this.element : this.ctrlr.element;
        
        if(element.tagName === 'SECTION') { element = element.parentNode;}
        
        if (this.ctrlr.firstMapping.format === "currency") {

            element.querySelector('.number.accented').innerText = convertToCurrency(data[0][this.ctrlr.mapping.parameters[0][0]['column']]);

        } else {
            // console.log(this.ctrlr.config.extra.decimal);
            let value =  (this.ctrlr.config.extra.decimal) ? Math.round(data[0][this.ctrlr.mapping.parameters[0][0]['column']] * 10) / 10 : Math.round(data[0][this.ctrlr.mapping.parameters[0][0]['column']]);
            element.querySelector('.number.accented').innerText = (value > 9999) ? thousands(value) : value;
        }

        // if(data[0][parameter] > 9999) {
        //     element.querySelector('.number').style.fontSize = '2rem'
        // }
    }
}
