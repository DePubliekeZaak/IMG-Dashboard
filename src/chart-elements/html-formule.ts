import { colours } from '../_styleguide/_colours';
import {thousands} from "../helpers/_helpers";

export class HtmlFormule {

    constructor(
        private config,
        private dataMapping,
        private element,
        private label
    ){}

    draw() {

        let miniContainer = document.createElement('div');
        miniContainer.style.display ='flex';
        miniContainer.style.flexDirection = 'row';
        // miniContainer.style.justifyContent = 'center';
        miniContainer.style.alignItems = 'center';

        let left = document.createElement('div');
        left.style.display ='flex';
        left.style.flexDirection = 'column';
        left.style.justifyContent = 'center';
        left.style.alignItems = 'center';

        let top = document.createElement('div');
        top.classList.add('top');
        top.style.borderBottom = '1px solid black';
        top.style.paddingTop = '1.5rem';
        top.style.paddingBottom = '.75rem';

        // let w_afgehandeld = document.createElement('span');
        // w_afgehandeld.classList.add('value')
        // w_afgehandeld.classList.add('w_afgehandeld');
        // w_afgehandeld.style.display = 'inline-block';
        // w_afgehandeld.style.color = 'black';
        miniContainer.style.fontFamily = 'NotoSans Regular';
        miniContainer.style.fontWeight = 'normal';
        miniContainer.style.fontSize = '1rem';
        miniContainer.style.lineHeight = "1";

      top.innerHTML = `
      ( <span title="besluiten fysieke schade" class="top value fs_besluiten"></span> * <span title="doorlopend rapportcijfer fysieke schade" class="top value fs_cijfer"></span> )
      + ( <span title="besluiten waardedaling" class="top value w_besluiten"></span> * <span title="doorlopend rapportcijfer waardedaling" class="top value w_cijfer"></span> ) 
     

        `;
      

        left.appendChild(top);

        let bottom = document.createElement('div');
        bottom.classList.add('bottom');
        bottom.style.paddingTop = '.75rem';
        bottom.style.paddingBottom = '1.5rem';

        bottom.innerHTML = `
           <span title="besluiten fysieke schade"  class="bottom value fs_besluiten"></span> +
            <span  title="besluiten waardedaling" class="bottom value w_besluiten"></span>
        `
        left.appendChild(bottom);

        miniContainer.appendChild(left);

        let right = document.createElement('div');
        right.style.display ='flex';
        right.style.flexDirection = 'row';
        right.style.marginLeft = '.75rem';
        right.style.justifyContent = 'center';

        right.innerHTML = `= <span class="kto_result" style="margin-left:.75rem;"></span>`;

        miniContainer.appendChild(right);

        this.element.insertBefore(miniContainer,this.element.childNodes[0])
    }


    redraw(data,parameter) {

            let score = ((data.waardedaling_besluiten * data.waardedaling_doorlopend_cijfer) + (data.fysieke_schade_besluiten * data.fysieke_schade_doorlopend_cijfer )) /   (data.waardedaling_besluiten + data.fysieke_schade_besluiten)


            this.element.querySelector('.top.value.w_besluiten').innerText = data.waardedaling_besluiten;
            this.element.querySelector('.top.value.w_cijfer').innerText = data.waardedaling_doorlopend_cijfer;

            this.element.querySelector('.top.value.fs_besluiten').innerText = data.fysieke_schade_besluiten;
            this.element.querySelector('.top.value.fs_cijfer').innerText = data.fysieke_schade_doorlopend_cijfer;

            this.element.querySelector('.bottom.value.w_besluiten').innerText = data.waardedaling_besluiten;
            this.element.querySelector('.bottom.value.fs_besluiten').innerText = data.fysieke_schade_besluiten;

            this.element.querySelector('.kto_result').innerText = Math.round(score * 100) / 100;

    }
}
