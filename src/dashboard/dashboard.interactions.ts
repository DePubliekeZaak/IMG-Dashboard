import {breakpoints} from "../_styleguide/_breakpoints";

export default class DashboardInteractions {

    controller;
    params;

    constructor(controller,params) {
        this.controller = controller;
        this.params = params;
    }

    switchTopic(topic,segment) {

        let popupElement = document.getElementById('img-dashboard_popup');

        popupElement.style.display = 'none';

        let newConfig = this.params.matchConfig(topic);

        let graphEls = [].slice.call(document.querySelectorAll('.img-graph-container, h2'));

        for (let el of graphEls) {
            el.parentNode.removeChild(el);
        }

        this.controller.call(newConfig, segment,false);

        if (window.innerWidth > breakpoints.md) {
            this.updateMenuList(topic);
            this.showHideSidebarElements(topic);
        }

        if (history.pushState) {
            const newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?topic=' + topic;
            window.history.pushState({path:newurl},'',newurl);
        }
    }

    showHideSidebarElements(topic) {

        let menuList : any = document.querySelector('ul.municipalities');
        // let map : any = document.getElementById('img-graph-dashboard-map');


        if(!topic || topic === undefined || topic === '') {

            menuList.style.display = 'block';
            //map.style.display = 'block';

        } else {
            menuList.style.display = 'none';
           // map.style.display = 'none';
        }
    }


    updateMenuList(topic) {

        for (let option of [].slice.call(document.querySelectorAll('aside.selectors ul.dashboard_nav li'))) {

            if (option.classList.contains('active')) { option.classList.remove('active') }
            if (option.getAttribute('data-slug') === topic) { option.classList.add('active');}
        }
    }

    updateMuniList(segment) {

        for (let option of [].slice.call(document.querySelectorAll('aside.selectors ul.municipalities li'))) {

            if (option.classList.contains('active')) { option.classList.remove('active') }
            if (option.getAttribute('data-slug') === segment) { option.classList.add('active');}
        }
    }
}
