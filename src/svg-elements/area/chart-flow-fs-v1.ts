import * as d3 from 'd3';
import { colours } from  '../../_styleguide/_colours'
import {breakpoints} from "../../_styleguide/_breakpoints";
import { DataPart, GraphData } from '../../types/data';

export class ChartFlowFsV1 {

    start_rect_ves_oud;
    start_rect_ves;
    start_rect_dh;
    start_rect_cm;

    end_rect_ves_oud;
    end_rect_ves;
    end_rect_dh;
    end_rect_cm;

    flow_ves_oud;
    flow_ves;
    flow_dh;
    flow_cm;

    fill_ves_oud;
    fill_subtotal;
    nieuw_beleid;

    flow_cm_arc_1
    flow_cm_fill_h
    flow_cm_arc_2
    flow_cm_fill_v

    flow_ves_arc_1
    flow_ves_fill_h
    flow_ves_arc_2
    flow_ves_fill_v

    flow_dh_arc_1
    flow_dh_fill_v1
    flow_dh_arc_2
    flow_dh_fill_v2

    constructor(
        private ctrlr
    ) {}

    draw(data: any) {

       const superLightGray = colours.blue[1];

        this.start_rect_ves = this.ctrlr.svg.layers.data.
            append("rect")
            .attr("class","ves start")
            .style("fill", superLightGray)
            .attr("height", 24)
            ;

        this.start_rect_dh = this.ctrlr.svg.layers.data.
            append("rect")
            .attr("class","dh start")
            .style("fill", superLightGray)
            .attr("height", 24)
            ;

        this.start_rect_cm = this.ctrlr.svg.layers.data.
            append("rect")
            .attr("class","cm start")
            .style("fill", superLightGray)
            .attr("height", 24)
            ;

        this.start_rect_ves_oud = this.ctrlr.svg.layers.data.
            append("rect")
            .attr("class","ves_oud start")
            .style("fill", colours.gray[2])
            .attr("height", 24)
            ;

        this.end_rect_ves_oud = this.ctrlr.svg.layers.data.
            append("rect")
            .attr("class","end")
            .style("fill", colours.gray[2])
            .attr("width", 24)
            ;

        this.end_rect_ves = this.ctrlr.svg.layers.data.
            append("rect")
            .attr("class","end")
            .style("fill", superLightGray)
            .attr("height", 4)
            ;

        this.end_rect_dh = this.ctrlr.svg.layers.data.
            append("rect")
            .attr("class","end")
            .style("fill", superLightGray)
            .attr("height", 4)
            ;

        this.end_rect_cm = this.ctrlr.svg.layers.data.
            append("rect")
            .attr("class","end")
            .style("fill", superLightGray)
            .attr("height", 4)
            ;

        this.flow_ves = this.ctrlr.svg.layers.data.
            append("path")
            .attr("class","flow")
            .style("stroke", superLightGray)
            .style("fill", superLightGray) 

        this.flow_dh = this.ctrlr.svg.layers.data.
            append("path")
            .attr("class","flow")
            .style("stroke", superLightGray)
            .style("fill", superLightGray)

        this.flow_cm = this.ctrlr.svg.layers.data.
            append("path")
            .attr("class","flow")
            .style("stroke", superLightGray)
            .style("fill", superLightGray)

        this.flow_ves_oud = this.ctrlr.svg.layers.data.
            append("path")
            .attr("class","flow")
            .style("stroke", colours.gray[2])
            .style("fill", colours.gray[2])

        this.fill_ves_oud = this.ctrlr.svg.layers.data.
            append("rect")
            .attr("class","fill")
            .style("stroke", colours.gray[2])
            .style("fill", colours.gray[2])

        this.fill_subtotal = this.ctrlr.svg.layers.data.
            append("rect")
            .attr("class","fill")
            .style("stroke", "transparent")
            .style("fill", superLightGray)

        this.flow_cm_arc_1 = this.ctrlr.svg.layers.data.
            append("path")
            .attr("class","arc1")
            .style("stroke", "transparent")
            .style("fill", superLightGray)

        this.flow_cm_fill_h = this.ctrlr.svg.layers.data.
            append("rect")
            .attr("class","fill1")
            .style("stroke", "transparent")
            .style("fill", superLightGray)

        this.flow_cm_arc_2 = this.ctrlr.svg.layers.data.
            append("path")
            .attr("class","arc2")
            .style("stroke", "transparent")
            .style("fill", superLightGray)

        this.flow_cm_fill_v = this.ctrlr.svg.layers.data.
            append("rect")
            .attr("class","fill2")
            .style("stroke", "transparent")
            .style("fill", superLightGray)

        this.flow_ves_arc_1 = this.ctrlr.svg.layers.data.
            append("path")
            .attr("class","arc1")
            .style("stroke", "transparent")
            .style("fill", superLightGray)

        this.flow_ves_fill_h = this.ctrlr.svg.layers.data.
            append("rect")
            .attr("class","fill1")
            .attr("class","fill1")
            .style("stroke", "transparent")
            .style("fill", superLightGray)

        this.flow_ves_arc_2 = this.ctrlr.svg.layers.data.
            append("path")
            .attr("class","arc2")
            .style("stroke", "transparent")
            .style("fill", superLightGray)

        this.flow_ves_fill_v = this.ctrlr.svg.layers.data.
            append("rect")
            .attr("class","fill2")
            .style("stroke", "transparent")
            .style("fill", superLightGray)

        this.flow_dh_arc_1 = this.ctrlr.svg.layers.data.
            append("path")
            .attr("class","arc1")
            .style("stroke", "transparent")
            .style("fill", superLightGray)

        this.flow_dh_fill_v1 = this.ctrlr.svg.layers.data.
            append("rect")
            .attr("class","fill1")
            .style("stroke", "transparent")
            .style("fill", superLightGray)

        this.flow_dh_arc_2 = this.ctrlr.svg.layers.data.
            append("path")
            .attr("class","arc2")
            .style("stroke", "transparent")
            .style("fill", superLightGray)

        this.flow_dh_fill_v2 = this.ctrlr.svg.layers.data.
            append("rect")
            .attr("class","fill2")
            .style("stroke", "transparent")
            .style("fill", superLightGray)

        // this.nieuw_beleid = this.ctrlr.svg.layers.data.
        //     append("text")
        //     .text("Nieuwe aanpak")
        //     .attr("text-anchor","middle")

    }

