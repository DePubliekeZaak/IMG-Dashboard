import { CirclePlusV1, ChartPieWeek, ChartBarWeekV1, ArrowV1, ChartBackgroundAreas  } from '@local/elements';
import { DataPart, GraphData } from "@local/d3_types";
import { GraphControllerV2 } from "@local/d3_graphs";
import { IGraphMapping } from '@local/d3_types';
import { WeekVerleendV1 } from '@local/elements';

export default class PauzeknopV1 extends GraphControllerV2  {

    parentEl;
    els;

    constructor(
        public main: any,
        public data : any,
        public element : HTMLElement,
        public mapping: IGraphMapping,
        public segment: string,
        public size?: number[]
    ){
        super(main,data,element,mapping,segment,size);
        this.pre();
        this.els = {};
    }

    pre() {

        this._addScale("x","radius","radius","_week");
        this._addScale("y","radius","radius","value");
        this._addPadding(0,0,0,0);
        this._addMargin(0,0,0,0);
    }

    async init(size?: number[]) {

        super._init();

        const svgId = "svg-wrapper-" + this.mapping.slug
        const container = this.main.window.document.createElement('section');
        container.style.height = "100%";
        container.style.overflow = "hidden";
        container.id = svgId;
        this.element.appendChild(container);

        super._svg(container);
        // this.dimensions = this.chartDimensions.fix(size)

        this.config.paddingInner = .2;


        this.els.chart = new ChartBackgroundAreas(this);

        await this.update(this.data,this.segment,false);
    }

    prepareData(data: any[]) : any {

       // const history = []; // data; 
        const meldingen = [];
        const inBehandeling = [];
        const verleend = [];
        const ves = [];
        const maatwerk = [];
        // this data merging .. has been skipped
        const parameter = "fs_nieuw_dossiers_afgehandeld";

        meldingen.push({
            label : "Schademeldingen",
            value : data[0]["fs_schademeldingen"],
            delta: data[0]["fs_schademeldingen_nieuw"],
            units: "schademeldingen",
            colour: "orange"
        })

        inBehandeling.push({
            label : "In behandeling",
            value : data[0]["fs_schademeldingen_in_behandeling"] - data[0]["fs_gepauzeerd"],
            delta : data[0]["fs_schademeldingen_in_behandeling_nieuw"] - data[0]["fs_gepauzeerd_nieuw"],
            units: "in behandeling",
            colour: "moss"
        })

        inBehandeling.push({
            label : "Gepauzeerd",
            value : data[0]["fs_gepauzeerd"],
            delta : data[0]["fs_gepauzeerd_nieuw"],
            units: "gepauzeerd",
            colour: "blue"
        })

        verleend.push({
            label : "Totaal verleend",
            value : data[0]["fs_totaal_verleend"],
            delta : data[0]["fs_totaal_verleend_nieuw"],
            format: "in currency",
            colour: "black"
        })

        ves.push({
            label : "Vaste vergoeding",
            value : data[0]["fs_ves_afgehandeld"],
            delta : data[0]["fs_ves_afgehandeld_nieuw"],
            units: "vaste vergoeding",
            colour: "blue"
        })

        maatwerk.push({
            label : "Maatwerk",
            value : data[0]["fs_schademeldingen_afgehandeld"] - data[0]["fs_ves_afgehandeld"],
            delta : data[0]["fs_schademeldingen_afgehandeld_nieuw"] - data[0]["fs_ves_afgehandeld_nieuw"],
            units: "maatwerk",
            colour: "blue"
        })

        return { 
            trend,
        };
    }

    async draw(data: any): Promise<void> {

        this.scales.x.set(data.slice.map(d => d["_week"]));
        this.scales.y.set(data.slice.map(d => d["value"]));

        const values = [0];
        values.push(data.meldingen[0].value);

        await this.els.chart(data.trend);

        this.svg.layers.data
            .append("g")
            .attr("class","title")
            .attr("transform","translate(20,30)")
            .append("text")
            .text("Fysieke schade")
            .style("font-family","NotoSans Regular")
            .style("font-size","1rem")
            .style("line-height","1.33")


        return;
    }

    async redraw(data: any): Promise<void> {

        await super.redraw(data);
        await this.els.chart.redraw();

        return;
    }



    async update(data: any, segment: string, update: boolean) {
        await super._update(data,segment,update);
    }
}
