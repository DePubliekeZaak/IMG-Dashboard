import { GraphObject } from '../types/GraphObject'


export class HtmlPopup {


    popupElement = document.getElementById('img-dashboard_popup');

    constructor(
        private element : HTMLElement,
        private description : string
    ){
       this.create();
    }


    pop(el) {

        const popupWidth = 400;

        // clear


        this.popupElement.innerHTML = '';

        // html

        if (window.innerWidth > 700) {

            const pielleke = document.createElement('div');
            pielleke.classList.add('pielleke');
            pielleke.style.width = '1.5rem';
            pielleke.style.height = '1.5rem'
            pielleke.style.position = 'absolute';
            pielleke.style.top = '-.8rem';
            pielleke.style.left = 'calc(' + (popupWidth / 2) + 'px - 0.1rem)';  // padding - width
            pielleke.style.transform = 'rotate(45deg)';
            pielleke.style.borderLeft = '1px solid black';
            pielleke.style.borderTop = '1px solid black';
            pielleke.style.background = 'white';
            this.popupElement.append(pielleke);

        }

        const description = document.createElement('div');
        description.classList.add('popup_description');
        description.innerHTML = '<div>' + this.description + '</div>';

        this.popupElement.append(description);

        // linkje

        const link = document.createElement('div');
        link.classList.add('popup_more_link');
        link.style.display = 'flex';
        link.style.flexDirection = 'row';
        link.style.alignItems = 'center';
        link.style.marginTop = '1rem';

        link.innerHTML = `<svg width="32px" height="16px" viewBox="0 0 74 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="Group" fill="#000000">
                    <rect id="Rectangle" x="0" y="1" width="52" height="43"></rect>
                    <rect id="Rectangle-2" transform="translate(52.366745, 22.463203) rotate(45.000000) translate(-52.366745, -22.463203) " x="37.1167446" y="7.21320344" width="30.5" height="30.5"></rect>
                </g>
            </svg><a href="/dashboard/?topic=meldingen" style="display:inline-block;margin-left:.75rem;line-height: 2">Meer over ...</a>
        
        `;

        this.popupElement.append(link);

        // sluit knop
        const closeButton = document.createElement('div');
        closeButton.classList.add('popup_close_button');
        closeButton.style.position = 'absolute';
        closeButton.style.right = '1.5rem';
        closeButton.style.bottom = '1.5rem';
        closeButton.onclick = () => this.close();

        closeButton.innerHTML = `
        <svg width="16px" height="16px" viewBox="0 0 91 92" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="close" fill="#000000" fill-rule="nonzero">
            <path d="M54.1,46 L88.7,11.4 C91.1,9 91.1,5.1 88.7,2.7 C86.3,0.3 82.4,0.3 80,2.7 L45.4,37.3 L10.8,2.8 C8.4,0.4 4.5,0.4 2.1,2.8 C-0.3,5.2 -0.3,9.1 2.1,11.5 L36.7,46 L2.2,80.6 C-0.2,83 -0.2,86.9 2.2,89.3 C4.6,91.7 8.5,91.7 10.9,89.3 L45.5,54.7 L80.1,89.3 C82.5,91.7 86.4,91.7 88.8,89.3 C91.2,86.9 91.2,83 88.8,80.6 L54.1,46 Z" id="Shape"></path>
            </g>
            </svg>
        `;

        this.popupElement.append(closeButton);


        if (window.innerWidth > 700) {
            // position
            const rect = el.querySelector('.popup_link').getBoundingClientRect();
            this.popupElement.style.top = (44 + rect.top + window.scrollY).toString() + 'px';
            let leftPos = rect.x - (popupWidth / 2);
            let maxLeft = window.innerWidth - popupWidth - 60;


            // litteral edge case
            if (leftPos > maxLeft) {
                let pielleke : any = document.querySelector('.pielleke');
                pielleke.style.left = 'calc(' + ((popupWidth / 2) - (maxLeft - leftPos)) + 'px - 0.1rem)';
                leftPos = maxLeft;
            }

            this.popupElement.style.left =  leftPos.toString() + 'px';
        }

        this.popupElement.style.display = 'block';

    }

    close() {

        this.popupElement.style.display = 'none';
    }

    create() {

        let img = document.createElement('img');
        img.classList.add('popup_link');
        img.style.marginBottom = '1.5rem';
        img.style.height = "1.5rem";
        img.style.width = "1.5rem";
        img.src = '../img/i.svg';
        img.onclick = () => this.pop(this.element);

        // let a = document.createElement('a');
        // a.href = '';
        // a.innerText = 'Meer over ' + this.label;
        // a.style.fontFamily = 'NotoSans Regular';
        // a.style.textTransform = 'lowercase';
        // a.style.color = 'black';
        // a.style.textDecoration = 'none';
        // a.style.borderBottom = '1px solid black';
        // a.style.cursor = 'pointer';
        // a.style.fontSize = '.8rem';

        // div.appendChild(a);

        this.element.appendChild(img);
    }

}