    getPostions(id: string) {


        const flowEl = this.ctrlr.element.getBoundingClientRect();

        let el = document.getElementById(id).getBoundingClientRect();

        let relativeTop  = el.top - flowEl.top;
        let relativeLeft =  el.left - flowEl.left;
        let width = el.width;
        let height = el.height;
        
        return { relativeTop, relativeLeft, width, height }
    }


    redraw(data: GraphData) {


        /// mmm maybe i should use d3.area with curve 

        let self = this;

        const cumm =  parseInt(Object.values(data.latest).reduce((sum, value) => sum + value, 0));

        let sum = (this.ctrlr.element.getBoundingClientRect().width / 2) - (.1 * this.ctrlr.scales.w.fn(cumm));

        let v = .2 * parseInt(this.ctrlr.scales.w.fn(data.latest["ves_aanvragen"]))

        this.start_rect_ves
            .attr("x", sum)
            .attr("y", 0)
            .attr("width", v);

            sum = sum + v;

        v = .2 * parseInt(this.ctrlr.scales.w.fn(data.latest["dh_aanvragen"]))

        this.start_rect_dh
            .attr("x", sum)
            .attr("y", 0)
            .attr("width", v);

            sum = sum + v;


        v = .2 * parseInt(this.ctrlr.scales.w.fn(data.latest["cm_aanvragen"]))

        this.start_rect_cm
            .attr("x", sum)
            .attr("y", 0)
            .attr("width", v);

            sum = sum + v;

        this.start_rect_ves_oud
            .attr("x", sum)
            .attr("y", 0)
            .attr("width", .2 * this.ctrlr.scales.w.fn(data.latest["ves_aanvragen_oud"]));


        // VES OUD
        let veso = this.getPostions("fs_ves_oud");

        this.end_rect_ves_oud
            .attr("x", veso.relativeLeft)
            .attr("y", veso.relativeTop + 60)
            .attr("height",  .2 * this.ctrlr.scales.w.fn(data.latest["ves_aanvragen_oud"]))


        let ves = this.getPostions("fs_ves_nieuw");
    
        this.end_rect_ves
            .attr("x", ves.relativeLeft + (ves.width / 2) - (.1 * this.ctrlr.scales.w.fn(data.latest["ves_aanvragen"])))
            .attr("y", ves.relativeTop - 28)
            .attr("width", .2 * this.ctrlr.scales.w.fn(data.latest["ves_aanvragen"]))


        let dh = this.getPostions("fs_daadwerkelijk_herstel");
        
        this.end_rect_dh
            .attr("x", dh.relativeLeft + (dh.width / 2) - (.1 * this.ctrlr.scales.w.fn(data.latest["dh_aanvragen"])))
            .attr("y", dh.relativeTop - 28)
            .attr("width", .2 * this.ctrlr.scales.w.fn(data.latest["dh_aanvragen"]))
       
        let cm = this.getPostions("fs_causaal_maatwerk");
        
        this.end_rect_cm
            .attr("x", cm.relativeLeft + (cm.width / 2) - (.1 * this.ctrlr.scales.w.fn(data.latest["cm_aanvragen"])))
            .attr("y", cm.relativeTop - 28)
            .attr("width", .2 * this.ctrlr.scales.w.fn(data.latest["cm_aanvragen"]))


        // let ves_oud_data : any = [
        //    { 
        //     x : parseInt(self.start_rect_ves_oud.attr("x")),
        //     y: parseInt(self.start_rect_ves_oud.attr("y")),
        //    },
        //    { 
        //     x : parseInt(self.start_rect_ves_oud.attr("x")),
        //     y: 100 + parseInt(self.start_rect_ves_oud.attr("y")),
        //    },
        //    { 
        //     x : parseInt(self.end_rect_ves_oud.attr("x")),
        //     y: parseInt(self.start_rect_ves_oud.attr("y")) + parseInt(self.start_rect_ves_oud.attr("width"))
        //    }
        // ]

        // let ves_oud_path = lineGenerator(ves_oud_data);

        let heightOffset = 0;
        let width = .2 * this.ctrlr.scales.w.fn(data.latest["ves_aanvragen_oud"]);
        let innerRadius =  parseInt(self.end_rect_ves_oud.attr("y")) - parseInt(self.start_rect_ves_oud.attr("y")) -24;
        const nb_subtotal =  data.latest["ves_aanvragen"] + data.latest["dh_aanvragen"] + data.latest["cm_aanvragen"];

        this.flow_ves_oud
            .attr("transform", "translate(" + (parseInt(self.start_rect_ves_oud.attr("x")) + innerRadius + width ) + ", 24)")
            .attr("d", d3.arc()({
              innerRadius: innerRadius,
              outerRadius: innerRadius + width,
              startAngle: Math.PI,
              endAngle: 1.5 * Math.PI
            }))
            ;

        this.fill_ves_oud
            .attr("height", width)
            .attr("width", parseInt(self.end_rect_ves_oud.attr("x")) - (parseInt(self.start_rect_ves_oud.attr("x")) + width + innerRadius))
            .attr("x", (parseInt(self.start_rect_ves_oud.attr("x")) + innerRadius + width) )
            .attr("y", 24 + innerRadius)

            const subTotalHeight = width + innerRadius + heightOffset;

        this.fill_subtotal
            .attr("height", subTotalHeight)
            .attr("width", .2 * this.ctrlr.scales.w.fn(nb_subtotal))
            .attr("x",(parseInt(self.start_rect_ves.attr("x"))) )
            .attr("y", 24)


            console.log(.1 * this.ctrlr.scales.w.fn(sum)); 

        // this.nieuw_beleid
        //     .attr("x",(parseInt(self.start_rect_ves.attr("x")) + (.1 * this.ctrlr.scales.w.fn(nb_subtotal))) )
        //     .attr("y", 24 +  subTotalHeight)
         
         
        // width = .2 * this.ctrlr.scales.w.fn(data.latest["cm_aanvragen"]);
        // innerRadius =  24 * 2;
        const radius = 24;

        const ves_width = parseInt(this.start_rect_ves.attr("width"));

        this.flow_ves_arc_1
            .attr("transform", "translate(" + ( parseInt(this.start_rect_ves.attr("x")) - radius)
                
                + "," +  (subTotalHeight + 24)  + ")"
            
            )
            .attr("d", d3.arc()({
              innerRadius: radius,
              outerRadius: radius + ves_width,
              startAngle: Math.PI * 0.5,
              endAngle: Math.PI
            }))
            ; 

        this.flow_ves_fill_h
            .attr("height", ves_width)
            .attr("width", this.start_rect_ves.attr("x") - this.end_rect_ves.attr("x") - 2 * (radius) - ves_width )
            .attr("x", parseInt(this.end_rect_ves.attr("x")) + radius + ves_width )
            .attr("y", subTotalHeight + 24 + radius )

        this.flow_ves_arc_2
            .attr("transform", "translate(" + (parseInt(this.end_rect_ves.attr("x"))  + radius + ves_width)
                
                + "," +  (subTotalHeight + 24 + (2 * radius) + ves_width)  + ")"
        
            )
            .attr("d", d3.arc()({
                innerRadius: radius,
                outerRadius: radius + ves_width,
                startAngle: 1.5 * Math.PI,
                endAngle: 2 * Math.PI
            }))
            ; 

        this.flow_ves_fill_v
            .attr("height", parseInt(this.end_rect_ves.attr("y")) - (subTotalHeight + 24 + radius + ves_width + radius))
            .attr("width", ves_width)
            .attr("x", parseInt(this.end_rect_ves.attr("x")))
            .attr("y", subTotalHeight + 24 + radius + ves_width + radius )

        const cm_width = parseInt(this.start_rect_cm.attr("width"));

        this.flow_cm_arc_1
            .attr("transform", "translate(" + (parseInt(this.start_rect_cm.attr("x")) + radius + cm_width)
                
                + "," +  (subTotalHeight + 24)  + ")"
            
            )
            .attr("d", d3.arc()({
              innerRadius: radius,
              outerRadius: radius + cm_width,
              startAngle: Math.PI,
              endAngle: 1.5 * Math.PI
            }))
            ; 


        this.flow_cm_fill_h
            .attr("height", cm_width)
            .attr("width", this.end_rect_cm.attr("x") - this.start_rect_cm.attr("x") - 2 * (radius) - cm_width)
            .attr("x", parseInt(this.start_rect_cm.attr("x")) + radius + cm_width )
            .attr("y", subTotalHeight + 24 + radius )


        this.flow_cm_arc_2
            .attr("transform", "translate(" + (parseInt(this.end_rect_cm.attr("x"))  - radius)
                
                + "," +  (subTotalHeight + 24 + (2 * radius) + cm_width)  + ")"
        
            )
            .attr("d", d3.arc()({
                innerRadius: radius,
                outerRadius: radius + cm_width,
                startAngle: 0,
                endAngle: .5 * Math.PI
            }))
            ; 
            

        this.flow_cm_fill_v
            .attr("height", parseInt(this.end_rect_cm.attr("y")) - (subTotalHeight + 24 + radius + cm_width + radius))
            .attr("width", cm_width)
            .attr("x", parseInt(this.end_rect_cm.attr("x")))
            .attr("y", subTotalHeight + 24 + radius + cm_width + radius )


        const dh_width = parseInt(this.start_rect_dh.attr("width"));

        const radius_smaller = .5 * dh_width;
        const extra_height_offset = 32;

        this.flow_dh_arc_1
            .attr("transform", "translate(" + (parseInt(this.start_rect_dh.attr("x")) + radius_smaller + dh_width)
                
                + "," +  (subTotalHeight + 24 + extra_height_offset)  + ")"
            
            )
            .attr("d", d3.arc()({
              innerRadius: radius_smaller,
              outerRadius: radius_smaller + dh_width,
              startAngle: Math.PI,
              endAngle: 1.5 * Math.PI
            }))
            ; 

        this.flow_dh_fill_v1
            .attr("height", extra_height_offset)
            .attr("width", dh_width)
            .attr("x", parseInt(this.start_rect_dh.attr("x"))  )
            .attr("y", subTotalHeight + 24 )
            ; 

        this.flow_dh_arc_2
            .attr("transform", "translate(" + (parseInt(this.end_rect_dh.attr("x"))  - radius_smaller)
                
                + "," +  (subTotalHeight + 24 + (2 * radius_smaller) + dh_width + extra_height_offset)  + ")"
        
            )
            .attr("d", d3.arc()({
                innerRadius: radius_smaller,
                outerRadius: radius_smaller + dh_width,
                startAngle: 0,
                endAngle: .5 * Math.PI
            }))
            ; 
            
        this.flow_dh_fill_v2
            .attr("height", parseInt(this.end_rect_dh.attr("y")) - (subTotalHeight + 24 + radius + cm_width + radius))
            .attr("width", dh_width)
            .attr("x", parseInt(this.end_rect_dh.attr("x")))
            .attr("y", subTotalHeight + 24 + radius + dh_width + radius )

        // this.flow_ves_oud
        //     .attr("d", `
        
        //         M ${)},${parseInt(self.start_rect_ves_oud.attr("y")) + parseInt(self.start_rect_ves_oud.attr("height"))}
        //         H ${parseInt(self.start_rect_ves_oud.attr("x")) + parseInt(self.start_rect_ves_oud.attr("width"))} 
        //         S 250,120 ${parseInt(self.end_rect_ves_oud.attr("x"))},${self.end_rect_ves_oud.attr("y")} 
        //         V ${parseInt(self.end_rect_ves_oud.attr("y")) + parseInt(self.end_rect_ves_oud.attr("height"))}
        //         S 150,280 ${self.start_rect_ves_oud.attr("x")},${parseInt(self.start_rect_ves_oud.attr("y")) + parseInt(self.start_rect_ves_oud.attr("height"))}
        //         Z
        //     `
        //     );

        //     let path = `
            
        //     M ${self.start_rect_cm.attr("x")},${parseInt(self.start_rect_cm.attr("y")) + parseInt(self.start_rect_cm.attr("height"))}
        //     H ${parseInt(self.start_rect_cm.attr("x")) + parseInt(self.start_rect_cm.attr("width"))} 
        //     S 250,120 ${parseInt(self.end_rect_cm.attr("x"))},${self.end_rect_cm.attr("y")} 
        //     V ${parseInt(self.end_rect_cm.attr("y")) + parseInt(self.end_rect_cm.attr("height"))}
        //     S 150,280 ${self.start_rect_cm.attr("x")},${parseInt(self.start_rect_cm.attr("y")) + parseInt(self.start_rect_cm.attr("height"))}
        //     Z
            
        //     `


        // this.flow_cm
        //     .attr("d", `
        
        //         M ${self.start_rect_cm.attr("x")},${parseInt(self.start_rect_cm.attr("y")) + parseInt(self.start_rect_cm.attr("height"))}
        //         H ${parseInt(self.start_rect_cm.attr("x")) + parseInt(self.start_rect_cm.attr("width"))} 
        //         S 250,120 ${parseInt(self.end_rect_cm.attr("x"))},${self.end_rect_cm.attr("y")} 
        //         V ${parseInt(self.end_rect_cm.attr("y")) + parseInt(self.end_rect_cm.attr("height"))}
        //         S 150,280 ${self.start_rect_cm.attr("x")},${parseInt(self.start_rect_cm.attr("y")) + parseInt(self.start_rect_cm.attr("height"))}
        //         Z
        //     `
        //     );


    }


}