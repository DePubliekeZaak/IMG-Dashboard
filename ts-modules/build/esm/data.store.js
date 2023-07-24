export default class DataStore {
    constructor() {
        this.graphs = {};
    }
    setGraph(slug, data) {
        this.graphs[slug] = data;
    }
    getGraph(slug) {
        return this.graphs[slug];
    }
}
