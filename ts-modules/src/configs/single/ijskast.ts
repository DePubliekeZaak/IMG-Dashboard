// const x = [{   "label": "Speciale dossiers",
//     "slug": "specials_stacked_schademeldingen",
//     "mapping": [
//     [
//
//         {
//             "label": "Agro",
//             "column": "nieuw_agro_schademeldingen",
//             "colour": "moss"
//         },
//         {
//             "label": "Erfgoed",
//             "column": "nieuw_erfgoed_schademeldingen",
//             "colour": "lightBlue"
//         },
//         {
//             "label": "MKB",
//             "column": "nieuw_mkb_schademeldingen",
//             "colour": "blue"
//         },
//         {
//             "label": "Overig en AOS",
//             "column": "nieuw_aos_overig_schademeldingen",
//             "colour": "orange"
//         }
//     ]
// ],
//     "config": {
//     "graphType": "StackedArea",
//         "xScaleType": "time",
//         "yScaleType": "linear",
//         "xParameter": "_date",
//         "yParameter": "nieuw_specials_schademeldingen",
//         "padding": {
//         "top": 20,
//             "bottom": 100,
//             "left": 40,
//             "right": 0
//     },
//     "margin": {
//         "top": 80,
//             "bottom": 100,
//             "left": 0,
//             "right": 0
//     },
//     "extra": {
//         "xScaleTicks": "timeMonth",
//             "header" : "Trend nieuwe speciale dossiers",
//             "largeHeader" : false,
//     }
// },
//     "description" : "Het aantal schademeldingen met speciale kenmerken per week, door de tijd heen. De schademeldingen zijn onderverdeeld naar het type speciale dossier.",
//     "endpoint": "specials",
//     "segment": "all",
//     "elementClasslist": ['img-graph-container','img-graph-container-12','img-graph-container-vertical-padding','img-grap-container-medium-high']
// };
// {
//     "label": "Taart Schademeldingen",
//     "slug": "specials_taart_schademeldingen",
//     "mapping":  [[
//     [
//         {
//             "label": "Regulier",
//             "column": "schademeldingen",
//             "colour": "gray"
//         },
//         {
//             "label": "Agro",
//             "column": "agro_schademeldingen",
//             "colour": "moss"
//         },
//         {
//             "label": "Erfgoed",
//             "column": "erfgoed_schademeldingen",
//             "colour": "brown"
//         },
//         {
//             "label": "MKB",
//             "column": "mkb_schademeldingen",
//             "colour": "lightBlue"
//         },
//         {
//             "label": "Overig en AOS",
//             "column": "aos_overig_schademeldingen",
//             "colour": "orange"
//         }
//     ]
// ]],
//     "config": {
//
//     "graphType": "PieChartSum",
//         "xScaleType" : false,
//         "yScaleType" : false,
//         "xParameter" : false,
//         "yParameter" : false,
//         "padding": {
//         "top": 0,
//             "bottom": 0,
//             "left": 0,
//             "right": 0
//     },
//     "margin": {
//         "top": 0,
//             "bottom": 15,
//             "left": 0,
//             "right": 0
//     },
//     "extra" :{
//         "currencyLabels" : false,
//             "legendWidth" : 220,
//             "maxRadius" : 100,
//             "innerRadius" : 20,
//             "header" : "Type speciale dossiers totaal"
//     }
// },
//     "description" : "Het totaal aantal schademeldingen met speciale kenmerken dat sinds 19 maart 2018 is binnengekomen. Eerst bij de TCMG (dat tijdelijk was) en sinds 1 juli 2020 bij het IMG, dat het werk van de TCMG structureel voortzet.",
//     "endpoint": "meldingen",
//     "segment": "all",
//     "elementClasslist": ['img-graph-container','img-graph-container-6','img-graph-container-vertical-padding','img-grap-container-medium-high']
// },
// {
//     "label": "Taart In behandeling",
//     "slug": "specials_taart_in_behandeling",
//     "mapping":  [[
//     [
//         {
//             "label": "Regulier",
//             "column": "in_behandeling",
//             "colour": "gray"
//         },
//         {
//             "label": "Agro",
//             "column": "agro_in_behandeling",
//             "colour": "moss"
//         },
//         {
//             "label": "Erfgoed",
//             "column": "erfgoed_in_behandeling",
//             "colour": "brown"
//         },
//         {
//             "label": "MKB",
//             "column": "mkb_in_behandeling",
//             "colour": "lightBlue"
//         },
//         {
//             "label": "Overig en AOS",
//             "column": "aos_in_behandeling",
//             "colour": "orange"
//         }
//     ]
// ]],
//     "config": {
//
//     "graphType": "PieChartSum",
//         "xScaleType" : false,
//         "yScaleType" : false,
//         "xParameter" : false,
//         "yParameter" : false,
//         "padding": {
//         "top": 0,
//             "bottom": 0,
//             "left": 0,
//             "right": 0
//     },
//     "margin": {
//         "top": 0,
//             "bottom": 15,
//             "left": 0,
//             "right": 0
//     },
//     "extra" :{
//         "currencyLabels" : false,
//             "legendWidth" : 220,
//             "maxRadius" : 100,
//             "innerRadius" : 20,
//             "header" : "Type speciale dossiers openstaand"
//     }
// },
//     "description" : "Het totaal aantal openstaande schademeldingen met speciale kenmerken dat sinds 19 maart 2018 is binnengekomen. Eerst bij de TCMG (dat tijdelijk was) en sinds 1 juli 2020 bij het IMG, dat het werk van de TCMG structureel voortzet. ",
//     "endpoint": "voortgang",
//     "segment": "all",
//     "elementClasslist": ['img-graph-container','img-graph-container-6','img-graph-container-vertical-padding','img-grap-container-medium-high']
// }]


