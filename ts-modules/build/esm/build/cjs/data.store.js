"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DataStore {
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
exports.default = DataStore;
