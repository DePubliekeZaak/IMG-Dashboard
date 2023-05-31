import {colours} from "@local/styleguide";
import {munis} from "@local/img-services";
import {monthNames} from "@local/d3-services";

export default class HtmlPeriodSelector {

    constructor(
        private element,
        private graphSlug
    ){}

    draw(data) {

        let selectEl = this.element.querySelector('.period_select_' + this.graphSlug);

        if (selectEl) {
            selectEl.parentNode.removeChild(selectEl)
        }

        let dropdown = document.createElement('select');
        dropdown.classList.add('period_select_' + this.graphSlug);
        dropdown.style.alignSelf = 'flex-start';

        let option = document.createElement('option');
        option.label = 'Doorlopend';
        option.value = 'all';
        option.innerText = 'Doorlopend';
        dropdown.appendChild(option);

        for (let month of data) {
            option = document.createElement('option');
            option.label = monthNames[month._month - 1] + ' ' + month._year;
            option.value = month._month;
            option.innerText = 'Maand';
            dropdown.appendChild(option);
        }


        dropdown.style.border = '1px solid black';
        dropdown.style.margin = '-1rem 0 0 .5rem';
        dropdown.style.borderRadius = '0';



        let headerElement = this.element.querySelector('.article_header');


        this.element.insertBefore(dropdown,headerElement.nextSibling);



    }

    redraw() {
    }
}

