import { CirclePlusV1, ChartPieWeek, ChartBarWeekV1, ArrowV1  } from '@local/elements';
import { DataPart, GraphData } from "@local/d3_types";
import { GraphControllerV2 } from "@local/d3_graphs";
import { IGraphMapping } from '@local/d3_types';
import { WeekVerleendV1 } from '@local/elements';

export default class WeekV2 extends GraphControllerV2  {

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

        this.els.meldingen = new CirclePlusV1(this,"meldingen");
        this.els.pie = new ChartPieWeek(this);
        this.els.ves = new CirclePlusV1(this,"ves");
        this.els.maatwerk = new CirclePlusV1(this,"maatwerk");
        this.els.nieuw = new ArrowV1(this,"nieuw")
        this.els.naarVes = new ArrowV1(this,"naar_ves")
        this.els.naarMaatwerk = new ArrowV1(this,"naar_maatwerk")


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
            meldingen,
            inBehandeling,
            verleend,
            ves,
            maatwerk
        };
    }

    async draw(data: any): Promise<void> {

        // this.scales.x.set(data.slice.map(d => d["time"]));
        // this.scales.y.set(data.slice.map(d => d["value"]));

        const values = [0];
        values.push(data.meldingen[0].value);
        // for (const slice of data.inBehandeling) {
        //     values.push(slice.value);
        // }
        // console.log(values);
        this.scales.r.set(values)

     
          //  .style("border-bottom","1px solid black")

        // this.svg.layers.data
        //     .append("g")
        //     .attr("class","date")
        //     .attr("text-anchor","end")
        //     .attr("transform","translate(" + (this.dimensions.width - 140) + ",30)")
        //     .append("text")
        //     .text("week xx - 2023")

        await this.els.meldingen.draw(data.meldingen);
        await this.els.pie.draw(data.inBehandeling);
        await this.els.ves.draw(data.ves);
        await this.els.maatwerk.draw(data.maatwerk);
        await this.els.nieuw.draw(data.maatwerk);
        await this.els.naarVes.draw(data.maatwerk);
        await this.els.naarMaatwerk.draw(data.maatwerk);
        // await this.verleend.draw(data.verleend);

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
        await this.els.meldingen.redraw();
        await this.els.pie.redraw(data.inBehandeling);
        await this.els.ves.redraw(data.ves);
        await this.els.maatwerk.redraw(data.maatwerk);
        await this.els.nieuw.redraw(data.maatwerk);

        this.svg.meldingen.wrapper
            .attr("transform", (d,i) => {
                const x = 0; 
                const y = this.dimensions.height / 2;
                return "translate(" + x + "," + y + ")"
            })

        this.svg.meldingen.textWrapper
            .attr("transform", (d,i) => {
                const x = this.scales.r.scale(d.value) + -20;
                const y = 0;
                return "translate(" + x + "," + y + ")"
            })

        this.svg.pie_wrapper
            .attr("transform", (d) => {
                const x =  1 * this.dimensions.width / 2;
                const y = this.dimensions.height / 2;
                return "translate(" + x + "," + y + ") rotate(0)"
            })


        this.svg.textWrapper
            .attr("transform", (d) => {
                const x =  40;
                const y = 100;
                return "translate(" + x + "," + y + ")"
            })
            .filter( (d,i) => i == 1) 
            .attr("transform", (d) => {
                const x =  -48;
                const y = -48;
                return "translate(" + x + "," + y + ")"
            });

        this.svg.ves.wrapper
            .attr("transform", (d) => {
                const x =  this.dimensions.width - 160;
                const y = 60;
                return "translate(" + x + "," + y + ")"
            })

        this.svg.ves.textWrapper
            .attr("transform", (d) => {
                const x =  120;
                const y = 10;
                return "translate(" + x + "," + y + ")"
            })

        this.svg.maatwerk.wrapper
            .attr("transform", (d) => {
                const x =  this.dimensions.width - 40;
                const y = this.dimensions.height - 40;
                return "translate(" + x + "," + y + ")"
            })

        this.svg.maatwerk.textWrapper
            .attr("transform", (d) => {
                const x =  0;
                const y = -20;
                return "translate(" + x + "," + y + ")"
            })

        this.svg.nieuw.path
            .attr("x1",200)  
            .attr("y1",this.dimensions.height / 2)  
            .attr("x2",340)  
            .attr("y2",this.dimensions.height / 2);

        this.svg.naar_ves.path
            .attr("x1",this.dimensions.width / 2 + 50)  
            .attr("y1",this.dimensions.height / 2)  
            .attr("x2",this.dimensions.width / 2 + 170)  
            .attr("y2",this.dimensions.height / 2 - 64);

        this.svg.naar_maatwerk.path
            .attr("x1",this.dimensions.width / 2 + 50)  
            .attr("y1",this.dimensions.height / 2)  
            .attr("x2",this.dimensions.width / 2 + 170)  
            .attr("y2",this.dimensions.height / 2 + 64);

        return;
    }



    async update(data: any, segment: string, update: boolean) {
        await super._update(data,segment,update);
    }
}