// {
//     "label" : "Schadevergoedingen",
//     "slug" : "specials_bandbars_statussen",
//     "mapping": [
//     [
//         {
//             label: "< €1K",
//             column: "schadevergoedingen_lager_dan_1000",
//             colour: 'lightBlue'
//         },
//         {
//             label : "€1K t/m €4K",
//             column : "schadevergoedingen_tussen_1000_en_4000",
//             colour :'orange'
//         },
//         {
//             label : "€4K t/m €10K",
//             column : "schadevergoedingen_tussen_4000_en_10000",
//             colour: 'moss'
//         },
//         {
//             label : "> €10K",
//             column : "schadevergoedingen_hoger_dan_10000",
//             colour: 'brown'
//         }
//     ]
// ],
//     "config": {
//     "graphType": "BandBars",
//         "xScaleType" : 'band',
//         "yScaleType" : 'linear',
//         "xParameter" : 'label',
//         "yParameter" : "value",
//         "padding": {
//         "top": 20,
//             "bottom": 120,
//             "left": 0,
//             "right": 0
//     },
//     "margin": {
//         "top": 0,
//             "bottom": 120,
//             "left": 0,
//             "right": 0
//     },
//     "extra" : {
//         "currencyLabels" : false,
//             "privacySensitive" : true,
//             "paddingInner" : .1,
//             "paddingOuter" : .1,
//             "municipalitySelect": true,
//             "alternateTicks" : false,
//             "header" : "Ordegrootte van schadevergoedingen",
//             "largeHeader" : false,
//     }
// },
//     "description" : "Het aantal besluiten onderverdeeld naar omvang van de toegekende schadevergoeding in het besluit.",
//     "endpoint": "vergoedingen?limit=60",  // ivm in-graph gemeentekiezer
//     "segment": false,
//     "elementClasslist": ['img-graph-container','img-graph-container-6','img-graph-container-vertical-padding','img-grap-container-medium-high']
// },
