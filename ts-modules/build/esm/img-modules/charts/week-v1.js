var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { WeekMeldingenV1, ChartPieWeek } from '@local/elements';
import { GraphControllerV2 } from "@local/d3_graphs";
export default class WeekV1 extends GraphControllerV2 {
    constructor(main, data, element, mapping, segment, size) {
        super(main, data, element, mapping, segment, size);
        this.main = main;
        this.data = data;
        this.element = element;
        this.mapping = mapping;
        this.segment = segment;
        this.size = size;
        this.pre();
    }
    pre() {
        this._addScale("x", "band", "horizontal-reverse", "time");
        this._addScale("y", "linear", "custom", "value");
        this._addScale("r", "radius", "radius", "value");
        //  this._addScale("m","log","horizontal","meldingen")
        this._addPadding(0, 0, 0, 0);
        this._addMargin(0, 0, 0, 0);
    }
    init(size) {
        const _super = Object.create(null, {
            _init: { get: () => super._init },
            _svg: { get: () => super._svg }
        });
        return __awaiter(this, void 0, void 0, function* () {
            _super._init.call(this);
            const svgId = "svg-wrapper-" + this.mapping.slug;
            const container = this.main.window.document.createElement('section');
            // container.style.height = "400px";
            // container.style.width = "800px";
            container.style.overflow = "hidden";
            container.id = svgId;
            this.element.appendChild(container);
            _super._svg.call(this, container);
            // this.dimensions = this.chartDimensions.fix(size)
            this.config.paddingInner = .2;
            this.config.extra.minRadius = 20;
            this.config.extra.radiusFactor = .5;
            this.config.extra.innerRadius = 20;
            this.config.extra.maxRadius = 100;
            this.config.extra.trendHeight = 60;
            this.meldingen = new WeekMeldingenV1(this);
            this.pie = new ChartPieWeek(this);
            // this.trend = new ChartBarWeekV1(this);
            yield this.update(this.data, this.segment, false);
        });
    }
    prepareData(data) {
        const history = []; // data; 
        const pieData = [];
        // this data merging .. has been skipped
        const parameter = "fs_nieuw_dossiers_afgehandeld";
        for (const week of data) {
            history.push({
                "time": week["_date"],
                "label": week["_week"],
                "value": week["nieuw_schademeldingen"],
                "colour": "orange"
            });
            history.push({
                "time": week["_date"],
                "label": week["_week"],
                "value": week[parameter],
                "colour": "lightBlue"
            });
        }
        pieData.push({
            label: "Afgehandeld",
            value: data[0]["fs_dossiers_afgehandeld"],
            new: data[0]["fs_nieuw_dossiers_afgehandeld"],
            units: "afgehandeld",
            colour: "lightBlue"
        });
        pieData.push({
            label: "In behandeling",
            value: data[0]["fs_dossiers_in_behandeling"],
            new: data[0]["fs_nieuw_dossiers_in_behandeling"],
            units: "in behandeling",
            colour: "moss"
        });
        return {
            "history": history,
            "latest": data[0],
            "slice": history,
            "pie": pieData
        };
    }
    draw(data) {
        return __awaiter(this, void 0, void 0, function* () {
            this.scales.x.set(data.slice.map(d => d["time"]));
            this.scales.y.set(data.slice.map(d => d["value"]));
            this.scales.r.set([data.latest['fs_schademeldingen'], data.latest['fs_dossiers_in_behandeling'], data.latest['fs_dossiers_afgehandeld']]);
            this.svg.layers.data
                .append("g")
                .attr("class", "title")
                .attr("transform", "translate(20,30)")
                .append("text")
                .text("Fysieke schade")
                .style("font-family", "NotoSans Regular")
                .style("font-size", "1rem")
                .style("line-height", "1.33");
            //  .style("border-bottom","1px solid black")
            this.svg.layers.data
                .append("g")
                .attr("class", "date")
                .attr("text-anchor", "end")
                .attr("transform", "translate(" + (this.dimensions.width - 140) + ",30)")
                .append("text")
                .text("week 23 - 2023");
            yield this.meldingen.draw(data.latest);
            yield this.pie.draw(data.pie);
            // await this.trend.draw(data.slice);
            return;
        });
    }
    redraw(data) {
        const _super = Object.create(null, {
            redraw: { get: () => super.redraw }
        });
        return __awaiter(this, void 0, void 0, function* () {
            yield _super.redraw.call(this, data);
            this.scales.y.reset([10, this.config.extra.trendHeight]);
            yield this.meldingen.redraw();
            yield this.pie.redraw();
            // await this.trend.redraw();
            return;
        });
    }
    update(data, segment, update) {
        const _super = Object.create(null, {
            _update: { get: () => super._update }
        });
        return __awaiter(this, void 0, void 0, function* () {
            yield _super._update.call(this, data, segment, update);
        });
    }
}
