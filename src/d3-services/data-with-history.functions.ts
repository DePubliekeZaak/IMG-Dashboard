import _ from "lodash";
import { DataPart, IKeyValueObject } from "../types/data";
import { GraphObject } from "../types/graphObject";
import { Mapping } from "../types/mapping";

export function getNeededColumnsForHistory(data: any, graphObject: any): string[] {

    let m = graphObject.mapping;
    let columns = ['_date','_month','_week','_year'];

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

export function isArrayOfMaps(o:  any) : boolean {
    return (o[0] && o[0].column != undefined && o[0].label != undefined) ? true : false;
}

export function groupByMonths(newData: DataPart[], neededColumns: string[]) : DataPart[] {

    let array = [];

    const groupedData = _.groupBy(newData,(w) => w._month.toString() + w._year.toString());

    const groupedArray = Object.values(groupedData).sort( (a,b) => +new Date(b[0]._date) - +new Date(a[0]._date))

    for (let group of groupedArray) {

            group.sort((a: any, b: any) => (a._year.toString() + a._week.toString()) - (b._year.toString() + b._week.toString()));
            // if last has day <= 7
            if (new Date(group.reverse()[0]._date).getDate() <= 7) {

                let o = {};
                for (let column of neededColumns) {

                    if (group[0][column] !== null) {
                        o[column] = group[0][column]
                    }
                }

                array.push(o);
            }
    }

    return array;
}

export function filterWeeks(data: DataPart[], neededColumns: string[]) : DataPart[] {

    let array = [];
    let hasEnoughData;

    for (let week of data.slice(0,data.length - 1)) {

        hasEnoughData = true;

        let clearWeek = {};

        for (let column of neededColumns) {

            if (week[column] !== null && week[column] !== undefined) {
                clearWeek[column] = week[column]
            } else {
                console.log(column);
                hasEnoughData = false;
            }
        }
        if (hasEnoughData) {
            array.push(clearWeek);
        } else {
          //  console.log('lacking data');
        }
    }

    return array;
}

export function filterWeeksPlusColour(data: DataPart[], neededColumns: string[]) {

    let o = {
        colour : this.graphObject.mapping[0].colour
    };

    for (let p of Object.entries(data))  {
        if (neededColumns.indexOf(p[0]) > -1 ) {
            o[p[0]] = p[1] !== null ? p[1] : 0;
        }
    }
}

export function trimLatest(week: DataPart, neededColumns: string[]) : DataPart  {

    let latestData;

        for (let column of neededColumns) {

            if (week[column] !== null) {
                latestData[column] = week[column]
            }
        }

    return latestData;
}

export function parseHistoryForStackedArea(graphObject: GraphObject, rawData: DataPart[]) {

    let data = [];
    let mapping;

    for (let week of rawData) {
        let o = {};
        let legit = true;

        let columns = [].concat( ...graphObject.mapping[0].map( (map) => map.column ));

        for (let column of columns)  {

            mapping = graphObject.mapping[0].find( (map) => map.column === column);

            o[column] = week[column];
            o['_date'] = week['_date'];
            o['gemeente'] = week['gemeente'];
            o['label'] = mapping.label;
            o['colour'] = mapping.colour;

            if (o[column] === null) {
                legit = false;
            }
        }

        if(legit) {
            data.push(o);
        }
    }

    data.sort(function(a, b) {
        return new Date(a._date).getTime() - new Date(b._date).getTime();
    });

    return data;
}
