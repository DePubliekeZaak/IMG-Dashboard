import { breakpoints } from "../_styleguide/_breakpoints";

export class HtmlLink {

    linkElement;

    constructor(
        private main : any,
        private element : HTMLElement,
        private label : string,
        private topic : string
    ){
    //    this.draw();
    }


    draw() {

        this.linkElement = document.createElement('div');
        this.linkElement.style.width = '100%';

        let a = document.createElement('a');
        a.onclick = () => this.main.interactions.switchTopic(this.topic,'all');
        a.innerHTML = `<svg class="icon icon-img-arrow-right mr-2"><use xlink:href="#icon-img-arrow-right"></use></svg><span style="line-height: 1;font-weight: 600; font-family: Sora, sans-serif;">` + this.label + `</span>`; 
        a.style.justifyContent = window.innerWidth < breakpoints.sm ? 'center' : 'flex-start';
        a.style.alignSelf = 'flex-end';
        a.style.color = 'black';
        a.style.textDecoration = 'none';
        a.style.display = 'flex';
        a.style.flexDirection = 'row';
        a.style.fontSize = '.825rem';
        a.style.padding = window.innerWidth < breakpoints.sm ? '2rem 0 2.5rem 0' : '2.5rem 0 0.5rem 0';

        this.linkElement.appendChild(a);

        this.element.appendChild(this.linkElement);
    }

    hide() {
        this.linkElement.style.opacity = '0';
    }

    show() {
        this.linkElement.style.opacity = '1';
    }

}



// const link = document.createElement('a');
// link.href = '/dashboard';
// link.innerHTML = `<span style="padding-right:.5rem;line-height: 1.25;">Meer cijfers en grafieken</span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30"><path d="M20.4 7H1v15.9h19.4l9.6-8L20.4 7z" fill="#000"></path></svg>`;


// this.htmlContainer.appendChild(link);