import { graphs } from '../../../ts-modules/src/img-modules/charts';
// import { munis } from '@local/img-services';
import { createGraphGroupElement } from './html.factory';

export default class GraphService {

    ctrlr;
    graphMethods = {};

    constructor(ctrlr: any) {

        this.ctrlr = ctrlr;
    }

    call(params: string, dashboardArray, segment: string, update: boolean, htmlContainer: HTMLElement, size: number[]) {

        const promises = this.ctrlr.dataService.createDashboardCalls(dashboardArray, segment,false);

        Promise.all(promises).then((values) => {

            let data = values; // this.ctrlr.dataService.discardEmpty(values);
            
            let { weekData, muniData } = this.ctrlr.dataService.mergeArrayObjects(data);

            if (segment === 'eemsdelta') {
                weekData = this.ctrlr.dataService.createHistoryForEemsdelta(weekData);
                weekData = this.ctrlr.dataService.correctionForEemsdelta(weekData);
            }

            if (params === 'mms') {
                weekData = this.ctrlr.dataService.parseMmsData(weekData);
            }
           

            if (segment === 'het-hogeland') {
                weekData = this.ctrlr.dataService.correctionForHetHogeland(weekData);
            }

            if (update) {
                this.ctrlr.interactions.updateMuniList(segment);
            }
         

            for (let graphObject of dashboardArray) {

                let data = graphObject.segment ? weekData : muniData;

                const graphType = graphObject.config ? graphObject.config.graphType : graphObject.graph;
             
                const element = htmlContainer; // createGraphGroupElement(graphObject, htmlContainer); // htmlContainer.querySelector('#img-dashboard-container'
                element.style.width = size[0].toString() + 'px';
                element.style.height = size[1].toString() + 'px';

                if (update) {
                    this.graphMethods[graphObject.slug].update(data, segment, true);
                } else {
                   
                    element.innerHTML = '';
                
                    this.graphMethods[graphObject.slug] = new graphs[graphType](this.ctrlr, data, element, graphObject, segment);
                    this.graphMethods[graphObject.slug].init();
                }
                // }
            }
        });
    }
}