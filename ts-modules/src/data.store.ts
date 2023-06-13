import { timeHours } from "d3";



export default class DataStore {

    graphs: any 

    constructor() {

        this.graphs = {};
    }

    setGraph(slug: string, data: any) {

        this.graphs[slug] = data;

    }

    getGraph(slug) {

        return this.graphs[slug]; 
    }


}