import { xor } from "lodash"
import { IGraphControllerV2 } from "../charts/graph-v2";

const debug = (c: any, d: any,v: any) => {

 

    if(isNaN(v)) {

        if(d === 'undefined') { console.log("d is undefined"); }

        // console.log(c);

        // for (let s of Object.keys(c.ctrlr.scales)) {

        //     console.log(s);
        //     console.log("range:" + c.ctrlr.scales[s].scale.range());
        //     console.log("domain:" + c.ctrlr.scales[s].scale.domain());
        // }
        
    } else {

        return v;
    }

}

export default debug;