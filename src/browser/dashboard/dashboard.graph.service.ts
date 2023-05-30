import { graphs } from '../../charts/module';
import { munis } from '../../d3-services/municipalities';

export default class DashboardGraph {

    ctrlr;
    graphMethods = {};

    constructor(ctrlr: any) {

        this.ctrlr = ctrlr;
        

    }

    call(params: string, dashboardArray, segment: string, update: boolean, htmlContainer: HTMLElement) {

    
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
                //  highlight path in map
                // if (window.innerWidth > breakpoints.sm) {
                //     this.dashBoardMap.highlight(segment);
                // }
            }
         

            for (let graphObject of dashboardArray) {

                let data = graphObject.segment ? weekData : muniData;

                // if (graphObject.config && graphObject.config.multiples) {

                //     data = data.filter( (muni) => munis.map((m) => m.value).indexOf(muni.gemeente) > -1 && muni.gemeente !== "all");

                //     data.sort((a: any, b: any) => a.schademeldingen_totaal > b.schademeldingen_totaal ? -1 : 1)

                //     data = data.filter( m => m.schademeldingen_totaal > 100 );

                //     for (let m of data) {
                //         console.log(htmlContainer);
                //         const element = this.ctrlr.html.createGraphGroupElement(graphObject, htmlContainer);
                //         if (update) {
                //             this.graphMethods[graphObject.slug].update(data, segment, true);
                //         } else {
                //             element.innerHTML = '';
                //             this.graphMethods[graphObject.slug] = new graphs[graphObject.config.graphType](data, element, graphObject.config, graphObject.mapping[0], graphObject.description, m.gemeente);
                //             this.graphMethods[graphObject.slug].init();
                //         }
                //     }

                // } else {

                const graphType = graphObject.config ? graphObject.config.graphType : graphObject.graph;

                const element = this.ctrlr.html.createGraphGroupElement(graphObject, htmlContainer); // htmlContainer.querySelector('#img-dashboard-container'

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