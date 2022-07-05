import * as d3 from "d3";
import { convertToCurrency, shortenCurrency } from "../../d3-services/_helpers";
import { GraphData } from "../../types/data";
import { colours } from "../../_styleguide/_colours";

export default class MapLegend {

    constructor(
        private ctrlr
    ) {

    }
    draw(data: GraphData, yParameter: string) {

        let bar =  document.createElement('div');
        bar.style.display = 'flex';
        bar.style.flexDirection = 'column';
        bar.style.position ='absolute';
        bar.style.right = "0rem";
        bar.style.top = "calc(50% - 100px)"
        bar.style.height = '200px';
        bar.style.width = '1.5rem';
        bar.style.background = '#eee';
        bar.style.borderTop = '1px solid black';
        bar.style.borderBottom = '1px solid black';
      //  bar.style.marginTop = '1.5rem';

        let max = d3.max(data.features.map( f => f.properties[this.ctrlr.parameters.y]));

        if (this.ctrlr.firstMapping.format === 'currency') {
          max = shortenCurrency(convertToCurrency(max));
        } 

        if (this.ctrlr.config.extra.percentage) {
          max = max + "%";
        } 

        let topSpan = document.createElement('span');
        topSpan.innerText = max;
        topSpan.style.fontSize = '0.7rem';
        topSpan.style.height = '0';
        topSpan.style.alignSelf ='flex-start';
        topSpan.style.marginLeft = '1.75rem';
        topSpan.style.marginTop = '-.35rem';
        topSpan.style.marginBottom = '.35rem';
        bar.appendChild(topSpan);

        let bottomSpan = document.createElement('span');
        bottomSpan.innerText = '0';
        bottomSpan.style.fontSize = '0.7rem';
        bottomSpan.style.height = '0';
        bottomSpan.style.alignSelf ='flex-start';
        bottomSpan.style.marginLeft = '1.75rem';
        bottomSpan.style.marginTop= '-.35rem';

        let inner =  document.createElement('div');
        inner.style.height = '100%';

        let gradient = 'linear-gradient(0deg, ' + colours.lightBlue[3] + ' 0%,' + colours[this.ctrlr.mapping.parameters[0][0].colour][0] + ' 100%)';
        inner.style.background = gradient + ' no-repeat';

        bar.appendChild(inner);
        bar.appendChild(bottomSpan);

        return bar;
    }



}