import {colours} from "../_styleguide/_colours";
import {dashboardOpnames} from "../chart-configs/dashboard-opnames";
import {munis} from "../helpers/municipalities";

export class HtmlMuniSelector {

    constructor(
        private element,
        private graphSlug
    ){}

    draw(segment) {

        if (this.element.querySelector('.municipality_select' + this.graphSlug)) { this.element.querySelector('.municipality_select'  + this.graphSlug).remove() }

        let dropdown = document.createElement('select');
        dropdown.classList.add('municipality_select_' + this.graphSlug);
        dropdown.style.alignSelf = 'flex-start';

        for ( let muni of munis) {

            let option = document.createElement('option');
            option.label = muni.label;
            option.value = muni.value;
            dropdown.appendChild(option);
            dropdown.style.border = '1px solid black';
            dropdown.style.margin = '-1rem 0 0 .5rem';
            dropdown.style.borderRadius = '0';
        }

        // containerElement.appendChild(dropdown);

        // let span = document.createElement('span');
        // span.classList.add('article_category');
        // span.innerText = segment;
        // span.style.fontFamily = 'NotoSans Regular';
        // // span.style.background = '#000';
        // span.style.textAlign = 'center';
        // span.style.margin = '-1rem 0 0 .5rem';
        // span.style.fontSize = '.71rem';
        // span.style.padding = '0.125rem 0rem';
        // span.style.color = 'black';
        // span.style.alignSelf = 'flex-start';
        // span.style.textTransform = 'capitalize';
        // span.style.borderBottom = '1px solid black';

        let headerElement = this.element.querySelector('.article_header');


        this.element.insertBefore(dropdown,headerElement.nextSibling);



    }

    redraw() {
    }
}
