import * as d3 from "d3";
import {ResponseData} from "../types/data";
import {breakpoints} from "../_styleguide/_breakpoints";
import {graphs} from "../charts/module";
import * as _ from 'lodash';
import { API_BASE } from '../env';

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

            if(endpoint) {

                let url = (endpoint.indexOf('limit=') < 0) ? API_BASE + endpoint + restQuery : API_BASE + endpoint;
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
        }
        return promises;
    }

    mergeArrayObjects(arrays){

        console.log(arrays);

        const eemsdelta = ['Appingedam','Delfzijl','Loppersum'];

        let weekData = [];
        let muniData = [];
        // uitzondering for Grid
        if(arrays.length > 0) {
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
                weekData.push(o);
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
                        muniData.push(o);

                    });
                }
            }

            

            muniData = this.createMapDataForEemsdelta(muniData);

            console.log(muniData);

        }

        return { weekData, muniData };
    }

    createMapDataForEemsdelta(munis) {

        if(munis && munis.length > 0) {

            let mergedMunis = munis.filter((m) => ['appingedam', 'delfzijl', 'loppersum'].indexOf(m.gemeente) > -1)

            let e: any = {};
            e.gemeente = 'eemsdelta';

            for (let prop of Object.keys(munis[0])) {

                if (['_date', "_year", "_month", "_week"].indexOf(prop) > -1) {

                    e[prop] = munis[0][prop];
                } else if (prop !== 'gemeente') {


                    let sum = 0;
                    for (let m of mergedMunis) {

                        if (m[prop] !== null) {
                            sum = sum + parseFloat(m[prop]);
                        }
                    }

                    e[prop] = sum;
                    //  gemiddeldes kun je niet optellen
                    e['fysieke_schade_gemiddeld_schadebedrag'] = e['fysieke_schade_nieuw_totaal_verleend'] / e['fysieke_schade_nieuw_toegewezen_besluiten'];
                    e['fysieke_schade_gemiddeld_schadebedrag_sinds_start'] = e['fysieke_schade_totaal_verleend'] / e['fysieke_schade_toegewezen_besluiten'];

                    e['gemiddeld_schadebedrag_40mms'] = Math.round(e['totaal_verleend_40mms'] / e['toegekend_40mms']);
                    e['gemiddeld_schadebedrag_20mms'] = Math.round(e['totaal_verleend_20mms'] / e['toegekend_20mms']);
                    e['gemiddeld_schadebedrag_16mms'] = Math.round(e['totaal_verleend_16mms'] / e['toegekend_16mms']);
                    e['gemiddeld_schadebedrag_8_5mms'] = Math.round(e['totaal_verleend_8_5mms'] / e['toegekend_8_5mms']);
                    e['gemiddeld_schadebedrag_5mms'] = Math.round(e['totaal_verleend_5mms'] / e['toegekend_5mms']);
                    e['gemiddeld_schadebedrag_2mms'] = Math.round(e['totaal_verleend_2mms'] / e['toegekend_2mms']);
                    e['gemiddeld_schadebedrag_mms_onbekend'] = Math.round(e['totaal_verleend_mms_onbekend'] / e['toegekend_mms_onbekend']);
                    // en percentage ook nie

                    e['fysieke_schade_percentage_toegewezen_besluiten'] = (e['fysieke_schade_toegewezen_besluiten'] * 100) / (e['fysieke_schade_toegewezen_besluiten'] + e['fysieke_schade_afgewezen_meldingen'])

                    e['percentage_toegewezen_besluiten_40mms'] = Math.round(e['toegekend_40mms'] * 100 / e['besluiten_40mms']);
                    e['percentage_toegewezen_besluiten_20mms'] = Math.round(e['toegekend_20mms'] * 100 / e['besluiten_20mms']);
                    e['percentage_toegewezen_besluiten_16mms'] = Math.round(e['toegekend_16mms'] * 100 / e['besluiten_16mms']);
                    e['percentage_toegewezen_besluiten_8_5mms'] = Math.round(e['toegekend_8_5mms'] * 100 / e['besluiten_8_5mms']);
                    e['percentage_toegewezen_besluiten_5mms'] = Math.round(e['toegekend_5mms'] * 100 / e['besluiten_5mms']);
                    e['percentage_toegewezen_besluiten_2mms'] = Math.round(e['toegekend_2mms'] * 100 / e['besluiten_2mms']);
                    e['percentage_toegewezen_besluiten_mms_onbekend'] = Math.round(e['toegekend_mms_onbekend'] * 100 / e['besluiten_mms_onbekend']);

                    e['percentage_afgehandeld_40mms'] = Math.round(e['besluiten_40mms'] * 100 / e['schademeldingen_40mms']);
                    e['percentage_afgehandeld_20mms'] = Math.round(e['besluiten_20mms'] * 100 / e['schademeldingen_20mms']);
                    e['percentage_afgehandeld_16mms'] = Math.round(e['besluiten_16mms'] * 100 / e['schademeldingen_16mms']);
                    e['percentage_afgehandeld_8_5mms'] = Math.round(e['besluiten_8_5mms'] * 100 / e['schademeldingen_8_5mms']);
                    e['percentage_afgehandeld_5mms'] = Math.round(e['besluiten_5mms'] * 100 / e['schademeldingen_5mms']);
                    e['percentage_afgehandeld_2mms'] = Math.round(e['besluiten_2mms'] * 100 / e['schademeldingen_2mms']);
                    e['percentage_afgehandeld_mms_onbekend'] = Math.round(e['besluiten_mms_onbekend'] * 100 / e['schademeldingen_mms_onbekend']);
                }
            }


            munis.push(e);

        }

        return munis;
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

    correctionForEemsdelta(weeks) {
        for (let week of weeks) {

            if (week['_date'] === '2021-03-01') {
                    week['nieuw_schademeldingen'] = '50';
                    week['nieuw_afgehandeld'] = '50';
            } else if (week['_date'] === '2021-03-08') {
                week['nieuw_schademeldingen'] = '50';
                week['nieuw_afgehandeld'] = '50';
            }
        }
        return weeks;

    }

    correctionForHetHogeland(weeks) {

        for (let week of weeks) {

            if (week['_date'] === '2021-03-01') {
                week['nieuw_schademeldingen'] = '36';
                week['nieuw_afgehandeld'] = '55';
            } else if (week['_date'] === '2021-03-08') {
                week['nieuw_schademeldingen'] = '36';
                week['nieuw_afgehandeld'] = '55';
            }
        }

        return weeks;
    }
}
