import { colours } from '../_styleguide/_colours';
import {convertToCurrency, thousands} from "../d3-services/_helpers";

export class HtmlMulti {

    constructor(
        private ctrlr,
        private element? 
    ){}

    draw() {


        let element = this.element != undefined ? this.element : this.ctrlr.element;

        for (let mapping of this.ctrlr.mapping.parameters[0]) {

            let miniContainer = document.createElement('div');
            miniContainer.style.display ='flex';
            miniContainer.style.flexDirection = 'column';
            miniContainer.style.alignItems = 'center';
            miniContainer.style.width = 'calc(100% - 2rem)';
            miniContainer.style.marginBottom = '1rem';
            miniContainer.style.marginRight = '2rem';


            let div = document.createElement('div');
            div.classList.add('number_circle');
            div.style.display =  'flex';
            div.style.position = 'relative';
            div.style.flexDirection = 'column';
            div.style.justifyContent = 'center';
            div.style.alignItems = 'flex-end';
            div.style.width = '100%';
            div.style.height = (this.ctrlr.config.extra.circleRadius) ? this.ctrlr.config.extra.circleRadius.toString() + 'rem' : 'auto';
          

            let number = document.createElement('span');
            number.classList.add('number');
            number.style.fontSize = '2rem';
            number.style.lineHeight = "1.2";
            number.style.color = 'black';
            number.style.fontFamily = "Replica";
            number.style.borderBottom =  '2px solid ' +  colours[mapping.colour][0];

            div.appendChild(number);

            if(this.ctrlr.firstMapping.units) {

                let units = document.createElement('span');
                units.classList.add('units');
                units.innerText = mapping.units;
                units.style.color = 'black';
                units.style.fontFamily = 'NotoSans Regular';
                units.style.fontSize = '.825rem';
                // units.style.textTransform = 'uppercase'
                units.style.display = 'block';
                units.style.marginTop = '.5rem';
                units.style.textAlign = 'right';
                div.appendChild(units);
            }


            miniContainer.appendChild(div);


            element.appendChild(miniContainer)

        }
    }


    redraw(data,extraParameter) {

        let element = this.element != undefined ? this.element : this.ctrlr.element;
        if(element.tagName === 'SECTION') { element = element.parentNode;}
        let elArray = [].slice.call(element.querySelectorAll('.number'));
        
        
        for (let i = 0; i < elArray.length; i++) {

            if(this.ctrlr.mapping.parameters[0][i].format === "currency") {

                elArray[i].innerText = convertToCurrency(data[0][this.ctrlr.mapping.parameters[0][i]['column']]);
    
            } else {
                // console.log(data);
                // console.log(this.ctrlr.mapping.parameters[0][i]['column']);
                let value =  (this.ctrlr.config.extra.decimal) ? Math.round(data[0][this.ctrlr.mapping.parameters[0][i]['column']] * 10) / 10 : Math.round(data[0][this.ctrlr.mapping.parameters[0][i]['column']]);
                elArray[i].innerText = (value > 9999) ? thousands(value) : value;
            }
        }
        
        

        // if(data[0][parameter] > 9999) {
        //     element.querySelector('.number').style.fontSize = '2rem'
        // }
    }
}
