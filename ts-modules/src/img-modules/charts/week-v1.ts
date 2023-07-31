import { WeekMeldingenV1, ChartPieWeek, ChartBarWeekV1, ArrowV1  } from '@local/elements';
import { DataPart, GraphData } from "@local/d3_types";
import { GraphControllerV2 } from "@local/d3_graphs";
import { IGraphMapping } from '@local/d3_types';
import { WeekVerleendV1 } from '@local/elements';

export default class WeekV1 extends GraphControllerV2  {

    parentEl;
    
    meldingen;
    pie;
    verleend;

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

        // this._addScale("x","band","horizontal-reverse","time");
        // this._addScale("y","linear","custom","value");
        this._addScale("r","radius","radius","value");
      //  this._addScale("m","log","horizontal","meldingen")
        this._addPadding(0,0,0,0);
        this._addMargin(0,0,0,0);
    }

    async init(size?: number[]) {

        super._init();

        const svgId = "svg-wrapper-" + this.mapping.slug
        const container = this.main.window.document.createElement('section');
        container.style.height = "100%";
        // container.style.background = "";
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
        this.verleend = new WeekVerleendV1(this);
        // this.trend = new ChartBarWeekV1(this);

        await this.update(this.data,this.segment,false);
    }

    prepareData(data: any[]) : any {

       // const history = []; // data; 
        const meldingen = [];
        const pieData = [];
        const verleend = [];
        // this data merging .. has been skipped
        const parameter = "fs_nieuw_dossiers_afgehandeld";

        // for (const week of data) {

        //     history.push({
        //         "time": week["_date"],
        //         "label": week["_week"],
        //         "value": week["nieuw_schademeldingen"],
        //         "colour": "orange"
        //     })

        //     history.push({
        //         "time": week["_date"],
        //         "label": week["_week"],
        //         "value": week[parameter],
        //         "colour": "lightBlue"
        //     })
        // }

        meldingen.push({
            label : "Schademeldingen",
            value : data[0]["fs_schademeldingen"],
            delta: data[0]["fs_schademeldingen_nieuw"],
            units: "schademeldingen",
            colour: "orange"
        })

        pieData.push({
            label : "Afgehandeld",
            value : data[0]["fs_schademeldingen_afgehandeld"],
            delta: data[0]["fs_schademeldingen_afgehandeld_nieuw"],
            units: "afgehandeld",
            colour: "lightBlue"
        })

        pieData.push({
            label : "In behandeling",
            value : data[0]["fs_schademeldingen_in_behandeling"],
            delta : data[0]["fs_schademeldingen_in_behandeling_nieuw"],
            units: "in behandeling",
            colour: "moss"
        })

        verleend.push({
            label : "Totaal verleend",
            value : data[0]["fs_totaal_verleend"],
            delta : data[0]["fs_totaal_verleend_nieuw"],
            format: "in currency",
            colour: "black"
        })

        return { 
            meldingen,
            "pie" : pieData,
            verleend
        };
    }

    async draw(data: any): Promise<void> {

        // this.scales.x.set(data.slice.map(d => d["time"]));
        // this.scales.y.set(data.slice.map(d => d["value"]));

        const values = [0];
        values.push(data.meldingen[0].value);
        for (const slice of data.pie) {
            values.push(slice.value);
        }
        this.scales.r.set(values)

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
            .text("week xx - 2023")

        await this.meldingen.draw(data.meldingen);
        await this.pie.draw(data.pie);
        await this.verleend.draw(data.verleend);
        return;
    }

    async redraw(data: any): Promise<void> {

        await super.redraw(data);
        await this.meldingen.redraw();
        await this.pie.redraw(data.pie);
        await this.verleend.redraw(data.verleend);

        this.svg.pie_wrapper
        .attr("transform", (d) => {
             const x =  2 * this.dimensions.width / 3;
             const y = this.dimensions.height / 2;
             return "translate(" + x + "," + y + ") rotate(-45)"
        })
        
        return;
    }



    async update(data: any, segment: string, update: boolean) {
        await super._update(data,segment,update);
    }
}
