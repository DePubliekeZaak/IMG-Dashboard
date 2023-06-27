import { WeekMeldingenV1, ChartPieWeek, ChartBarWeekV1  } from '@local/elements';
import { DataPart, GraphData } from "@local/d3_types";
import { GraphControllerV2 } from "@local/d3_graphs";
import { IGraphMapping } from '@local/d3_types';

export default class WeekV1 extends GraphControllerV2  {

    parentEl;
    
    meldingen;
    pie;
    trend;

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
    }

    pre() {

        this._addScale("x","band","horizontal-reverse","time");
        this._addScale("y","linear","custom","value");
        this._addScale("r","radius","radius","value");
      //  this._addScale("m","log","horizontal","meldingen")
        this._addPadding(0,0,0,0);
        this._addMargin(0,0,0,0);
    }

    async init(size?: number[]) {

        super._init();

        const svgId = "svg-wrapper-" + this.mapping.slug
        const container = this.main.window.document.createElement('section');
        // container.style.height = "400px";
        // container.style.width = "800px";
        container.style.overflow = "hidden";
        container.id = svgId;
        this.element.appendChild(container);

        super._svg(container);
        // this.dimensions = this.chartDimensions.fix(size)

        this.config.paddingInner = .2;
        this.config.extra.minRadius = 20;
        this.config.extra.radiusFactor = .5;

        this.config.extra.innerRadius = 20;
        this.config.extra.maxRadius = 100;

        this.config.extra.trendHeight = 60
    
        this.meldingen = new WeekMeldingenV1(this);
        this.pie = new ChartPieWeek(this);
        // this.trend = new ChartBarWeekV1(this);

        await this.update(this.data,this.segment,false);
    }

    prepareData(data: any[]) : any  {

        const history = []; // data; 
        const pieData = []
        // this data merging .. has been skipped
        const parameter = "fs_nieuw_dossiers_afgehandeld";

        for (const week of data) {


            history.push({
                "time": week["_date"],
                "label": week["_week"],
                "value": week["nieuw_schademeldingen"],
                "colour": "orange"
            })

            history.push({
                "time": week["_date"],
                "label": week["_week"],
                "value": week[parameter],
                "colour": "lightBlue"
            })
        }

        pieData.push({
            label : "Afgehandeld",
            value : data[0]["fs_dossiers_afgehandeld"],
            new: data[0]["fs_nieuw_dossiers_afgehandeld"],
            units: "afgehandeld",
            colour: "lightBlue"
        })

        pieData.push({
            label : "In behandeling",
            value : data[0]["fs_dossiers_in_behandeling"],
            new : data[0]["fs_nieuw_dossiers_in_behandeling"],
            units: "in behandeling",
            colour: "moss"
        })

        return { 
            "history" : history,
            "latest" : data[0], 
            "slice" : history, // .slice(0,16), 
            "pie" : pieData
        };
    }

    async draw(data: any): Promise<void> {

        this.scales.x.set(data.slice.map(d => d["time"]));
        this.scales.y.set(data.slice.map(d => d["value"]));
        this.scales.r.set([data.latest['fs_schademeldingen'],data.latest['fs_dossiers_in_behandeling'],data.latest['fs_dossiers_afgehandeld']])

        this.svg.layers.data
            .append("g")
            .attr("class","title")
            .attr("transform","translate(20,30)")
            .append("text")
            .text("Fysieke schade")
            .style("font-family","NotoSans Regular")
            .style("font-size","1rem")
            .style("line-height","1.33")
          //  .style("border-bottom","1px solid black")

        this.svg.layers.data
            .append("g")
            .attr("class","date")
            .attr("text-anchor","end")
            .attr("transform","translate(" + (this.dimensions.width - 140) + ",30)")
            .append("text")
            .text("week 23 - 2023")

        await this.meldingen.draw(data.latest);
        await this.pie.draw(data.pie);
        // await this.trend.draw(data.slice);
        return;
    }

    async redraw(data: any): Promise<void> {

        await super.redraw(data);

        this.scales.y.reset([10, this.config.extra.trendHeight]);

        await this.meldingen.redraw();
        await this.pie.redraw();
        // await this.trend.redraw();
        return;
    }



    async update(data: any, segment: string, update: boolean) {
        await super._update(data,segment,update);
    }
}
