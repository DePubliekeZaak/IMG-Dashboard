export class HtmlLink {

    constructor(
        private element : HTMLElement,
        private label : string,
        private url : string
    ){
       this.create();
    }


    create() {

        let div = document.createElement('div');
        div.classList.add('dashboard_link');
        div.style.marginTop = '.5rem';

        let a = document.createElement('a');
        a.href = '';
        a.innerText = 'Meer over ' + this.label;
        a.style.fontFamily = 'NotoSans Regular';
        a.style.textTransform = 'lowercase';
        a.style.color = 'black';
        a.style.textDecoration = 'none';
        a.style.borderBottom = '1px solid black';
        a.style.cursor = 'pointer';
        a.style.fontSize = '.8rem';

        div.appendChild(a);

        this.element.appendChild(div);
    }

}