import { JSDOM } from 'jsdom';
import { html, createGraphGroupElement } from './html.factory'
import { DataService, IDataService } from '../../../ts-modules/build/esm/img-modules/services';
import {weekFs} from '../../../ts-modules/build/esm/configs'

interface Size {
    width: number,
    height: number
}

export interface ISsrController {
    create: (week: number, size: Size) => void,
    window: Window
}

export class SsrController implements ISsrController {

    data: IDataService
    createGraphGroupElement
    window

    constructor() {

        this.data = new DataService(this);
        this.createGraphGroupElement = createGraphGroupElement;
    }

    async create(week:number, size: Size) : Promise<void> {

        this.window = (new JSDOM(html, { pretendToBeVisual: true })).window;

        const htmlContainer: HTMLElement =  this.window.document.querySelector("[data-img-graph-preset='dashboard']");

        const renderedhtml = await this.data.call(null, weekFs, 'all', false, htmlContainer);

        console.log(renderedhtml);
    }
}