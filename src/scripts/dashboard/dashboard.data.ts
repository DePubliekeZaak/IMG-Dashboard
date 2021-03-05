import * as d3 from "d3";
import {ResponseData} from "../types/responseData";
import {breakpoints} from "../_styleguide/_breakpoints";
import {graphs} from "../charts/module";
import * as _ from 'lodash';

export default class DashboardData {

    constructor () {}

    discardEmpty(values) {
        let haveData: any[] = values.filter( (v: any[]) => v.length > 0);
        if (haveData.length < 1 && haveData[0].gemeente !== 'Eemsdelta') {
            document.getElementsByTagName('main')[0].innerHTML = 'Een van de parameters in de url is onbekend';
            return;
        }
        return haveData;
    }

    createDashboardCalls(dashboardArray, segment, update) {

        let self = this;
        let promises = [];
        let uniqueEndpoints: any = [...Array.from(new Set(dashboardArray.map((o) => o.endpoint)))];
        const restQuery = (segment === 'eemsdelta') ? '?gemeente=in.(loppersum,delfzijl,appingedam)&_date=gte.2018-11-01' : '?gemeente=eq.' + segment + '&_date=gte.2018-11-01';

        for (let endpoint of uniqueEndpoints) {
            let url = (endpoint.indexOf('limit=') < 0) ? endpoint + restQuery : endpoint;
            promises.push(
                new Promise((resolve, reject) => {
                    d3.json<ResponseData>(url)
                        .then((data) => {
                            resolve(data)
                        })
                        .catch((err) => {
                            console.log('api call failed');
                            console.log(err);
                        })
                })
            )
        }
        return promises;
    }

    mergeArrayObjects(arrays){

        const eemsdelta = ['Appingedam','Delfzijl','Loppersum'];

        let weeks = [];
        let munis = [];
        // hoe herken ik arrays met alle gemeentes
        const arraysWithWeeks = arrays.filter( a => a.length < 2 || a[0].gemeente === a[1].gemeente || eemsdelta.indexOf(a[0].gemeente));
        const arraysWithMunis = arrays.filter( a => a.length > 1 && a[0]._week === a[1]._week);
        // make sure data are merged into array with most weeks ..
        arraysWithWeeks.sort(function (a, b) {
            return b.length - a.length;
        });

        arraysWithWeeks[0].map((item,i)=>{
            let o = {};
            if (arraysWithWeeks.length > 1) {
                for (let i = 1; i < arraysWithWeeks.length; i++) {
                    let objectToMerge = arraysWithWeeks[i].find(object => object.gemeente === item.gemeente && object._date === item._date);
                    o = Object.assign(o, item, objectToMerge)
                }
            } else {
                o = item;
            }
            weeks.push(o);
        });

        if(arraysWithMunis && arraysWithMunis.length > 0) {

            let recentWeeksOnly = arraysWithMunis[0].filter(o => o['_week'] === arraysWithMunis[0][0]['_week']);
            if (recentWeeksOnly && recentWeeksOnly.length > 0) {

                recentWeeksOnly.map((item, i) => {
                    let o = {};
                    if (arraysWithMunis.length > 1) {
                        for (let i = 1; i < arraysWithMunis.length; i++) {
                            let objectToMerge = arraysWithMunis[i].find(object => object._date === item._date);
                            o = Object.assign(o, item, objectToMerge)
                        }
                    } else {
                        o = item;
                    }
                    munis.push(o);
                });
            }
        }

        return { weeks, munis };
    }

    createHistoryForEemsdelta(weeks) {

        const array = [];
        const grouped_weeks = Object.values(_.groupBy(weeks,'_date'));

        for (let week of grouped_weeks) {

            let aggregated_week = {};

            for (let prop of Object.keys(week[0])) {

                aggregated_week['gemeente'] = 'Eemsdelta';

                if(['_date','_week','_month','_year'].indexOf(prop) > -1) {
                    aggregated_week[prop] = week[0][prop];
                } else {
                    aggregated_week[prop] = parseInt(week[0][prop]) + parseInt(week[1][prop]) + parseInt(week[2][prop]);
                }
            }

            array.push(aggregated_week);

        }
        return array;
    }
}
