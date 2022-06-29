import _ from "lodash";
import { DataPart, IKeyValueObject } from "../types/data";
import { GraphObject } from "../types/graphObject";
import { Mapping } from "../types/mapping";
import { isArrayOfMaps } from "./data-with-history.functions";

export function getNeededColumns(data: any, graphObject: any): string[] {

    let m = graphObject.mapping;
    let columns = ['_date'];

    if(isArrayOfMaps(m)) {
        columns = columns.concat(m.map( (c: Mapping) => c.column));
    }

    m.forEach( m => {

        while (true) {
            if(isArrayOfMaps(m)) {
                columns = columns.concat(m.map( (c: Mapping) => c.column));
                return;
            } else if( m[0]) {
                m = m[0];
            } else {
                return;
            }
        }
    })

    return columns;
}

export function parseOutflowData(data: DataPart[], graphObject: GraphObject) {

    let flowData = [];
    let outflowData = [];

    for (let mapping of graphObject.mapping[0]) {

        let column : string = (mapping[0] && mapping[0].column != undefined) ? mapping[0].column : mapping.column;

        flowData.push({

            label: mapping.label,
            colour: mapping.colour,  // de in between flows corresponderen met duration .. dus evt een kleur
            value: data[0][column] || 0,
            duration: 30,
            turnover: 0,
            outflow: data[0][mapping.outflow],
            cumulativeDuration: 0
        })
    }

    let sum = 0;

    for (let phase of flowData) {

        phase.cumulativeDuration = sum;
        sum += phase.duration;
    }

    return {
        flowData,
        outflowData
    }
}

export function parseForPie(graphObject, segment, data) {

    let d = (graphObject.config.extra.municipalitySelect) ? data.find( j => j['gemeente'] === segment) : data[0];
    let preparedData = [];
    let sum = 0;

    graphObject.mapping.forEach( (array,i) => {

        let dataArray = [];

        for (let mapping of array) {

            let value = 0;

            if (i === 1) {
                value = sum;

            } else if (Array.isArray(mapping.column)) {

                let mathType = mapping.column[mapping.column.length - 1];

                switch (mathType) {

                    case '+' :

                        for (let prop of mapping.column.slice(0, mapping.column.length - 1)) {

                            value += d[prop];
                            sum += d[prop];
                        }

                        break;

                    case '-' :

                        let diff = d[mapping.column[0]] - d[mapping.column[1]];

                        value += diff;
                        sum += diff;

                        break;

                }

            } else {
                value = d[mapping.column]
            }

            let column = (mapping[0] && mapping[0].column) ? mapping[0].column : mapping.column

            sum = (d[column] !== undefined) ? sum + d[column] : sum;

            if (value > 0) {
                dataArray.push({
                    label: mapping.label,
                    value: value,
                    colour: mapping.colour,
                    accented: (i > 1) ? true : false
                });
            }
        }

        preparedData.push(dataArray);
    });

    return preparedData;
}

export function parseGroups(graphObject: GraphObject, rawData: DataPart[]) : IKeyValueObject[]  {

    // we group by one metric
    // then stack other keys .. 
    // in this case we turn 16 vars into 4 groups of 4 

    let grouped : IKeyValueObject[] = [];

    for (let mapArray of graphObject.mapping) {

        let group: IKeyValueObject = {
            label : mapArray[0].group
        }

        for (let mapping of mapArray) {

            let column = Array.isArray(mapping.column) ? mapping.column[0] : mapping.column;

            group[mapping.label] = rawData[0][column]
        }

        grouped.push(group)
    }

    return grouped;

}

export function filterLatest(data,neededColumns) {

    const o : DataPart = {
        _date : data[0]['_date']
    };
    const keys = Object.keys(data[0]);

    for (let key of keys) {

        if(neededColumns.indexOf(key) > -1) {
            o[key] = data[0][key]
        }
    }

    return o;

}