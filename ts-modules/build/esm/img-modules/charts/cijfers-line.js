import { ChartAvgLine, ChartBackgroundAreas, ChartRaggedLine, ChartGridWeek } from '@local/elements';
import { HtmlCircle } from '@local/elements';
import { filterWeeks, getNeededColumnsForHistoryV2 } from "@local/img-services";
import { GraphControllerV2 } from "@local/d3_graphs";
import { flattenColumn } from '@local/d3-services';
export default class CijfersLine extends GraphControllerV2 {
    constructor(main, data, element, mapping, segment) {
        super(main, data, element, mapping, segment);
        this.main = main;
        this.data = data;
        this.element = element;
        this.mapping = mapping;
        this.segment = segment;
        this.pre();
    }
    pre() {
        this._addScale("x", "time", "horizontal", "_date");
        this._addScale("y", "linear", "vertical", flattenColumn(this.mapping.parameters[0][0].column));
        this._addPadding(0, 0, 0, 0);
        this._addMargin(0, 0, 10, 10);
    }
    init() {
        this.parentEl = this.element;
        super._init();
        this.chartLine = new ChartRaggedLine(this);
        this.chartBackgroundAreas = new ChartBackgroundAreas(this);
        this.chartWeekGrid = new ChartGridWeek(this);
        this.chartAvgLine = new ChartAvgLine(this);
        this.htmlCircle = new HtmlCircle(this);
        this.htmlCircle.draw();
        const svgId = "svg-wrapper-" + this.mapping.slug;
        const container = document.createElement('section');
        container.style.height = "100px";
        container.style.width = "100%";
        container.style.marginBottom = '3rem';
        container.id = svgId;
        this.element.appendChild(container);
        super._svg(container);
        if (this.data.map((i) => i[this.firstMapping['column']]).filter((i) => i !== null && i !== undefined).length > 2) {
            this.chartAvgLine.draw();
        }
        this.update(this.data, this.segment, false);
    }
    prepareData(data) {
        const neededColumns = getNeededColumnsForHistoryV2(data, this.mapping);
        const history = filterWeeks(data, neededColumns);
        this.main.dataStore.setGraph(this.mapping.slug, history);
        return {
            "history": history,
            "latest": data[0],
            "slice": history.slice(0, 8),
        };
    }
    redraw(data) {
        super.redraw(data);
        this.htmlCircle.redraw([data.latest], this.firstMapping['column']);
        if (this.data.map((i) => i[this.firstMapping['column']]).filter((i) => i !== null && i !== undefined).length > 2) {
            this.chartBackgroundAreas.redraw(data.slice, this.firstMapping['colour']);
            this.chartWeekGrid.redraw(data.slice, this.firstMapping['colour']);
            this.chartLine.redraw(data.slice, this.firstMapping['colour']);
            this.chartAvgLine.redraw(data);
        }
    }
    draw(data) {
        this.xScale = this.scales.x.set(data.slice.map(d => d[this.parameters.x]));
        let minValue = 0;
        this.yScale = this.scales.y.set(data.history.map(d => d[this.parameters.y]), minValue);
        if (data.slice.map((i) => i[this.firstMapping['column']]).filter((i) => i !== null && i !== undefined).length > 2) {
            this.chartBackgroundAreas.draw(data.slice);
            this.chartLine.draw(data.slice);
            this.chartWeekGrid.draw(data.slice);
        }
        this.popup.attachData(data.latest);
    }
    update(data, segment, update) {
        super._update(data, segment, update);
    }
}
