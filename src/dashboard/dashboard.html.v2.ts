import {menuItems} from "./dashboard.menu";
import {munis} from "../d3-services/municipalities";
import {dashboardMain} from "../chart-configs/dashboard";
import DashboardInteractions from "./dashboard.interactions";
import {GraphObject} from "../types/graphObject";
import { IGraphMapping } from "../types/mapping";
import { colours } from "../_styleguide/_colours";
import { breakpoints } from "../_styleguide/_breakpoints";

export default class DashboardHTMLV2 {

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
        // parentEl.style.width = 'calc(100% - 0rem)';
        parentEl.style.display = 'flex';
        parentEl.style.flexDirection = 'row-reverse';
        parentEl.style.justifyContent = 'space-around';
        return htmlContainer;
    }

    createSideBar(htmlContainer: HTMLScriptElement) {

        htmlContainer.classList.add('has_sidebar');

        let aside = document.createElement('aside');
        aside.classList.add('selectors');

        htmlContainer.parentElement.appendChild(aside);

        return aside;
    }

    createMobileNav(htmlContainer: HTMLScriptElement) {

        let navButton = document.createElement('div');
        navButton.classList.add('header__hamburger');
        navButton.classList.add('img_dashboard_mobile_nav_button');
        navButton.style.zIndex = '99';
        navButton.style.position = 'fixed';
        navButton.style.left = '0';
        navButton.style.top = 'calc(50vh - 20px)';
        navButton.style.width = '40px';
        navButton.style.height = '40px';
        navButton.style.background = colours.lightBlue[0];

        for (let i = 0; i < 3; i++) {
            let span = document.createElement('span');
            navButton.appendChild(span);
        }

        let nav = document.createElement('nav');
        nav.classList.add('mobile_nav_v2');

        let m = this.createMenu();

        nav.appendChild(m);

        navButton.addEventListener( 'click', () => {
            navButton.classList.toggle('is-active')
            nav.classList.toggle('is-open');
        });
        
        htmlContainer.appendChild(navButton);
        htmlContainer.appendChild(nav);
    }

    createMenu() {

        let div = document.createElement('div');

        let header = document.createElement('h3');

        header.style.fontSize = '1.75rem';
        header.style.lineHeight = '1.22';
        header.style.fontWeight = 'normal';
        header.style.marginBottom =  '3rem';
        // header.style.fontFamily = 'Noto Sans';

        header.innerText = "Dashboard";

        div.appendChild(header);

        let ul = document.createElement('ul');
        ul.style.flexDirection = 'column';
        ul.classList.add('dashboard_nav');

        let li_1 = document.createElement('li');
        li_1.innerText = 'Overzicht regelingen';
        li_1.style.fontWeight = '700';
        li_1.style.padding = '.125rem 0 0rem 0';
        li_1.style.marginBottom = '1.5rem';
        li_1.style.lineHeight = '1.5';
        li_1.style.cursor = 'pointer';
        li_1.classList.add('active');
        // li_1.style.width = '100%';
        li_1.setAttribute('data-slug', '');
        li_1.onclick = () =>  this.interactions.switchTopic('','all');
        ul.appendChild(li_1);

        let li = document.createElement('li');
        li.innerText = 'Fysieke schade';
        li.style.fontWeight = '700';
        li.style.padding = '.125rem 0';
        li.style.lineHeight = '1.5';
        li.style.cursor = 'pointer';
        // li.classList.add('active');
        li.setAttribute('data-slug', 'fysieke_schade');
        li.onclick = () =>  this.interactions.switchTopic('fysieke_schade','all');
        ul.appendChild(li);

        for (let i of menuItems) {

            let li = document.createElement('li');
            li.innerText = i.label;
            li.style.padding = '.125rem 0';
            li.style.lineHeight = '1.5';
            li.style.cursor = 'pointer';
            li.setAttribute('data-slug', i.topic);
            li.onclick = () =>  this.interactions.switchTopic(i.topic,'all');

            if (["Waardedaling","Immateriële schade","Waardering en reacties"].indexOf(i.label) >  -1) {

                li.style.fontWeight = '700';
                li.style.marginTop = '1rem';
            }

            ul.appendChild(li);
        }

        let li3 = document.createElement('li');
        li3.innerText = 'Publieke data';
        li3.style.fontWeight = '700';
        li3.style.padding = '.125rem 0';
        li3.style.lineHeight = '1.5';
        li3.style.cursor = 'pointer';
        li3.style.marginTop = '1rem';
        // li.classList.add('active');
        // li3.setAttribute('data-slug', 'fysieke_schade');
        li3.onclick = () =>  window.open('https://img.publikaan.nl/publieke-data/docs/');;
        ul.appendChild(li3);

        if(window.innerWidth < breakpoints.lg) {

            let li4 = document.createElement('li');
            li4.innerText = 'Terug naar website';
            li4.style.fontWeight = '400';
            li4.style.padding = '.125rem 0';
            li4.style.lineHeight = '1.5';
            li4.style.cursor = 'pointer';
            li4.style.marginTop = '3rem';
            li4.onclick = () =>  this.interactions.closeMenu();
            ul.appendChild(li4);
        }

        div.appendChild(ul);

        return div;
    }

    createList(segment) {

        let container = document.querySelector('aside.selectors');

        let ul = document.createElement('ul');
        ul.style.marginTop = '3rem';
        ul.classList.add('municipalities');

        for ( let muni of munis) {

            let li = document.createElement('li');
            
            li.setAttribute('data-slug', muni.value);
            li.onclick = () => this.controller.call(dashboardMain,muni.value,true);
            li.style.padding = '.125rem 0';
            li.style.lineHeight = '1.5';
            li.style.cursor = 'pointer';

            let span = document.createElement('span');
            span.innerText = muni.label;

            if (muni.value === segment) {
                span.classList.add('active');
            }
            
            li.appendChild(span);
            ul.appendChild(li);
        }

        container.appendChild(ul);
    }

    createPopupElement() {

        if (!document.getElementById('img-dashboard_popup')) {

            let popup = document.createElement('div');
            popup.id = 'img-dashboard_popup';
            document.getElementsByTagName('body')[0].appendChild(popup);
        }
    }


    createGraphGroupElement(graphObject : GraphObject, htmlContainer: HTMLElement) {

        let element = document.createElement('article');

        if (graphObject.config && graphObject.config.extra.largeHeader) {

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

    pageHeader(topic: string, htmlContainer) {

        let prevBC = document.querySelector('.img-dashboard-breadcrumbs');
        if (prevBC) {
            prevBC.remove()
        }

        let breadcrumbContainer = document.createElement('ul');
        breadcrumbContainer.classList.add('img-dashboard-breadcrumbs');

        const crumbs = this._crumbs(topic);

        for (let crumb of crumbs.slice(0, crumbs.length - 1)) {

            let c = document.createElement('span');
            c.innerText = crumb.label;
            c.setAttribute('dashboard-topic', crumb.topic)
            if (topic !== crumb.topic) {
                c.addEventListener( 'click', (event) => { this.controller.interactions.switchTopic((<HTMLElement>event.target).getAttribute('dashboard-topic'),'all') });
                c.classList.add('is-link');
            }
            breadcrumbContainer.appendChild(c); 
            
            let d = document.createElement('span');
            breadcrumbContainer.appendChild(d); 
        }

        let h2 = document.createElement('h2');
        let br = document.createElement('br');
      
        h2.innerText = crumbs[crumbs.length - 1].label;
        breadcrumbContainer.appendChild(br);
        breadcrumbContainer.appendChild(h2);

        breadcrumbContainer.style.marginBottom = '3rem';
        htmlContainer.appendChild(breadcrumbContainer);
    }

    _crumbs(topic) {

        switch(topic) {

            case 'fysieke_schade': 

                return [
                    {
                        label :'Overzicht',
                        topic : '-'
                    },{
                        label : 'Fysieke schade',
                        topic: 'fysieke_schade'
                    }
                ]

            case 'meldingen': 

                return [
                    {
                        label :'Overzicht',
                        topic : '-'
                    },
                    {
                        label : 'Fysieke schade',
                        topic: 'fysieke_schade'
                    },
                    {
                        label : 'Schademeldingen',
                        topic: 'meldingen'
                    }
                ]

            case 'voortgang': 

                return [
                    {
                        label :'Overzicht',
                        topic : '-'
                    },
                    {
                        label : 'Fysieke schade',
                        topic: 'fysieke_schade'
                    },
                    {
                        label : 'Voortgang',
                        topic: 'voortgang'
                    }
                ]

            case 'vergoedingen': 

                return [
                    {
                        label :'Overzicht',
                        topic : '-'
                    },
                    {
                        label : 'Fysieke schade',
                        topic: 'fysieke_schade'
                    },
                    {
                        label : 'Vergoedingen',
                        topic: 'vergoedingen'
                    }
                ]

            case 'specials': 

                return [
                    {
                        label :'Overzicht',
                        topic : '-'
                    },
                    {
                        label : 'Fysieke schade',
                        topic: 'fysieke_schade'
                    },
                    {
                        label : 'Speciale dossiers',
                        topic: 'specials'
                    }
                ]

            case 'gemeente': 

                return [
                    {
                        label :'Overzicht',
                        topic : '-'
                    },
                    {
                        label : 'Fysieke schade',
                        topic: 'fysieke_schade'
                    },
                    {
                        label : 'Per gemeente',
                        topic: 'gemeente'
                    }
                ]

            case 'waardedaling': 

                return [
                    {
                        label :'Overzicht',
                        topic : '-'
                    },{
                        label : 'Waardedaling',
                        topic: 'waardedaling'
                    }
                ]

            case 'immateriele_schade': 



                return [
                    {
                        label :'Overzicht',
                        topic : '-'
                    },{
                        label : 'Immateriële schade',
                        topic: 'immateriele_schade'
                    }
                ]

            case 'reacties': 

                return [
                    {
                        label :'Overzicht',
                        topic : '-'
                    },{
                        label : 'Waardering en reacties',
                        topic: 'reacties'
                    }
                ]

            default: 

                return [
                    {
                        label :'Overzicht',
                        topic : '-'
                    }
                ]
        }
    }
}
