import { JSDOM } from 'jsdom';
import { html } from './html.factory'
import { DataService, IDataService } from '../../../ts-modules/build/esm/img-modules/services';
import {weekFs} from '../../../ts-modules/build/esm/configs'


interface Size {
    width: number,
    height: number
}

export interface ISsrController {
    create: (week: number, size: Size) => void,
    dom: any
}

export class SsrController implements ISsrController {

    dom: any
    data: IDataService

    constructor() {

        this.data = new DataService(this);
        
    }

    create(week:number, size: Size) : void {

        const window = (new JSDOM(html, { pretendToBeVisual: true })).window;
//window.d3 = d3.select(window.document); //get d3 into the dom

        // stylesheets ?
        // window.document.querySelector()

        const htmlContainer: HTMLElement =  window.document.querySelector("[data-img-graph-preset='dashboard']");

        this.data.call(null, weekFs, 'all', false, htmlContainer);


        
        // graphservice 
        //     -- calls -- simple week call -- is toch maar fs 
        //     -- merge
        // create container el
        // set size
        // new graph()


        // get 
        


    }


}