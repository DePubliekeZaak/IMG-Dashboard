import { breakpoints } from "@local/styleguide";
import {colours} from "@local/styleguide";
import {thousands} from "@local/d3-services";
import { filterLatest, getNeededColumns } from '@local/d3-services';
import { DataPart, GraphData } from '@local/d3_types';
import { GraphControllerV2 } from '@local/d3_graphs';
import { IGraphMapping } from '@local/d3_types';

export default class TickerBol extends GraphControllerV2 {

    htmlCircle;

    constructor(
        public main: any,
        public data : any,
        public element : HTMLElement,
        public mapping: IGraphMapping,
        public segment: string  
    ) {
        super(main,data,element,mapping,segment);
    }

    init() {

        let self = this;

        this.element.style.display = 'flex';
        this.element.style.flexDirection = 'row';
        this.element.style.flexWrap = 'wrap';
        this.element.style.flexDirection = 'column-reverse';
        this.element.style.justifyContent = 'space-between';

        if (window.innerWidth < breakpoints.sm) {

            this.element.style.width = '100%';
            this.element.style.margin = '1.5rem auto';
        //    this.element.style.height = '9.5rem';

        } else if  (window.innerWidth < breakpoints.md){

            this.element.style.flex = '0 0 30%';
            this.element.style.margin = '2rem auto 0 auto';
            this.element.style.height = '100%';

        } else {

            this.element.style.flexWrap = 'nowrap';
            this.element.style.flex = '0 0 25%';
            this.element.style.padding = '1rem 0';
            this.element.style.height = '100%';
        }

        const labelContainer = document.createElement('div');
        labelContainer.style.width = '100%';

        labelContainer.style.textAlign = 'center';
        labelContainer.innerText = this.mapping.parameters[0][0]['label'];
        this.element.appendChild(labelContainer);

        if (window.innerWidth < breakpoints.sm) {

            labelContainer.style.height = '2rem';

        } else if (window.innerWidth < breakpoints.md) {

            labelContainer.style.height = '1.5rem';

        } else {

            labelContainer.style.height = '2.5rem';
        }

        self.update(this.data,this.segment);
    }

    prepareData(data: DataPart[]) : GraphData  {

        let neededColumns = getNeededColumns(data,this.mapping);

        return {
            "history" : null,
            "latest" : filterLatest(data,neededColumns), 
            "slice" : null
        }
    }

    redraw(data: GraphData) {

        let value =  (this.config.extra.decimal) ? data.latest[this.parameters.y ] : Math.round(data[0][this.parameters.y ]);
        let el = this.element.querySelector('.number') as HTMLElement;
        el.innerText = (value > 9999) ? thousands(value) : value;
   }

    draw(data: GraphData) {

        let miniContainer = document.createElement('div');
        miniContainer.style.display ='flex';
        miniContainer.style.flexDirection = 'column';
        miniContainer.style.alignItems = 'center';

        let div = document.createElement('div');
        div.classList.add('number_circle');
        div.style.backgroundColor =  colours[this.mapping.parameters[0][0].colour][1];
        div.style.border = '1px solid ' + colours[this.mapping.parameters[0][0].colour][0];
        div.style.borderRadius = '50%';
        div.style.display =  'flex';
        div.style.position = 'relative';
        div.style.flexDirection = 'column';
        div.style.justifyContent = 'center';
        div.style.alignItems = 'center';
        div.style.width = (this.config.extra.circleRadius) ? this.config.extra.circleRadius.toString() + 'rem' : '7.5rem';
        div.style.height = (this.config.extra.circleRadius) ? this.config.extra.circleRadius.toString() + 'rem' : '7.5rem';

        let number = document.createElement('span');
        number.classList.add('number');
        number.style.fontSize = '2.25rem';
        number.style.lineHeight = "1";
        number.style.color = 'black';
        number.style.fontFamily = "Replica";

        div.appendChild(number);

        miniContainer.appendChild(div);

        this.element.insertBefore(miniContainer,this.element.childNodes[0])

    }

    update(newData,segment) {

        let self = this;

        let data = self.prepareData(newData);
        self.draw(data);
        self.redraw(data);
        window.addEventListener("resize", () => self.redraw(data), false);

    }

}
