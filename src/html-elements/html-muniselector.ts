import {colours} from "../img-modules/_styleguide";
import {munis} from "../d3-services/municipalities";

export class HtmlMuniSelector {

    constructor(
        private element,
        private graphSlug
    ){}

    draw(segment) {

        let selectEl = this.element.querySelector('.municipality_select' + this.graphSlug);

        if(selectEl) { selectEl.parentNode.removeChild(selectEl) }

        let dropdown = document.createElement('select');
        dropdown.classList.add('municipality_select_' + this.graphSlug);
        dropdown.style.alignSelf = 'flex-start';


        for ( let muni of munis) {

            let option = document.createElement('option');
            option.label = muni.label;
            option.value = muni.value;
            option.innerText = muni.label;
            if (muni.value === segment) { option.selected = true }
            dropdown.appendChild(option);
            dropdown.style.border = '1px solid black';
            dropdown.style.margin = '-1rem 0 0 .5rem';
            dropdown.style.borderRadius = '0';

            
        }

        this.element.appendChild(dropdown)   // insertBefore(dropdown,headerElement.nextSibling);

        

    }

    redraw() {
    }
}
