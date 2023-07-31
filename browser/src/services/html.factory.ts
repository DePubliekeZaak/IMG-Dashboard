import { GraphObject } from "../../../ts-modules/src/d3-modules/_d3_types";


export const styleParentElement = (document: Document) => {

    const htmlContainer: HTMLScriptElement =  document.querySelector("[data-img-graph-preset]");
    const parentEl = htmlContainer.parentElement;
    parentEl.classList.add('container');
    // parentEl.style.width = 'calc(100% - 0rem)';
    parentEl.style.display = 'flex';
    parentEl.style.flexDirection = 'row-reverse';
    parentEl.style.justifyContent = 'space-around';
    htmlContainer.style.background = "#eee";
    return htmlContainer;
}

export const createPopupElement = () => {

    if (!document.getElementById('img-dashboard_popup')) {

        let popup = document.createElement('div');
        popup.id = 'img-dashboard_popup';
        document.getElementsByTagName('body')[0].appendChild(popup);
    }
}


export const createGraphGroupElement = (graphObject : GraphObject, documentEl: HTMLElement) => {

    let element = document.createElement('article');
  

    if (graphObject.config && graphObject.config.extra.largeHeader) {

        let header = document.createElement('h2');
        header.innerText = graphObject.label;
        header.style.fontFamily = 'NotoSans Regular';
        header.style.fontSize = '1.6rem';
        header.style.width = '100%';
        header.style.margin = '3rem 0 3rem 0';

        documentEl.appendChild(header);
    }

    if (graphObject.elementClasslist) {

        for (let className of graphObject.elementClasslist) {
            element.classList.add(className);
        }
    }

    documentEl.appendChild(element);
    console.log(element);
    return element;

}