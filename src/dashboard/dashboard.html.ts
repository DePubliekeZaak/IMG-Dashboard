import {menuItems} from "./dashboard.menu";
import {munis} from "../helpers/municipalities";
import {dashboardMain} from "../chart-configs/dashboard";
import DashboardInteractions from "./dashboard.interactions";
import {GraphObject} from "../types/graphObject";

export default class DashboardHTML {

    controller;
    interactions;
    data;

    constructor(controller,interactions,dataService) {
        this.controller = controller;
        this.interactions = interactions;
        this.data = dataService;

    }

    styleParentElement() {

        const htmlContainer: HTMLScriptElement =  document.querySelector("[data-img-graph-preset='dashboard']");
        const parentEl = htmlContainer.parentElement;
        parentEl.classList.add('container');
        parentEl.style.width = 'calc(100% - 2rem)';
        return htmlContainer;

    }

    createSideBar(htmlContainer: HTMLScriptElement) {

        htmlContainer.classList.add('has_sidebar');

        let aside = document.createElement('aside');
        aside.classList.add('selectors');

        let mapContainer = document.createElement('div');
        mapContainer.id = "img-graph-dashboard-map";
        aside.appendChild(mapContainer);

        htmlContainer.appendChild(aside);

        return aside;
    }

    createMobileNav(htmlContainer: HTMLScriptElement) {

        let self = this;

        let nav = document.createElement('nav');
        nav.classList.add('mobile_nav');

        let select = document.createElement('select');

        let option = document.createElement('option');
        option.innerText = 'Algemeen';
        option.value = '';
        option.label = 'Algemeen';
        select.appendChild(option);

        for (let i of menuItems) {

            let option = document.createElement('option');
            option.innerText = i.label;
            option.value = i.topic;
            option.label = i.label;

            select.appendChild(option);
        }

        //  this.switchTopic('','all');

        select.addEventListener("change", function () {
            self.interactions.switchTopic(select.options[select.selectedIndex].value,'all')
        });

        nav.appendChild(select);
        htmlContainer.appendChild(nav);

        return select;

    }

    createMenu() {

        let div = document.createElement('div');

        let header = document.createElement('h3');

        header.style.fontSize = '1rem';
        header.style.lineHeight = '1.5';
        header.style.fontWeight = '700';
        // header.style.fontFamily = 'Noto Sans';

        header.innerText = "Meer grafieken";

        div.appendChild(header);

        let ul = document.createElement('ul');
        ul.classList.add('dashboard_nav');

        let li = document.createElement('li');
        li.innerText = 'Algemeen';
        li.style.padding = '.125rem 0';
        li.style.lineHeight = '1.5';
        li.style.cursor = 'pointer';
        li.classList.add('active');
        li.setAttribute('data-slug', '');
        li.onclick = () =>  this.interactions.switchTopic('','all');
        ul.appendChild(li);

        for (let i of menuItems) {

            let li = document.createElement('li');
            li.innerText = i.label;
            li.style.padding = '.125rem 0';
            li.style.lineHeight = '1.5';
            li.style.cursor = 'pointer';
            li.setAttribute('data-slug', i.topic);
            li.onclick = () =>  this.interactions.switchTopic(i.topic,'all');
            ul.appendChild(li);
        }

        div.appendChild(ul);

        return div;
    }

    createList(segment) {

        let container = document.querySelector('aside.selectors');

        let ul = document.createElement('ul');
        ul.classList.add('municipalities');

        for ( let muni of munis) {

            let li = document.createElement('li');
            li.innerText = muni.label;
            li.setAttribute('data-slug', muni.value);
            li.onclick = () => this.controller.call(dashboardMain,muni.value,true);
            li.style.padding = '.125rem 0';
            li.style.lineHeight = '1.5';
            li.style.cursor = 'pointer';

            if (muni.value === segment) {
                li.classList.add('active');
            }

            ul.appendChild(li);
        }

        container.appendChild(ul);
    }

    createPopupElement() {

        let popup = document.createElement('div');
        popup.id = 'img-dashboard_popup';
        document.getElementsByTagName('body')[0].appendChild(popup);
    }


    createGraphGroupElement(graphObject : GraphObject,htmlContainer: HTMLScriptElement) {

        let element = document.createElement('article');

        if (graphObject.config.extra.largeHeader) {

            let header = document.createElement('h2');
            header.innerText = graphObject.label;
            header.style.fontFamily = 'NotoSans Regular';
            header.style.fontSize = '1.6rem';
            header.style.width = '100%';
            header.style.margin = '3rem 0 3rem 0';

            htmlContainer.appendChild(header);
        }

        if (graphObject.elementClasslist) {

            for (let className of graphObject.elementClasslist) {
                element.classList.add(className);
            }
        }

        htmlContainer.appendChild(element);

        return element;

    }
}
