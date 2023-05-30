import { GraphObject, IGraphMapping } from '../../d3-modules/_d3_types';

// const custom_pad = 20;

export const dashboardMms :  (GraphObject|IGraphMapping)[] = [

    {
        "slug" : "trend_mms_gem_schadebedrag_nieuw",
        "graph": "NormalisedBarsMms",
        "args": ["def","2017"],
        "parameters": [
            [   
                {
                    "label": "Nieuwe schade",
                    "column": "geen-meldingen",
                    "colour": "moss",
                    "short" : "nieuw adres",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij IMG",
                    "column": "img-meldingen",
                    "colour": "orange",
                    "short" : "historie bij IMG",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij NAM",
                    "column": "cvw-meldingen",
                    "colour": "blue",
                    "short" : "historie bij NAM",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij NAM en IMG",
                    "column": "beiden-meldingen",
                    "colour": "purple",
                    "short" : "historie bij beiden",
                    "format" : ""
                }
               
            ]
        ],
        "header" : "Schademeldingen",
        "description" : "Een overzicht van de gemiddeld toegekende schadevergoedingen in de afgelopen week, onderverdeeld naar de zones met een specifieke minimale trillingssterkte (1% overschrijdingskans)<br/><br/>Aanvullend: Bij een klein deel van de adressen is geen trillingsgebied geautomatiseerd te achterhalen. De gemiddelde schadevergoeding in deze categorie was afgelopen week:", // <span data-slug='first_column'></span>",
        "endpoint": "mms",  // ivm in-graph gemeentekiezer
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-12','img-grap-container-medium-small']
    },
    {
        "slug" : "trend_mms_gem_schadebedrag_nieuw",
        "graph": "ConcentricMms",
        "args": ["years","2018"],
        "parameters": [
            [   
                {
                    "label": "Nieuwe schade",
                    "column": "geen-meldingen",
                    "colour": "moss",
                    "short" : "nieuw adres",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij IMG",
                    "column": "img-meldingen",
                    "colour": "orange",
                    "short" : "historie bij IMG",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij NAM",
                    "column": "cvw-meldingen",
                    "colour": "blue",
                    "short" : "historie bij NAM",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij NAM en IMG",
                    "column": "beiden-meldingen",
                    "colour": "purple",
                    "short" : "historie bij beiden",
                    "format" : ""
                }
               
            ]
        ],
        "header" : "2018",
        "description" : "Een overzicht van de gemiddeld toegekende schadevergoedingen in de afgelopen week, onderverdeeld naar de zones met een specifieke minimale trillingssterkte (1% overschrijdingskans)<br/><br/>Aanvullend: Bij een klein deel van de adressen is geen trillingsgebied geautomatiseerd te achterhalen. De gemiddelde schadevergoeding in deze categorie was afgelopen week:", // <span data-slug='first_column'></span>",
        "endpoint": "mms",  // ivm in-graph gemeentekiezer
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-4','img-grap-container-medium-small']
    },
    {
        "slug" : "trend_mms_gem_schadebedrag_nieuw",
        "graph": "ConcentricMms",
        "args": ["years","2019"],
        "parameters": [
            [   
                {
                    "label": "Nieuwe schade",
                    "column": "geen-meldingen",
                    "colour": "moss",
                    "short" : "nieuw adres",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij IMG",
                    "column": "img-meldingen",
                    "colour": "orange",
                    "short" : "historie bij IMG",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij NAM",
                    "column": "cvw-meldingen",
                    "colour": "blue",
                    "short" : "historie bij NAM",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij NAM en IMG",
                    "column": "beiden-meldingen",
                    "colour": "purple",
                    "short" : "historie bij beiden",
                    "format" : ""
                }
               
            ]
        ],
        "header" : "2019",
        "description" : "Een overzicht van de gemiddeld toegekende schadevergoedingen in de afgelopen week, onderverdeeld naar de zones met een specifieke minimale trillingssterkte (1% overschrijdingskans)<br/><br/>Aanvullend: Bij een klein deel van de adressen is geen trillingsgebied geautomatiseerd te achterhalen. De gemiddelde schadevergoeding in deze categorie was afgelopen week:", // <span data-slug='first_column'></span>",
        "endpoint": "mms",  // ivm in-graph gemeentekiezer
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-4','img-grap-container-medium-small']
    },
    {
        "slug" : "trend_mms_gem_schadebedrag_nieuw",
        "graph": "ConcentricMms",
        "args": ["years","2020"],
        "parameters": [
            [   
                {
                    "label": "Nieuwe schade",
                    "column": "geen-meldingen",
                    "colour": "moss",
                    "short" : "nieuw adres",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij IMG",
                    "column": "img-meldingen",
                    "colour": "orange",
                    "short" : "historie bij IMG",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij NAM",
                    "column": "cvw-meldingen",
                    "colour": "blue",
                    "short" : "historie bij NAM",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij NAM en IMG",
                    "column": "beiden-meldingen",
                    "colour": "purple",
                    "short" : "historie bij beiden",
                    "format" : ""
                }
               
            ]
        ],
        "header" : "2020",
        "description" : "Een overzicht van de gemiddeld toegekende schadevergoedingen in de afgelopen week, onderverdeeld naar de zones met een specifieke minimale trillingssterkte (1% overschrijdingskans)<br/><br/>Aanvullend: Bij een klein deel van de adressen is geen trillingsgebied geautomatiseerd te achterhalen. De gemiddelde schadevergoeding in deze categorie was afgelopen week:", // <span data-slug='first_column'></span>",
        "endpoint": "mms",  // ivm in-graph gemeentekiezer
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-4','img-grap-container-medium-small']
    },
    {
        "slug" : "trend_mms_gem_schadebedrag_nieuw",
        "graph": "ConcentricMms",
        "args": ["years","2021"],
        "parameters": [
            [   
                {
                    "label": "Nieuwe schade",
                    "column": "geen-meldingen",
                    "colour": "moss",
                    "short" : "nieuw adres",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij IMG",
                    "column": "img-meldingen",
                    "colour": "orange",
                    "short" : "historie bij IMG",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij NAM",
                    "column": "cvw-meldingen",
                    "colour": "blue",
                    "short" : "historie bij NAM",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij NAM en IMG",
                    "column": "beiden-meldingen",
                    "colour": "purple",
                    "short" : "historie bij beiden",
                    "format" : ""
                }
               
            ]
        ],
        "header" : "2021",
        "description" : "Een overzicht van de gemiddeld toegekende schadevergoedingen in de afgelopen week, onderverdeeld naar de zones met een specifieke minimale trillingssterkte (1% overschrijdingskans)<br/><br/>Aanvullend: Bij een klein deel van de adressen is geen trillingsgebied geautomatiseerd te achterhalen. De gemiddelde schadevergoeding in deze categorie was afgelopen week:", // <span data-slug='first_column'></span>",
        "endpoint": "mms",  // ivm in-graph gemeentekiezer
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-4','img-grap-container-medium-small']
    },
    {
        "slug" : "trend_mms_gem_schadebedrag_nieuw",
        "graph": "ConcentricMms",
        "args": ["years","2022"],
        "parameters": [
            [   
                {
                    "label": "Nieuwe schade",
                    "column": "geen-meldingen",
                    "colour": "moss",
                    "short" : "nieuw adres",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij IMG",
                    "column": "img-meldingen",
                    "colour": "orange",
                    "short" : "historie bij IMG",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij NAM",
                    "column": "cvw-meldingen",
                    "colour": "blue",
                    "short" : "historie bij NAM",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij NAM en IMG",
                    "column": "beiden-meldingen",
                    "colour": "purple",
                    "short" : "historie bij beiden",
                    "format" : ""
                }
               
            ]
        ],
        "header" : "2022",
        "description" : "Een overzicht van de gemiddeld toegekende schadevergoedingen in de afgelopen week, onderverdeeld naar de zones met een specifieke minimale trillingssterkte (1% overschrijdingskans)<br/><br/>Aanvullend: Bij een klein deel van de adressen is geen trillingsgebied geautomatiseerd te achterhalen. De gemiddelde schadevergoeding in deze categorie was afgelopen week:", // <span data-slug='first_column'></span>",
        "endpoint": "mms",  // ivm in-graph gemeentekiezer
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-4','img-grap-container-medium-small']
    },
    {
        "slug" : "trend_mms_gem_schadebedrag_nieuw",
        "graph": "ConcentricMms",
        "args": ["years","2023"],
        "parameters": [
            [   
                {
                    "label": "Nieuwe schade",
                    "column": "geen-meldingen",
                    "colour": "moss",
                    "short" : "nieuw adres",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij IMG",
                    "column": "img-meldingen",
                    "colour": "orange",
                    "short" : "historie bij IMG",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij NAM",
                    "column": "cvw-meldingen",
                    "colour": "blue",
                    "short" : "historie bij NAM",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij NAM en IMG",
                    "column": "beiden-meldingen",
                    "colour": "purple",
                    "short" : "historie bij beiden",
                    "format" : ""
                }
               
            ]
        ],
        "header" : "2023",
        "description" : "Een overzicht van de gemiddeld toegekende schadevergoedingen in de afgelopen week, onderverdeeld naar de zones met een specifieke minimale trillingssterkte (1% overschrijdingskans)<br/><br/>Aanvullend: Bij een klein deel van de adressen is geen trillingsgebied geautomatiseerd te achterhalen. De gemiddelde schadevergoeding in deze categorie was afgelopen week:", // <span data-slug='first_column'></span>",
        "endpoint": "mms",  // ivm in-graph gemeentekiezer
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-4','img-grap-container-medium-small']
    },
    {
        "slug" : "trend_mms_gem_schadebedrag_nieuw",
        "graph": "NormalisedBarsMms",
        "args": ["def","2017"],
        "parameters": [
            [   
                {
                    "label": "Nieuwe schade",
                    "column": "geen-meldingen",
                    "colour": "green",
                    "short" : "nieuw adres",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij IMG",
                    "column": "img-meldingen",
                    "colour": "orange",
                    "short" : "historie bij IMG",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij NAM",
                    "column": "cvw-meldingen",
                    "colour": "blue",
                    "short" : "historie bij NAM",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij NAM en IMG",
                    "column": "beiden-meldingen",
                    "colour": "purple",
                    "short" : "historie bij beiden",
                    "format" : ""
                }
               
            ]
        ],
        "header" : "Schademeldingen",
        "description" : "Een overzicht van de gemiddeld toegekende schadevergoedingen in de afgelopen week, onderverdeeld naar de zones met een specifieke minimale trillingssterkte (1% overschrijdingskans)<br/><br/>Aanvullend: Bij een klein deel van de adressen is geen trillingsgebied geautomatiseerd te achterhalen. De gemiddelde schadevergoeding in deze categorie was afgelopen week:", // <span data-slug='first_column'></span>",
        "endpoint": "mms",  // ivm in-graph gemeentekiezer
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-12','img-grap-container-medium-small']
    },
    {
        "slug" : "trend_mms_gem_schadebedrag_nieuw",
        "graph": "NormalisedBarsMms",
        "args": ["years","2018"],
        "parameters": [
            [   
                {
                    "label": "Nieuwe schade",
                    "column": "geen-meldingen",
                    "colour": "green",
                    "short" : "nieuw adres",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij IMG",
                    "column": "img-meldingen",
                    "colour": "orange",
                    "short" : "historie bij IMG",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij NAM",
                    "column": "cvw-meldingen",
                    "colour": "blue",
                    "short" : "historie bij NAM",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij NAM en IMG",
                    "column": "beiden-meldingen",
                    "colour": "purple",
                    "short" : "historie bij beiden",
                    "format" : ""
                }
               
            ]
        ],
        "header" : "2018",
        "description" : "Een overzicht van de gemiddeld toegekende schadevergoedingen in de afgelopen week, onderverdeeld naar de zones met een specifieke minimale trillingssterkte (1% overschrijdingskans)<br/><br/>Aanvullend: Bij een klein deel van de adressen is geen trillingsgebied geautomatiseerd te achterhalen. De gemiddelde schadevergoeding in deze categorie was afgelopen week:", // <span data-slug='first_column'></span>",
        "endpoint": "mms",  // ivm in-graph gemeentekiezer
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-4','img-grap-container-medium-small']
    },
    {
        "slug" : "trend_mms_gem_schadebedrag_nieuw",
        "graph": "NormalisedBarsMms",
        "args": ["years","2019"],
        "parameters": [
            [   
                {
                    "label": "Nieuwe schade",
                    "column": "geen-meldingen",
                    "colour": "green",
                    "short" : "nieuw adres",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij IMG",
                    "column": "img-meldingen",
                    "colour": "orange",
                    "short" : "historie bij IMG",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij NAM",
                    "column": "cvw-meldingen",
                    "colour": "blue",
                    "short" : "historie bij NAM",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij NAM en IMG",
                    "column": "beiden-meldingen",
                    "colour": "purple",
                    "short" : "historie bij beiden",
                    "format" : ""
                }
               
            ]
        ],
        "header" : "2019",
        "description" : "Een overzicht van de gemiddeld toegekende schadevergoedingen in de afgelopen week, onderverdeeld naar de zones met een specifieke minimale trillingssterkte (1% overschrijdingskans)<br/><br/>Aanvullend: Bij een klein deel van de adressen is geen trillingsgebied geautomatiseerd te achterhalen. De gemiddelde schadevergoeding in deze categorie was afgelopen week:", // <span data-slug='first_column'></span>",
        "endpoint": "mms",  // ivm in-graph gemeentekiezer
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-4','img-grap-container-medium-small']
    },
    {
        "slug" : "trend_mms_gem_schadebedrag_nieuw",
        "graph": "NormalisedBarsMms",
        "args": ["years","2020"],
        "parameters": [
            [   
                {
                    "label": "Nieuwe schade",
                    "column": "geen-meldingen",
                    "colour": "green",
                    "short" : "nieuw adres",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij IMG",
                    "column": "img-meldingen",
                    "colour": "orange",
                    "short" : "historie bij IMG",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij NAM",
                    "column": "cvw-meldingen",
                    "colour": "blue",
                    "short" : "historie bij NAM",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij NAM en IMG",
                    "column": "beiden-meldingen",
                    "colour": "purple",
                    "short" : "historie bij beiden",
                    "format" : ""
                }
               
            ]
        ],
        "header" : "2020",
        "description" : "Een overzicht van de gemiddeld toegekende schadevergoedingen in de afgelopen week, onderverdeeld naar de zones met een specifieke minimale trillingssterkte (1% overschrijdingskans)<br/><br/>Aanvullend: Bij een klein deel van de adressen is geen trillingsgebied geautomatiseerd te achterhalen. De gemiddelde schadevergoeding in deze categorie was afgelopen week:", // <span data-slug='first_column'></span>",
        "endpoint": "mms",  // ivm in-graph gemeentekiezer
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-4','img-grap-container-medium-small']
    },
    {
        "slug" : "trend_mms_gem_schadebedrag_nieuw",
        "graph": "NormalisedBarsMms",
        "args": ["years","2021"],
        "parameters": [
            [   
                {
                    "label": "Nieuwe schade",
                    "column": "geen-meldingen",
                    "colour": "green",
                    "short" : "nieuw adres",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij IMG",
                    "column": "img-meldingen",
                    "colour": "orange",
                    "short" : "historie bij IMG",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij NAM",
                    "column": "cvw-meldingen",
                    "colour": "blue",
                    "short" : "historie bij NAM",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij NAM en IMG",
                    "column": "beiden-meldingen",
                    "colour": "purple",
                    "short" : "historie bij beiden",
                    "format" : ""
                }
               
            ]
        ],
        "header" : "2021",
        "description" : "Een overzicht van de gemiddeld toegekende schadevergoedingen in de afgelopen week, onderverdeeld naar de zones met een specifieke minimale trillingssterkte (1% overschrijdingskans)<br/><br/>Aanvullend: Bij een klein deel van de adressen is geen trillingsgebied geautomatiseerd te achterhalen. De gemiddelde schadevergoeding in deze categorie was afgelopen week:", // <span data-slug='first_column'></span>",
        "endpoint": "mms",  // ivm in-graph gemeentekiezer
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-4','img-grap-container-medium-small']
    },
    {
        "slug" : "trend_mms_gem_schadebedrag_nieuw",
        "graph": "NormalisedBarsMms",
        "args": ["years","2022"],
        "parameters": [
            [   
                {
                    "label": "Nieuwe schade",
                    "column": "geen-meldingen",
                    "colour": "green",
                    "short" : "nieuw adres",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij IMG",
                    "column": "img-meldingen",
                    "colour": "orange",
                    "short" : "historie bij IMG",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij NAM",
                    "column": "cvw-meldingen",
                    "colour": "blue",
                    "short" : "historie bij NAM",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij NAM en IMG",
                    "column": "beiden-meldingen",
                    "colour": "purple",
                    "short" : "historie bij beiden",
                    "format" : ""
                }
               
            ]
        ],
        "header" : "2022",
        "description" : "Een overzicht van de gemiddeld toegekende schadevergoedingen in de afgelopen week, onderverdeeld naar de zones met een specifieke minimale trillingssterkte (1% overschrijdingskans)<br/><br/>Aanvullend: Bij een klein deel van de adressen is geen trillingsgebied geautomatiseerd te achterhalen. De gemiddelde schadevergoeding in deze categorie was afgelopen week:", // <span data-slug='first_column'></span>",
        "endpoint": "mms",  // ivm in-graph gemeentekiezer
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-4','img-grap-container-medium-small']
    },
    {
        "slug" : "trend_mms_gem_schadebedrag_nieuw",
        "graph": "NormalisedBarsMms",
        "args": ["years","2023"],
        "parameters": [
            [   
                {
                    "label": "Nieuwe schade",
                    "column": "geen-meldingen",
                    "colour": "green",
                    "short" : "nieuw adres",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij IMG",
                    "column": "img-meldingen",
                    "colour": "orange",
                    "short" : "historie bij IMG",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij NAM",
                    "column": "cvw-meldingen",
                    "colour": "blue",
                    "short" : "historie bij NAM",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij NAM en IMG",
                    "column": "beiden-meldingen",
                    "colour": "purple",
                    "short" : "historie bij beiden",
                    "format" : ""
                }
               
            ]
        ],
        "header" : "2023",
        "description" : "Een overzicht van de gemiddeld toegekende schadevergoedingen in de afgelopen week, onderverdeeld naar de zones met een specifieke minimale trillingssterkte (1% overschrijdingskans)<br/><br/>Aanvullend: Bij een klein deel van de adressen is geen trillingsgebied geautomatiseerd te achterhalen. De gemiddelde schadevergoeding in deze categorie was afgelopen week:", // <span data-slug='first_column'></span>",
        "endpoint": "mms",  // ivm in-graph gemeentekiezer
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-4','img-grap-container-medium-small']
    },
    {
        "slug" : "trend_mms_gem_schadebedrag_nieuw",
        "graph": "NormalisedBarsMms",
        "args": ["def","0"],
        "parameters": [
            [   
                {
                    "label": "Nieuwe schade",
                    "column": "geen-meldingen",
                    "colour": "green",
                    "short" : "nieuw adres",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij IMG",
                    "column": "img-meldingen",
                    "colour": "orange",
                    "short" : "historie bij IMG",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij NAM",
                    "column": "cvw-meldingen",
                    "colour": "blue",
                    "short" : "historie bij NAM",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij NAM en IMG",
                    "column": "beiden-meldingen",
                    "colour": "purple",
                    "short" : "historie bij beiden",
                    "format" : ""
                }
               
            ]
        ],
        "header" : "Schademeldingen",
        "description" : "Een overzicht van de gemiddeld toegekende schadevergoedingen in de afgelopen week, onderverdeeld naar de zones met een specifieke minimale trillingssterkte (1% overschrijdingskans)<br/><br/>Aanvullend: Bij een klein deel van de adressen is geen trillingsgebied geautomatiseerd te achterhalen. De gemiddelde schadevergoeding in deze categorie was afgelopen week:", // <span data-slug='first_column'></span>",
        "endpoint": "mms",  // ivm in-graph gemeentekiezer
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-12','img-grap-container-medium-small']
    },
    {
        "slug" : "trend_mms_gem_schadebedrag_nieuw",
        "graph": "NormalisedBarsMms",
        "args": ["pgv","1"],
        "parameters": [
            [   
                {
                    "label": "Nieuwe schade",
                    "column": "geen-meldingen",
                    "colour": "green",
                    "short" : "nieuw adres",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij IMG",
                    "column": "img-meldingen",
                    "colour": "orange",
                    "short" : "historie bij IMG",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij NAM",
                    "column": "cvw-meldingen",
                    "colour": "blue",
                    "short" : "historie bij NAM",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij NAM en IMG",
                    "column": "beiden-meldingen",
                    "colour": "purple",
                    "short" : "historie bij beiden",
                    "format" : ""
                }
               
            ]
        ],
        "header" : "2-5 mm/s",
        "description" : "Een overzicht van de gemiddeld toegekende schadevergoedingen in de afgelopen week, onderverdeeld naar de zones met een specifieke minimale trillingssterkte (1% overschrijdingskans)<br/><br/>Aanvullend: Bij een klein deel van de adressen is geen trillingsgebied geautomatiseerd te achterhalen. De gemiddelde schadevergoeding in deze categorie was afgelopen week:", // <span data-slug='first_column'></span>",
        "endpoint": "mms",  // ivm in-graph gemeentekiezer
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-4','img-grap-container-medium-small']
    },
    {
        "slug" : "trend_mms_gem_schadebedrag_nieuw",
        "graph": "NormalisedBarsMms",
        "args": ["pgv","2"],
        "parameters": [
            [   
                {
                    "label": "Nieuwe schade",
                    "column": "geen-meldingen",
                    "colour": "green",
                    "short" : "nieuw adres",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij IMG",
                    "column": "img-meldingen",
                    "colour": "orange",
                    "short" : "historie bij IMG",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij NAM",
                    "column": "cvw-meldingen",
                    "colour": "blue",
                    "short" : "historie bij NAM",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij NAM en IMG",
                    "column": "beiden-meldingen",
                    "colour": "purple",
                    "short" : "historie bij beiden",
                    "format" : ""
                }
               
            ]
        ],
        "header" : "5-8.5 mm/s",
        "description" : "Een overzicht van de gemiddeld toegekende schadevergoedingen in de afgelopen week, onderverdeeld naar de zones met een specifieke minimale trillingssterkte (1% overschrijdingskans)<br/><br/>Aanvullend: Bij een klein deel van de adressen is geen trillingsgebied geautomatiseerd te achterhalen. De gemiddelde schadevergoeding in deze categorie was afgelopen week:", // <span data-slug='first_column'></span>",
        "endpoint": "mms",  // ivm in-graph gemeentekiezer
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-4','img-grap-container-medium-small']
    },
    {
        "slug" : "trend_mms_gem_schadebedrag_nieuw",
        "graph": "NormalisedBarsMms",
        "args": ["pgv","3"],
        "parameters": [
            [   
                {
                    "label": "Nieuwe schade",
                    "column": "geen-meldingen",
                    "colour": "green",
                    "short" : "nieuw adres",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij IMG",
                    "column": "img-meldingen",
                    "colour": "orange",
                    "short" : "historie bij IMG",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij NAM",
                    "column": "cvw-meldingen",
                    "colour": "blue",
                    "short" : "historie bij NAM",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij NAM en IMG",
                    "column": "beiden-meldingen",
                    "colour": "purple",
                    "short" : "historie bij beiden",
                    "format" : ""
                }
               
            ]
        ],
        "header" : "8.5-16 mm/s",
        "description" : "Een overzicht van de gemiddeld toegekende schadevergoedingen in de afgelopen week, onderverdeeld naar de zones met een specifieke minimale trillingssterkte (1% overschrijdingskans)<br/><br/>Aanvullend: Bij een klein deel van de adressen is geen trillingsgebied geautomatiseerd te achterhalen. De gemiddelde schadevergoeding in deze categorie was afgelopen week:", // <span data-slug='first_column'></span>",
        "endpoint": "mms",  // ivm in-graph gemeentekiezer
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-4','img-grap-container-medium-small']
    },
    {
        "slug" : "trend_mms_gem_schadebedrag_nieuw",
        "graph": "NormalisedBarsMms",
        "args": ["pgv","4"],
        "parameters": [
            [   
                {
                    "label": "Nieuwe schade",
                    "column": "geen-meldingen",
                    "colour": "green",
                    "short" : "nieuw adres",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij IMG",
                    "column": "img-meldingen",
                    "colour": "orange",
                    "short" : "historie bij IMG",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij NAM",
                    "column": "cvw-meldingen",
                    "colour": "blue",
                    "short" : "historie bij NAM",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij NAM en IMG",
                    "column": "beiden-meldingen",
                    "colour": "purple",
                    "short" : "historie bij beiden",
                    "format" : ""
                }
               
            ]
        ],
        "header" : "8.5-16 mm/s",
        "description" : "Een overzicht van de gemiddeld toegekende schadevergoedingen in de afgelopen week, onderverdeeld naar de zones met een specifieke minimale trillingssterkte (1% overschrijdingskans)<br/><br/>Aanvullend: Bij een klein deel van de adressen is geen trillingsgebied geautomatiseerd te achterhalen. De gemiddelde schadevergoeding in deze categorie was afgelopen week:", // <span data-slug='first_column'></span>",
        "endpoint": "mms",  // ivm in-graph gemeentekiezer
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-4','img-grap-container-medium-small']
    },
    {
        "slug" : "trend_mms_gem_schadebedrag_nieuw",
        "graph": "NormalisedBarsMms",
        "args": ["pgv","5"],
        "parameters": [
            [   
                {
                    "label": "Nieuwe schade",
                    "column": "geen-meldingen",
                    "colour": "green",
                    "short" : "nieuw adres",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij IMG",
                    "column": "img-meldingen",
                    "colour": "orange",
                    "short" : "historie bij IMG",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij NAM",
                    "column": "cvw-meldingen",
                    "colour": "blue",
                    "short" : "historie bij NAM",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij NAM en IMG",
                    "column": "beiden-meldingen",
                    "colour": "purple",
                    "short" : "historie bij beiden",
                    "format" : ""
                }
               
            ]
        ],
        "header" : "16-20 mm/s",
        "description" : "Een overzicht van de gemiddeld toegekende schadevergoedingen in de afgelopen week, onderverdeeld naar de zones met een specifieke minimale trillingssterkte (1% overschrijdingskans)<br/><br/>Aanvullend: Bij een klein deel van de adressen is geen trillingsgebied geautomatiseerd te achterhalen. De gemiddelde schadevergoeding in deze categorie was afgelopen week:", // <span data-slug='first_column'></span>",
        "endpoint": "mms",  // ivm in-graph gemeentekiezer
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-4','img-grap-container-medium-small']
    },
    {
        "slug" : "trend_mms_gem_schadebedrag_nieuw",
        "graph": "NormalisedBarsMms",
        "args": ["pgv","5"],
        "parameters": [
            [   
                {
                    "label": "Nieuwe schade",
                    "column": "geen-meldingen",
                    "colour": "green",
                    "short" : "nieuw adres",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij IMG",
                    "column": "img-meldingen",
                    "colour": "orange",
                    "short" : "historie bij IMG",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij NAM",
                    "column": "cvw-meldingen",
                    "colour": "blue",
                    "short" : "historie bij NAM",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij NAM en IMG",
                    "column": "beiden-meldingen",
                    "colour": "purple",
                    "short" : "historie bij beiden",
                    "format" : ""
                }
               
            ]
        ],
        "header" : "20-40 mm/s",
        "description" : "Een overzicht van de gemiddeld toegekende schadevergoedingen in de afgelopen week, onderverdeeld naar de zones met een specifieke minimale trillingssterkte (1% overschrijdingskans)<br/><br/>Aanvullend: Bij een klein deel van de adressen is geen trillingsgebied geautomatiseerd te achterhalen. De gemiddelde schadevergoeding in deze categorie was afgelopen week:", // <span data-slug='first_column'></span>",
        "endpoint": "mms",  // ivm in-graph gemeentekiezer
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-4','img-grap-container-medium-small']
    },
    {
        "slug" : "trend_mms_gem_schadebedrag_nieuw",
        "graph": "NormalisedBarsMms",
        "args": ["pgv","6"],
        "parameters": [
            [   
                {
                    "label": "Nieuwe schade",
                    "column": "geen-meldingen",
                    "colour": "green",
                    "short" : "nieuw adres",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij IMG",
                    "column": "img-meldingen",
                    "colour": "orange",
                    "short" : "historie bij IMG",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij NAM",
                    "column": "cvw-meldingen",
                    "colour": "blue",
                    "short" : "historie bij NAM",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij NAM en IMG",
                    "column": "beiden-meldingen",
                    "colour": "purple",
                    "short" : "historie bij beiden",
                    "format" : ""
                }
               
            ]
        ],
        "header" : "> 40 mm/s",
        "description" : "Een overzicht van de gemiddeld toegekende schadevergoedingen in de afgelopen week, onderverdeeld naar de zones met een specifieke minimale trillingssterkte (1% overschrijdingskans)<br/><br/>Aanvullend: Bij een klein deel van de adressen is geen trillingsgebied geautomatiseerd te achterhalen. De gemiddelde schadevergoeding in deze categorie was afgelopen week:", // <span data-slug='first_column'></span>",
        "endpoint": "mms",  // ivm in-graph gemeentekiezer
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-4','img-grap-container-medium-small']
    },
    {
        "slug" : "trend_mms_gem_schadebedrag_nieuw",
        "graph": "TrendLineMms",
        "args": [],
        "parameters": [
            [
                {
                    "label": "Schade met historie bij NAM en IMG",
                    "column": "_4monthavg_1-beiden-gemiddeld_verleend",
                    "colour": "lightBlue",
                    "short" : "historie bij beiden",
                    "format" : "currency"
                },
                {
                    "label": "Schade met historie bij NAM",
                    "column": "_4monthavg_1-cvw-gemiddeld_verleend",
                    "colour": "yellow",
                    "short" : "historie bij NAM",
                    "format" : "currency"
                },
                {
                    "label": "Schade met historie bij IMG",
                    "column": "_4monthavg_1-img-gemiddeld_verleend",
                    "colour": "green",
                    "short" : "historie bij IMG",
                    "format" : "currency"
                },
                {
                    "label": "Nieuwe schade",
                    "column": "_4monthavg_1-geen-gemiddeld_verleend",
                    "colour": "blue",
                    "short" : "nieuw adres",
                    "format" : "currency"
                }
            ]
        ],
        "header" : "Gemiddelde schadevergoeding in trillingsgebied 2mm/s",
        "description" : "Een overzicht van de gemiddeld toegekende schadevergoedingen in de afgelopen week, onderverdeeld naar de zones met een specifieke minimale trillingssterkte (1% overschrijdingskans)<br/><br/>Aanvullend: Bij een klein deel van de adressen is geen trillingsgebied geautomatiseerd te achterhalen. De gemiddelde schadevergoeding in deze categorie was afgelopen week:", // <span data-slug='first_column'></span>",
        "endpoint": "mms",  // ivm in-graph gemeentekiezer
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-12','img-grap-container-medium-small']
    },
    {
        "slug" : "trend_mms_gem_schadebedrag_nieuw",
        "graph": "TrendLineMms",
        "args": [],
        "parameters": [
            [
                {
                    "label": "Schade met historie bij NAM en IMG",
                    "column": "_4monthavg_2-beiden-gemiddeld_verleend",
                    "colour": "lightBlue",
                    "short" : "historie bij beiden",
                    "format" : "currency"
                },
                {
                    "label": "Schade met historie bij NAM",
                    "column": "_4monthavg_2-cvw-gemiddeld_verleend",
                    "colour": "yellow",
                    "short" : "historie bij NAM",
                    "format" : "currency"
                },
                {
                    "label": "Schade met historie bij IMG",
                    "column": "_4monthavg_2-img-gemiddeld_verleend",
                    "colour": "green",
                    "short" : "historie bij IMG",
                    "format" : "currency"
                },
                {
                    "label": "Nieuwe schade",
                    "column": "_4monthavg_2-geen-gemiddeld_verleend",
                    "colour": "blue",
                    "short" : "nieuw adres",
                    "format" : "currency"
                }
            ]
        ],
        "header" : "Gemiddelde schadevergoeding in trillingsgebied 5-8.5 mm/s",
        "description" : "Een overzicht van de gemiddeld toegekende schadevergoedingen in de afgelopen week, onderverdeeld naar de zones met een specifieke minimale trillingssterkte (1% overschrijdingskans)<br/><br/>Aanvullend: Bij een klein deel van de adressen is geen trillingsgebied geautomatiseerd te achterhalen. De gemiddelde schadevergoeding in deze categorie was afgelopen week:", // <span data-slug='first_column'></span>",
        "endpoint": "mms",  // ivm in-graph gemeentekiezer
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-12','img-grap-container-medium-small']
    },
    {
        "slug" : "trend_mms_gem_schadebedrag_nieuw",
        "graph": "TrendLineMms",
        "args": [],
        "parameters": [
            [
                {
                    "label": "Schade met historie bij NAM en IMG",
                    "column": "_4monthavg_3-beiden-gemiddeld_verleend",
                    "colour": "lightBlue",
                    "short" : "historie bij beiden",
                    "format" : "currency"
                },
                {
                    "label": "Schade met historie bij NAM",
                    "column": "_4monthavg_3-cvw-gemiddeld_verleend",
                    "colour": "yellow",
                    "short" : "historie bij NAM",
                    "format" : "currency"
                },
                {
                    "label": "Schade met historie bij IMG",
                    "column": "_4monthavg_3-img-gemiddeld_verleend",
                    "colour": "green",
                    "short" : "historie bij IMG",
                    "format" : "currency"
                },
                {
                    "label": "Nieuwe schade",
                    "column": "_4monthavg_3-geen-gemiddeld_verleend",
                    "colour": "blue",
                    "short" : "nieuw adres",
                    "format" : "currency"
                }
            ]
        ],
        "header" : "Gemiddelde schadevergoeding in trillingsgebied 8.5-16 mm/s",
        "description" : "Een overzicht van de gemiddeld toegekende schadevergoedingen in de afgelopen week, onderverdeeld naar de zones met een specifieke minimale trillingssterkte (1% overschrijdingskans)<br/><br/>Aanvullend: Bij een klein deel van de adressen is geen trillingsgebied geautomatiseerd te achterhalen. De gemiddelde schadevergoeding in deze categorie was afgelopen week:", // <span data-slug='first_column'></span>",
        "endpoint": "mms",  // ivm in-graph gemeentekiezer
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-12','img-grap-container-medium-small']
    },
    {
        "slug" : "trend_mms_gem_schadebedrag_nieuw",
        "graph": "TrendLineMms",
        "args": [],
        "parameters": [
            [
                {
                    "label": "Schade met historie bij NAM en IMG",
                    "column": "_4monthavg_4-beiden-gemiddeld_verleend",
                    "colour": "lightBlue",
                    "short" : "historie bij beiden",
                    "format" : "currency"
                },
                {
                    "label": "Schade met historie bij NAM",
                    "column": "_4monthavg_4-cvw-gemiddeld_verleend",
                    "colour": "yellow",
                    "short" : "historie bij NAM",
                    "format" : "currency"
                },
                {
                    "label": "Schade met historie bij IMG",
                    "column": "_4monthavg_4-img-gemiddeld_verleend",
                    "colour": "green",
                    "short" : "historie bij IMG",
                    "format" : "currency"
                },
                {
                    "label": "Nieuwe schade",
                    "column": "_4monthavg_4-geen-gemiddeld_verleend",
                    "colour": "blue",
                    "short" : "nieuw adres",
                    "format" : "currency"
                }
            ]
        ],
        "header" : "Gemiddelde schadevergoeding in trillingsgebied 16-20 mm/s",
        "description" : "Een overzicht van de gemiddeld toegekende schadevergoedingen in de afgelopen week, onderverdeeld naar de zones met een specifieke minimale trillingssterkte (1% overschrijdingskans)<br/><br/>Aanvullend: Bij een klein deel van de adressen is geen trillingsgebied geautomatiseerd te achterhalen. De gemiddelde schadevergoeding in deze categorie was afgelopen week:", // <span data-slug='first_column'></span>",
        "endpoint": "mms",  // ivm in-graph gemeentekiezer
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-12','img-grap-container-medium-small']
    },
    {
        "slug" : "trend_mms_gem_schadebedrag_nieuw",
        "graph": "TrendLineMms",
        "args": [],
        "parameters": [
            [
                {
                    "label": "Schade met historie bij NAM en IMG",
                    "column": "_4monthavg_5-beiden-gemiddeld_verleend",
                    "colour": "lightBlue",
                    "short" : "historie bij beiden",
                    "format" : "currency"
                },
                {
                    "label": "Schade met historie bij NAM",
                    "column": "_4monthavg_5-cvw-gemiddeld_verleend",
                    "colour": "yellow",
                    "short" : "historie bij NAM",
                    "format" : "currency"
                },
                {
                    "label": "Schade met historie bij IMG",
                    "column": "_4monthavg_5-img-gemiddeld_verleend",
                    "colour": "green",
                    "short" : "historie bij IMG",
                    "format" : "currency"
                },
                {
                    "label": "Nieuwe schade",
                    "column": "_4monthavg_5-geen-gemiddeld_verleend",
                    "colour": "blue",
                    "short" : "nieuw adres",
                    "format" : "currency"
                }
            ]
        ],
        "header" : "Gemiddelde schadevergoeding in trillingsgebied 20-40 mm/s",
        "description" : "Een overzicht van de gemiddeld toegekende schadevergoedingen in de afgelopen week, onderverdeeld naar de zones met een specifieke minimale trillingssterkte (1% overschrijdingskans)<br/><br/>Aanvullend: Bij een klein deel van de adressen is geen trillingsgebied geautomatiseerd te achterhalen. De gemiddelde schadevergoeding in deze categorie was afgelopen week:", // <span data-slug='first_column'></span>",
        "endpoint": "mms",  // ivm in-graph gemeentekiezer
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-12','img-grap-container-medium-small']
    },
    {
        "slug" : "trend_mms_gem_schadebedrag_nieuw",
        "graph": "TrendLineMms",
        "args": [],
        "parameters": [
            [
                {
                    "label": "Schade met historie bij NAM en IMG",
                    "column": "_4monthavg_6-beiden-gemiddeld_verleend",
                    "colour": "lightBlue",
                    "short" : "historie bij beiden",
                    "format" : "currency"
                },
                {
                    "label": "Schade met historie bij NAM",
                    "column": "_4monthavg_6-cvw-gemiddeld_verleend",
                    "colour": "yellow",
                    "short" : "historie bij NAM",
                    "format" : "currency"
                },
                {
                    "label": "Schade met historie bij IMG",
                    "column": "_4monthavg_6-img-gemiddeld_verleend",
                    "colour": "green",
                    "short" : "historie bij IMG",
                    "format" : "currency"
                },
                {
                    "label": "Nieuwe schade",
                    "column": "_4monthavg_6-geen-gemiddeld_verleend",
                    "colour": "blue",
                    "short" : "nieuw adres",
                    "format" : "currency"
                }
            ]
        ],
        "header" : "Gemiddelde schadevergoeding in trillingsgebied > 40 mm/s",
        "description" : "Een overzicht van de gemiddeld toegekende schadevergoedingen in de afgelopen week, onderverdeeld naar de zones met een specifieke minimale trillingssterkte (1% overschrijdingskans)<br/><br/>Aanvullend: Bij een klein deel van de adressen is geen trillingsgebied geautomatiseerd te achterhalen. De gemiddelde schadevergoeding in deze categorie was afgelopen week:", // <span data-slug='first_column'></span>",
        "endpoint": "mms",  // ivm in-graph gemeentekiezer
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-12','img-grap-container-medium-small']
    },
    /// afwijzingen
    {
        "slug" : "trend_mms_gem_schadebedrag_nieuw",
        "graph": "TrendLineMms",
        "args": [],
        "parameters": [
            [
                {
                    "label": "Schade met historie bij NAM en IMG",
                    "column": "_4monthavg_1-beiden-afwijzingen",
                    "colour": "lightBlue",
                    "short" : "historie bij beiden",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij NAM",
                    "column": "_4monthavg_1-cvw-afwijzingen",
                    "colour": "yellow",
                    "short" : "historie bij NAM",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij IMG",
                    "column": "_4monthavg_1-img-afwijzingen",
                    "colour": "green",
                    "short" : "historie bij IMG",
                    "format" : ""
                },
                {
                    "label": "Nieuwe schade",
                    "column": "_4monthavg_1-geen-afwijzingen",
                    "colour": "blue",
                    "short" : "nieuw adres",
                    "format" : ""
                }
            ]
        ],
        "header" : "Afwijzingen in trillingsgebied 2mm/s",
        "description" : "Een overzicht van de gemiddeld toegekende schadevergoedingen in de afgelopen week, onderverdeeld naar de zones met een specifieke minimale trillingssterkte (1% overschrijdingskans)<br/><br/>Aanvullend: Bij een klein deel van de adressen is geen trillingsgebied geautomatiseerd te achterhalen. De gemiddelde schadevergoeding in deze categorie was afgelopen week:", // <span data-slug='first_column'></span>",
        "endpoint": "mms",  // ivm in-graph gemeentekiezer
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-12','img-grap-container-medium-small']
    },
    {
        "slug" : "trend_mms_gem_schadebedrag_nieuw",
        "graph": "TrendLineMms",
        "args": [],
        "parameters": [
            [
                {
                    "label": "Schade met historie bij NAM en IMG",
                    "column": "_4monthavg_2-beiden-afwijzingen",
                    "colour": "lightBlue",
                    "short" : "historie bij beiden",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij NAM",
                    "column": "_4monthavg_2-cvw-afwijzingen",
                    "colour": "yellow",
                    "short" : "historie bij NAM",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij IMG",
                    "column": "_4monthavg_2-img-afwijzingen",
                    "colour": "green",
                    "short" : "historie bij IMG",
                    "format" : ""
                },
                {
                    "label": "Nieuwe schade",
                    "column": "_4monthavg_2-geen-afwijzingen",
                    "colour": "blue",
                    "short" : "nieuw adres",
                    "format" : ""
                }
            ]
        ],
        "header" : "Afwijzingen in trillingsgebied 5-8.5 mm/s",
        "description" : "Een overzicht van de gemiddeld toegekende schadevergoedingen in de afgelopen week, onderverdeeld naar de zones met een specifieke minimale trillingssterkte (1% overschrijdingskans)<br/><br/>Aanvullend: Bij een klein deel van de adressen is geen trillingsgebied geautomatiseerd te achterhalen. De gemiddelde schadevergoeding in deze categorie was afgelopen week:", // <span data-slug='first_column'></span>",
        "endpoint": "mms",  // ivm in-graph gemeentekiezer
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-12','img-grap-container-medium-small']
    },
    {
        "slug" : "trend_mms_gem_schadebedrag_nieuw",
        "graph": "TrendLineMms",
        "args": [],
        "parameters": [
            [
                {
                    "label": "Schade met historie bij NAM en IMG",
                    "column": "_4monthavg_3-beiden-afwijzingen",
                    "colour": "lightBlue",
                    "short" : "historie bij beiden",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij NAM",
                    "column": "_4monthavg_3-cvw-afwijzingen",
                    "colour": "yellow",
                    "short" : "historie bij NAM",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij IMG",
                    "column": "_4monthavg_3-img-afwijzingen",
                    "colour": "green",
                    "short" : "historie bij IMG",
                    "format" : ""
                },
                {
                    "label": "Nieuwe schade",
                    "column": "_4monthavg_3-geen-afwijzingen",
                    "colour": "blue",
                    "short" : "nieuw adres",
                    "format" : ""
                }
            ]
        ],
        "header" : "Afwijzingen in trillingsgebied 8.5-16 mm/s",
        "description" : "Een overzicht van de gemiddeld toegekende schadevergoedingen in de afgelopen week, onderverdeeld naar de zones met een specifieke minimale trillingssterkte (1% overschrijdingskans)<br/><br/>Aanvullend: Bij een klein deel van de adressen is geen trillingsgebied geautomatiseerd te achterhalen. De gemiddelde schadevergoeding in deze categorie was afgelopen week:", // <span data-slug='first_column'></span>",
        "endpoint": "mms",  // ivm in-graph gemeentekiezer
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-12','img-grap-container-medium-small']
    },
    {
        "slug" : "trend_mms_gem_schadebedrag_nieuw",
        "graph": "TrendLineMms",
        "args": [],
        "parameters": [
            [
                {
                    "label": "Schade met historie bij NAM en IMG",
                    "column": "_4monthavg_4-beiden-afwijzingen",
                    "colour": "lightBlue",
                    "short" : "historie bij beiden",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij NAM",
                    "column": "_4monthavg_4-cvw-afwijzingen",
                    "colour": "yellow",
                    "short" : "historie bij NAM",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij IMG",
                    "column": "_4monthavg_4-img-afwijzingen",
                    "colour": "green",
                    "short" : "historie bij IMG",
                    "format" : ""
                },
                {
                    "label": "Nieuwe schade",
                    "column": "_4monthavg_4-geen-afwijzingen",
                    "colour": "blue",
                    "short" : "nieuw adres",
                    "format" : ""
                }
            ]
        ],
        "header" : "Afwijzingen in trillingsgebied 16-20 mm/s",
        "description" : "Een overzicht van de gemiddeld toegekende schadevergoedingen in de afgelopen week, onderverdeeld naar de zones met een specifieke minimale trillingssterkte (1% overschrijdingskans)<br/><br/>Aanvullend: Bij een klein deel van de adressen is geen trillingsgebied geautomatiseerd te achterhalen. De gemiddelde schadevergoeding in deze categorie was afgelopen week:", // <span data-slug='first_column'></span>",
        "endpoint": "mms",  // ivm in-graph gemeentekiezer
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-12','img-grap-container-medium-small']
    },
    {
        "slug" : "trend_mms_gem_schadebedrag_nieuw",
        "graph": "TrendLineMms",
        "args": [],
        "parameters": [
            [
                {
                    "label": "Schade met historie bij NAM en IMG",
                    "column": "_4monthavg_5-beiden-afwijzingen",
                    "colour": "lightBlue",
                    "short" : "historie bij beiden",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij NAM",
                    "column": "_4monthavg_5-cvw-afwijzingen",
                    "colour": "yellow",
                    "short" : "historie bij NAM",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij IMG",
                    "column": "_4monthavg_5-img-afwijzingen",
                    "colour": "green",
                    "short" : "historie bij IMG",
                    "format" : ""
                },
                {
                    "label": "Nieuwe schade",
                    "column": "_4monthavg_5-geen-afwijzingen",
                    "colour": "blue",
                    "short" : "nieuw adres",
                    "format" : ""
                }
            ]
        ],
        "header" : "Afwijzingen in trillingsgebied 20-40 mm/s",
        "description" : "Een overzicht van de gemiddeld toegekende schadevergoedingen in de afgelopen week, onderverdeeld naar de zones met een specifieke minimale trillingssterkte (1% overschrijdingskans)<br/><br/>Aanvullend: Bij een klein deel van de adressen is geen trillingsgebied geautomatiseerd te achterhalen. De gemiddelde schadevergoeding in deze categorie was afgelopen week:", // <span data-slug='first_column'></span>",
        "endpoint": "mms",  // ivm in-graph gemeentekiezer
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-12','img-grap-container-medium-small']
    },
    {
        "slug" : "trend_mms_gem_schadebedrag_nieuw",
        "graph": "TrendLineMms",
        "args": [],
        "parameters": [
            [
                {
                    "label": "Schade met historie bij NAM en IMG",
                    "column": "_4monthavg_6-beiden-afwijzingen",
                    "colour": "lightBlue",
                    "short" : "historie bij beiden",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij NAM",
                    "column": "_4monthavg_6-cvw-afwijzingen",
                    "colour": "yellow",
                    "short" : "historie bij NAM",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij IMG",
                    "column": "_4monthavg_6-img-afwijzingen",
                    "colour": "green",
                    "short" : "historie bij IMG",
                    "format" : ""
                },
                {
                    "label": "Nieuwe schade",
                    "column": "_4monthavg_6-geen-afwijzingen",
                    "colour": "blue",
                    "short" : "nieuw adres",
                    "format" : ""
                }
            ]
        ],
        "header" : "Afwijzingen in trillingsgebied > 40 mm/s",
        "description" : "Een overzicht van de gemiddeld toegekende schadevergoedingen in de afgelopen week, onderverdeeld naar de zones met een specifieke minimale trillingssterkte (1% overschrijdingskans)<br/><br/>Aanvullend: Bij een klein deel van de adressen is geen trillingsgebied geautomatiseerd te achterhalen. De gemiddelde schadevergoeding in deze categorie was afgelopen week:", // <span data-slug='first_column'></span>",
        "endpoint": "mms",  // ivm in-graph gemeentekiezer
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-12','img-grap-container-medium-small']
    },
    // meldingen
    {
        "slug" : "trend_mms_gem_schadebedrag_nieuw",
        "graph": "TrendLineMms",
        "args": [],
        "parameters": [
            [
                {
                    "label": "Schade met historie bij NAM en IMG",
                    "column": "_4monthavg_1-beiden-meldingen",
                    "colour": "lightBlue",
                    "short" : "historie bij beiden",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij NAM",
                    "column": "_4monthavg_1-cvw-meldingen",
                    "colour": "yellow",
                    "short" : "historie bij NAM",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij IMG",
                    "column": "_4monthavg_1-img-meldingen",
                    "colour": "green",
                    "short" : "historie bij IMG",
                    "format" : ""
                },
                {
                    "label": "Nieuwe schade",
                    "column": "_4monthavg_1-geen-meldingen",
                    "colour": "blue",
                    "short" : "nieuw adres",
                    "format" : ""
                }
            ]
        ],
        "header" : "Meldingen in trillingsgebied 2mm/s",
        "description" : "Een overzicht van de gemiddeld toegekende schadevergoedingen in de afgelopen week, onderverdeeld naar de zones met een specifieke minimale trillingssterkte (1% overschrijdingskans)<br/><br/>Aanvullend: Bij een klein deel van de adressen is geen trillingsgebied geautomatiseerd te achterhalen. De gemiddelde schadevergoeding in deze categorie was afgelopen week:", // <span data-slug='first_column'></span>",
        "endpoint": "mms",  // ivm in-graph gemeentekiezer
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-12','img-grap-container-medium-small']
    },
    {
        "slug" : "trend_mms_gem_schadebedrag_nieuw",
        "graph": "TrendLineMms",
        "args": [],
        "parameters": [
            [
                {
                    "label": "Schade met historie bij NAM en IMG",
                    "column": "_4monthavg_2-beiden-meldingen",
                    "colour": "lightBlue",
                    "short" : "historie bij beiden",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij NAM",
                    "column": "_4monthavg_2-cvw-meldingen",
                    "colour": "yellow",
                    "short" : "historie bij NAM",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij IMG",
                    "column": "_4monthavg_2-img-meldingen",
                    "colour": "green",
                    "short" : "historie bij IMG",
                    "format" : ""
                },
                {
                    "label": "Nieuwe schade",
                    "column": "_4monthavg_2-geen-meldingen",
                    "colour": "blue",
                    "short" : "nieuw adres",
                    "format" : ""
                }
            ]
        ],
        "header" : "Meldingen in trillingsgebied 5-8.5 mm/s",
        "description" : "Een overzicht van de gemiddeld toegekende schadevergoedingen in de afgelopen week, onderverdeeld naar de zones met een specifieke minimale trillingssterkte (1% overschrijdingskans)<br/><br/>Aanvullend: Bij een klein deel van de adressen is geen trillingsgebied geautomatiseerd te achterhalen. De gemiddelde schadevergoeding in deze categorie was afgelopen week:", // <span data-slug='first_column'></span>",
        "endpoint": "mms",  // ivm in-graph gemeentekiezer
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-12','img-grap-container-medium-small']
    },
    {
        "slug" : "trend_mms_gem_schadebedrag_nieuw",
        "graph": "TrendLineMms",
        "args": [],
        "parameters": [
            [
                {
                    "label": "Schade met historie bij NAM en IMG",
                    "column": "_4monthavg_3-beiden-meldingen",
                    "colour": "lightBlue",
                    "short" : "historie bij beiden",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij NAM",
                    "column": "_4monthavg_3-cvw-meldingen",
                    "colour": "yellow",
                    "short" : "historie bij NAM",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij IMG",
                    "column": "_4monthavg_3-img-meldingen",
                    "colour": "green",
                    "short" : "historie bij IMG",
                    "format" : ""
                },
                {
                    "label": "Nieuwe schade",
                    "column": "_4monthavg_3-geen-meldingen",
                    "colour": "blue",
                    "short" : "nieuw adres",
                    "format" : ""
                }
            ]
        ],
        "header" : "Meldingen in trillingsgebied 8.5-16 mm/s",
        "description" : "Een overzicht van de gemiddeld toegekende schadevergoedingen in de afgelopen week, onderverdeeld naar de zones met een specifieke minimale trillingssterkte (1% overschrijdingskans)<br/><br/>Aanvullend: Bij een klein deel van de adressen is geen trillingsgebied geautomatiseerd te achterhalen. De gemiddelde schadevergoeding in deze categorie was afgelopen week:", // <span data-slug='first_column'></span>",
        "endpoint": "mms",  // ivm in-graph gemeentekiezer
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-12','img-grap-container-medium-small']
    },
    {
        "slug" : "trend_mms_gem_schadebedrag_nieuw",
        "graph": "TrendLineMms",
        "args": [],
        "parameters": [
            [
                {
                    "label": "Schade met historie bij NAM en IMG",
                    "column": "_4monthavg_4-beiden-meldingen",
                    "colour": "lightBlue",
                    "short" : "historie bij beiden",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij NAM",
                    "column": "_4monthavg_4-cvw-meldingen",
                    "colour": "yellow",
                    "short" : "historie bij NAM",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij IMG",
                    "column": "_4monthavg_4-img-meldingen",
                    "colour": "green",
                    "short" : "historie bij IMG",
                    "format" : ""
                },
                {
                    "label": "Nieuwe schade",
                    "column": "_4monthavg_4-geen-meldingen",
                    "colour": "blue",
                    "short" : "nieuw adres",
                    "format" : ""
                }
            ]
        ],
        "header" : "Meldingen in trillingsgebied 16-20 mm/s",
        "description" : "Een overzicht van de gemiddeld toegekende schadevergoedingen in de afgelopen week, onderverdeeld naar de zones met een specifieke minimale trillingssterkte (1% overschrijdingskans)<br/><br/>Aanvullend: Bij een klein deel van de adressen is geen trillingsgebied geautomatiseerd te achterhalen. De gemiddelde schadevergoeding in deze categorie was afgelopen week:", // <span data-slug='first_column'></span>",
        "endpoint": "mms",  // ivm in-graph gemeentekiezer
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-12','img-grap-container-medium-small']
    },
    {
        "slug" : "trend_mms_gem_schadebedrag_nieuw",
        "graph": "TrendLineMms",
        "args": [],
        "parameters": [
            [
                {
                    "label": "Schade met historie bij NAM en IMG",
                    "column": "_4monthavg_5-beiden-meldingen",
                    "colour": "lightBlue",
                    "short" : "historie bij beiden",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij NAM",
                    "column": "_4monthavg_5-cvw-meldingen",
                    "colour": "yellow",
                    "short" : "historie bij NAM",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij IMG",
                    "column": "_4monthavg_5-img-meldingen",
                    "colour": "green",
                    "short" : "historie bij IMG",
                    "format" : ""
                },
                {
                    "label": "Nieuwe schade",
                    "column": "_4monthavg_5-geen-meldingen",
                    "colour": "blue",
                    "short" : "nieuw adres",
                    "format" : ""
                }
            ]
        ],
        "header" : "Meldingen in trillingsgebied 20-40 mm/s",
        "description" : "Een overzicht van de gemiddeld toegekende schadevergoedingen in de afgelopen week, onderverdeeld naar de zones met een specifieke minimale trillingssterkte (1% overschrijdingskans)<br/><br/>Aanvullend: Bij een klein deel van de adressen is geen trillingsgebied geautomatiseerd te achterhalen. De gemiddelde schadevergoeding in deze categorie was afgelopen week:", // <span data-slug='first_column'></span>",
        "endpoint": "mms",  // ivm in-graph gemeentekiezer
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-12','img-grap-container-medium-small']
    },
    {
        "slug" : "trend_mms_gem_schadebedrag_nieuw",
        "graph": "StackedAreaMms",
        "args": [],
        "parameters": [
            [   
                {
                    "label": "Nieuwe schade",
                    "column": "6-geen-meldingen",
                    "colour": "blue",
                    "short" : "nieuw adres",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij NAM",
                    "column": "6-cvw-meldingen",
                    "colour": "yellow",
                    "short" : "historie bij NAM",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij IMG",
                    "column": "6-img-meldingen",
                    "colour": "green",
                    "short" : "historie bij IMG",
                    "format" : ""
                },
                {
                    "label": "Schade met historie bij NAM en IMG",
                    "column": "6-beiden-meldingen",
                    "colour": "lightBlue",
                    "short" : "historie bij beiden",
                    "format" : ""
                }
               
            ]
        ],
        "header" : "Meldingen in trillingsgebied > 40 mm/s",
        "description" : "Een overzicht van de gemiddeld toegekende schadevergoedingen in de afgelopen week, onderverdeeld naar de zones met een specifieke minimale trillingssterkte (1% overschrijdingskans)<br/><br/>Aanvullend: Bij een klein deel van de adressen is geen trillingsgebied geautomatiseerd te achterhalen. De gemiddelde schadevergoeding in deze categorie was afgelopen week:", // <span data-slug='first_column'></span>",
        "endpoint": "mms",  // ivm in-graph gemeentekiezer
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-12','img-grap-container-medium-small']
    }
]