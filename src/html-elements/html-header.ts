export default class HtmlHeader {

    headerElement;

    constructor(
        private element,
        private label
    ){}

    draw() {

        const prevHeaderElement = this.element.querySelector('.article_header')

        if (prevHeaderElement) {
            prevHeaderElement.parentNode.removeChild(this.headerElement)
        }

        this.headerElement = document.createElement('div');
        this.headerElement.classList.add('article_header');
        this.headerElement.style.position = 'relative';
        this.headerElement.style.borderBottom = '1px solid black';
        this.headerElement.style.width = 'calc(100% - 0px)';
        this.headerElement.style.paddingBottom = '.75rem';
        this.headerElement.style.marginBottom = '2.5rem';


        let h = document.createElement('h3');
        h.innerText = this.label;
        // h.style.fontFamily = 'NotoSans Regular';
        h.style.textAlign = 'center';
        h.style.fontSize = '.825rem';
        h.style.fontWeight = '500';
        h.style.lineHeight = '1.44';
        h.style.margin = '0';

        this.headerElement.appendChild(h);

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

            this.headerElement.appendChild(span);
        }

        this.element.appendChild(this.headerElement);
       // this.element.insertBefore(headerContainer,this.element.childNodes[0]);
       return true;
    }

    redraw() {
    }

    hide() {
        this.headerElement.style.opacity = '0';
    }

    show() {
        this.headerElement.style.opacity = '1';
    }
}
