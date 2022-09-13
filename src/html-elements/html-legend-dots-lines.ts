import { colours } from '../_styleguide/_colours';
import {thousands} from "../d3-services/_helpers";
import { Mapping } from '../types/mapping';
import { breakpoints } from '../_styleguide/_breakpoints';

export default class HtmlLegendDotsLines {

    constructor(
        private ctrlr: any
    ) {
        this.draw();
    }

    draw() {

        const mapping = this.ctrlr.mapping ? this.ctrlr.mapping.parameters : this.ctrlr.graphObject.mapping;

        let legend = document.createElement('div');
        legend.classList.add('legend');
        legend.style.display = 'flex';
        legend.style.flexDirection = window.innerWidth < breakpoints.md ? 'column' : 'row';
        legend.style.paddingLeft = window.innerWidth < breakpoints.md ? this.ctrlr.config.padding.left + 'px' : '0';
        legend.style.justifyContent = 'center';
        legend.style.width = '100%';

        mapping[0].forEach( (map: Mapping,i:  number) => {

            let item = this.createDiv();
            item.appendChild(this.createCircle(map));
            item.appendChild(this.createLabel(map));
            legend.appendChild(item);
        });


        if(mapping[1]) {
      
            mapping[1].forEach( (map: Mapping,i:  number) => {

                let item = this.createDiv();
                item.appendChild(this.createLine(map));
                item.appendChild(this.createLabel(map));
                legend.appendChild(item);
            });
        }

        this.ctrlr.element.insertBefore(legend,this.ctrlr.element.querySelector('svg'))
    }

    createDiv() : HTMLDivElement {

        let item = document.createElement('div');
        item.style.display = 'flex';
        item.style.flexDirection = 'row';
        item.style.alignItems = 'center';
        item.style.marginRight = (window.innerWidth > 700) ? '2rem' : '.5rem';

        return item;
    }

    createLine(map: Mapping) : HTMLSpanElement {

      

        let line = document.createElement('span');
        line.style.width = (window.innerWidth > 700) ? '.75rem' : '.5rem';
        line.style.height = '1px';
        line.style.marginRight = (window.innerWidth > 700) ? '.5rem' : '.25rem';
        line.style.display = 'inline-block';
        line.style.borderBottom = '1px dotted black'

        return line;
    }

    createCircle(map: Mapping) : HTMLSpanElement {

        let circle = document.createElement('span');
        circle.style.width = (window.innerWidth > 700) ? '.75rem' : '.5rem';
        circle.style.height = (window.innerWidth > 700) ? '.75rem' : '.5rem';
        circle.style.borderRadius = '50%';
        circle.style.marginRight = (window.innerWidth > 700) ? '.5rem' : '.25rem';
        circle.style.display = 'inline-block';
        circle.style.background = colours[map['colour']][0];
        return circle;   
    }

    createLabel(map: Mapping) : HTMLSpanElement {

        let label = document.createElement('span');
        label.style.fontFamily = "NotoSans Regular";
        label.style.fontSize = (window.innerWidth > 700) ? '.8rem' : '.71em';
        label.innerText = map['label'];
        return label;
    }
}