export class HtmlHeader {

    constructor(
        private element,
        private label
    ){}

    draw() {

        let headerEelement = this.element.querySelector('.article_header')

        if (headerEelement) {
            headerEelement.parentNode.removeChild(headerEelement)
        }

        let headerContainer = document.createElement('div');
        headerContainer.classList.add('article_header');
        headerContainer.style.borderBottom = '1px solid black';
        headerContainer.style.position = 'relative'
        headerContainer.style.width = 'calc(100% - 0px)';
        headerContainer.style.paddingBottom = '.5rem';
        headerContainer.style.marginBottom = '1.5rem';

        let h = document.createElement('h3');
        h.innerText = this.label;
        h.style.fontFamily = 'NotoSans Regular';
        h.style.textAlign = 'center';
        h.style.fontSize = '1rem';
        h.style.lineHeight = '1.44';
        h.style.margin = '0';

        headerContainer.appendChild(h);

        for (let i = 0; i < 3; i++) {

            let span = document.createElement('span');
            span.style.position =  'absolute';
            span.style.bottom =  '-.33rem';
            span.style.height =  '.33rem';
            span.style.width = '1px';
            span.style.backgroundColor = '#000';

            if (i === 0) {

                span.style.left =  '50%';
                span.style.bottom =  '0';

            } else if (i === 1) {
                span.style.left =  '0';

            } else if (i === 2) {
                span.style.right =  '0';
            }

            headerContainer.appendChild(span);
        }

        this.element.insertBefore(headerContainer,this.element.childNodes[0]);
    }

    redraw() {
    }
}
