import { GraphObject } from "../types/graphObject";
import { IGraphMapping } from "../types/mapping";

const pad = 40;
const margin = 140;

export const dashboardHome: (GraphObject | IGraphMapping)[] = [
  {
    slug: "alle_regelingen_header",
    graph: "Grid",
    parameters: [
      [
        {
          label: "Alle regelingen",
          column: "vv",
          colour: "blue",
        },
      ],
    ],
    header: "Alle regelingen",
    description: "",
    endpoint: "meldingen",
    segment: "all",
    elementClasslist: ["img-graph-container", "img-graph-container-12"],
    children: [
      {
        slug: "alle_regelingen_meldingen",
        graph: "CijferV2",
        parameters: [
          [
            {
              label: "Totaal uitgekeerd",
              column: "alle_regelingen_meldingen",
              colour: "blue",
              units: "meldingen",
            },
          ],
        ],
        header: "",
        description: "",
        endpoint: "meldingen",
        segment: "all",
        elementClasslist: [
          "img-graph-container",
          "img-graph-grid-tablet-width-6",
          "img-graph-grid-column-start-1",
          "img-graph-grid-width-3",
          "img-graph-grid-row-start-1",
        ],
      },
      {
        slug: "ims_uitgekeerd",
        graph: "CijferV2",
        parameters: [
          [
            {
              label: "Totaal afgehandeld",
              column: "alle_regelingen_afgehandeld",
              colour: "moss",
              units: "afgehandeld",
            },
          ],
        ],
        header: "",
        description: "",
        endpoint: "voortgang",
        segment: "all",
        elementClasslist: [
          "img-graph-container",
          "img-graph-grid-tablet-width-6",
          "img-graph-grid-tablet-column-start-7",
          "img-graph-grid-column-start-4",
          "img-graph-grid-width-3",
          "img-graph-grid-row-start-1",
        ],
      },
      {
        slug: "ims_uitgekeerd",
        graph: "CijferV2",
        parameters: [
          [
            {
              label: "Totaal uitgekeerd",
              column: "alle_regelingen_totaal_verleend",
              colour: "lightBlue",
              format: "currency",
              units: "uitgekeerd",
            },
          ],
        ],
        header: "",
        description: "",
        endpoint: "vergoedingen",
        segment: "all",
        elementClasslist: [
          "img-graph-container",
          "img-graph-grid-tablet-column-start-1",
          "img-graph-grid-tablet-width-6",
          "img-graph-grid-column-start-7",
          "img-graph-grid-width-3",
          "img-graph-grid-height-3",
        ],
      },
      {
        slug: "bol_tevredenheid_algemeen",
        graph: "CijferV2",
        args: [],
        parameters: [
          [
            {
              label: "Tevredenheidscijfer",
              column: "doorlopend_cijfer",
              colour: "orange",
              format: "decimal",
              units: "waardering",
            },
          ],
        ],
        header: "",
        description: "", //"Het betreft hier een gemiddelde gebaseerd op alle reacties die sinds de start van diverse metingen zijn binnengekomen. Er wordt daarbij voor verschillende regelingen per e-mail om een reactie gevraagd kort nadat het besluit is bekend gemaakt bij de aanvrager. Na een besluit over de aanvraag tot vergoeding van fysieke schade wordt gevraagd: “Welk rapportcijfer geeft u het besluit dat u ontvangen heeft? (1-10)” Na een besluit over de aanvraag tot vergoeding van waardedaling wordt gevraagd: “Hoe tevreden bent u over het indienen en afhandelen van uw aanvraag?(1-10)” Hoe meer besluiten er zijn genomen bij die specifieke regeling, hoe zwaarder dat gemiddelde vervolgens meetelt bij het tevredenheidscijfer voor het IMG als geheel. Onder het totaalcijfer over de gehele periode, staat het doorlopend gemiddelde totaalcijfer voor die maand weergegeven. Het totaalcijfer wordt wekelijks geüpdatet en is tot op heden gebaseerd op <span data-slug='aantal_respondenten'>xxxxx</span> reacties.",
        endpoint: "tevredenheid",
        segment: "all",
        elementClasslist: [
          "img-graph-container",
          "img-graph-grid-tablet-column-start-7",
          "img-graph-grid-tablet-width-6",
          "img-graph-grid-column-start-10",
          "img-graph-grid-width-3",
        ],
      },
    ],
  },
  {
    slug: "fysieke_schade_header",
    graph: "Grid",
    parameters: [
      [
        {
          label: "Alle regelingen",
          column: "vv",
          colour: "blue",
        },
      ],
    ],
    header: "Fysieke schade",
    description: "",
    linkLabel: "Meer over fysieke schade",
    linkTopic: "fysieke_schade",
    endpoint: "meldingen",
    segment: "all",
    elementClasslist: ["img-graph-container", "img-graph-container-12"],
    children: [
      {
        slug: "fs_meldingen",
        graph: "CijferV2",
        parameters: [
          [
            {
              label: "Totaal uitgekeerd",
              column: "schademeldingen",
              colour: "orange",
              units: "meldingen",
            },
          ],
        ],
        header: "",
        description: "",
        endpoint: "meldingen",
        segment: "all",
        elementClasslist: [
          "img-graph-container",
          "img-graph-grid-tablet-width-4",
          "img-graph-grid-column-start-1",
          "img-graph-grid-width-3",
          "img-graph-grid-row-start-1",
          "img-graph-grid-height-2",
        ],
      },
      {
        slug: "fs_meldingen",
        graph: "CijferV2",
        parameters: [
          [
            {
              label: "Afgehandeld",
              column: "afgehandeld",
              colour: "moss",
              units: "afgehandeld",
            },
          ],
        ],
        header: "",
        description: "",
        endpoint: "meldingen",
        segment: "all",
        elementClasslist: [
          "img-graph-container",
          "img-graph-grid-tablet-width-4",
          "img-graph-grid-column-start-1",
          "img-graph-grid-column-end-4",
          "img-graph-grid-row-start-3",
          "img-graph-grid-height-2",
        ],
      },
      {
        slug: "fs_meldingen",
        graph: "CijferV2",
        parameters: [
          [
            {
              label: "In behandeling",
              column: "in_behandeling",
              colour: "blue",
              units: "in behandeling",
            },
          ],
        ],
        header: "",
        description: "",
        endpoint: "meldingen",
        segment: "all",
        elementClasslist: [
          "img-graph-container",
          "img-graph-grid-tablet-width-4",
          "img-graph-grid-column-start-1",
          "img-graph-grid-width-3",
          "img-graph-grid-row-start-5",
          "img-graph-grid-height-2",
        ],
      },
      {
        slug: "trend_in_behandeling",
        graph: "TrendBars",
        parameters: [
          [
            {
              label: "Schademeldingen",
              column: "schademeldingen",
              colour: "orange",
              short: "meldingen",
            },
            {
              label: "In behandeling",
              column: "in_behandeling",
              colour: "blue",
              short: "in beh.",
            },
          ],
        ],
        header: "",
        description: "",
        endpoint: "voortgang",
        segment: "all",
        elementClasslist: [
          "img-graph-container",
          "img-graph-grid-tablet-column-start-5",
          "img-graph-grid-tablet-width-7",
          "img-graph-grid-column-start-4",
          "img-graph-grid-width-6",
          "img-graph-grid-row-start-1",
          "img-graph-grid-height-6",
          "img-mobile-margin-vertical",
        ],
      },
      {
        slug: "bol_tevredenheid_algemeen",
        graph: "CijferV2",
        args: [],
        parameters: [
          [
            {
              label: "Uitgekeerd",
              column: "fysieke_schade_totaal_verleend",
              colour: "lightBlue",
              format: "currency",
              units: "maatwerk en vaste vergoeding",
            },
          ],
        ],
        header: "",
        description: "", //"Het betreft hier een gemiddelde gebaseerd op alle reacties die sinds de start van diverse metingen zijn binnengekomen. Er wordt daarbij voor verschillende regelingen per e-mail om een reactie gevraagd kort nadat het besluit is bekend gemaakt bij de aanvrager. Na een besluit over de aanvraag tot vergoeding van fysieke schade wordt gevraagd: “Welk rapportcijfer geeft u het besluit dat u ontvangen heeft? (1-10)” Na een besluit over de aanvraag tot vergoeding van waardedaling wordt gevraagd: “Hoe tevreden bent u over het indienen en afhandelen van uw aanvraag?(1-10)” Hoe meer besluiten er zijn genomen bij die specifieke regeling, hoe zwaarder dat gemiddelde vervolgens meetelt bij het tevredenheidscijfer voor het IMG als geheel. Onder het totaalcijfer over de gehele periode, staat het doorlopend gemiddelde totaalcijfer voor die maand weergegeven. Het totaalcijfer wordt wekelijks geüpdatet en is tot op heden gebaseerd op <span data-slug='aantal_respondenten'>xxxxx</span> reacties.",
        endpoint: "vergoedingen",
        segment: "all",
        elementClasslist: [
          "img-graph-container",
          "img-graph-grid-tablet-column-start-1",
          "img-graph-grid-tablet-width-4",
          "img-graph-grid-tablet-row-start-7",
          "img-graph-grid-column-start-10",
          "img-graph-grid-width-3",
          "img-graph-grid-row-start-1",
          "img-graph-grid-height-2",
        ],
      },
      {
        slug: "bol_tevredenheid_algemeen",
        graph: "CijferV2",
        args: [],
        parameters: [
          [
            {
              label: "Uitgekeerd",
              column: "avv_totaal_verleend",
              colour: "lightBlue",
              format: "currency",
              units: "aanvullende vaste vergoeding",
            },
          ],
        ],
        header: "",
        description: "", //"Het betreft hier een gemiddelde gebaseerd op alle reacties die sinds de start van diverse metingen zijn binnengekomen. Er wordt daarbij voor verschillende regelingen per e-mail om een reactie gevraagd kort nadat het besluit is bekend gemaakt bij de aanvrager. Na een besluit over de aanvraag tot vergoeding van fysieke schade wordt gevraagd: “Welk rapportcijfer geeft u het besluit dat u ontvangen heeft? (1-10)” Na een besluit over de aanvraag tot vergoeding van waardedaling wordt gevraagd: “Hoe tevreden bent u over het indienen en afhandelen van uw aanvraag?(1-10)” Hoe meer besluiten er zijn genomen bij die specifieke regeling, hoe zwaarder dat gemiddelde vervolgens meetelt bij het tevredenheidscijfer voor het IMG als geheel. Onder het totaalcijfer over de gehele periode, staat het doorlopend gemiddelde totaalcijfer voor die maand weergegeven. Het totaalcijfer wordt wekelijks geüpdatet en is tot op heden gebaseerd op <span data-slug='aantal_respondenten'>xxxxx</span> reacties.",
        endpoint: "vergoedingen",
        segment: "all",
        elementClasslist: [
          "img-graph-container",
          "img-graph-grid-tablet-column-start-5",
          "img-graph-grid-tablet-width-4",
          "img-graph-grid-tablet-row-start-7",
          "img-graph-grid-column-start-10",
          "img-graph-grid-width-3",
          "img-graph-grid-row-start-3",
          "img-graph-grid-height-2",
        ],
      },
      {
        slug: "bol_tevredenheid_algemeen",
        graph: "Cijfer",
        args: [],
        parameters: [
          [
            {
              label: "Tevredenheidscijfer",
              column: "fysieke_schade_doorlopend_cijfer",
              colour: "orange",
              format: "decimal",
              units: "waardering",
            },
            {
              label: "Tevredenheidscijfer",
              column: "fysieke_schade_maandcijfer",
              colour: "orange",
            },
            {
              label: "Tevredenheidscijfer",
              column: "fysieke_schade_aantal_respondenten",
              colour: "orange",
            },
          ],
        ],
        header: "",
        description: "", //"Het betreft hier een gemiddelde gebaseerd op alle reacties die sinds de start van diverse metingen zijn binnengekomen. Er wordt daarbij voor verschillende regelingen per e-mail om een reactie gevraagd kort nadat het besluit is bekend gemaakt bij de aanvrager. Na een besluit over de aanvraag tot vergoeding van fysieke schade wordt gevraagd: “Welk rapportcijfer geeft u het besluit dat u ontvangen heeft? (1-10)” Na een besluit over de aanvraag tot vergoeding van waardedaling wordt gevraagd: “Hoe tevreden bent u over het indienen en afhandelen van uw aanvraag?(1-10)” Hoe meer besluiten er zijn genomen bij die specifieke regeling, hoe zwaarder dat gemiddelde vervolgens meetelt bij het tevredenheidscijfer voor het IMG als geheel. Onder het totaalcijfer over de gehele periode, staat het doorlopend gemiddelde totaalcijfer voor die maand weergegeven. Het totaalcijfer wordt wekelijks geüpdatet en is tot op heden gebaseerd op <span data-slug='aantal_respondenten'>xxxxx</span> reacties.",
        endpoint: "tevredenheid",
        segment: "all",
        elementClasslist: [
          "img-graph-container",
          "img-graph-grid-tablet-column-start-9",
          "img-graph-grid-tablet-width-3",
          "img-graph-grid-tablet-row-start-7",
          "img-graph-grid-column-start-10",
          "img-graph-grid-width-3",
          "img-graph-grid-row-start-5",
          "img-graph-grid-height-4",
        ],
      },
    ],
  },
  {
    slug: "keuzepaden_header",
    graph: "Grid",
    parameters: [
      [
        {
          label: "Keuzepaden fysieke schade",
          column: "vv",
          colour: "blue",
        },
      ],
    ],
    header: "Keuzes binnen fysieke schade",
    description: "",
    endpoint: "meldingen",
    segment: "all",
    elementClasslist: ["img-graph-container", "img-graph-container-12"],
    children: [
      {
        slug: "ves_meldingen",
        graph: "CijferV2",
        parameters: [
          [
            {
              label: "Vaste vergoeding",
              column: "vaste_vergoeding_meldingen_cumulatief",
              colour: "blue",
              units: "vaste vergoeding",
            },
          ],
        ],
        header: "",
        description: "",
        endpoint: "fs_wekelijks",
        segment: "all",
        elementClasslist: [
          "img-graph-container",
          "img-graph-grid-tablet-width-6",
          "img-graph-grid-column-start-1",
          "img-graph-grid-width-3",
          "img-graph-grid-row-start-1",
        ],
      },
      {
        slug: "avv_meldingen",
        graph: "CijferV2",
        parameters: [
          [
            {
              label: "Aanvullende vaste vergoeding",
              column: "aanvullende_vaste_vergoeding_meldingen_cumulatief",
              colour: "moss",
              units: "aanvullende vaste vergoeding",
            },
          ],
        ],
        header: "",
        description: "",
        endpoint: "fs_wekelijks",
        segment: "all",
        elementClasslist: [
          "img-graph-container",
          "img-graph-grid-tablet-width-6",
          "img-graph-grid-tablet-column-start-7",
          "img-graph-grid-column-start-4",
          "img-graph-grid-width-3",
          "img-graph-grid-row-start-1",
        ],
      },
      {
        slug: "hin_aanvragen",
        graph: "CijferV2",
        parameters: [
          [
            {
              label: "Herstel in Natura",
              column: "herstel_hin60k_cumulatief",
              colour: "lightBlue",
              units: "herstel in natura",
            },
          ],
        ],
        header: "",
        description: "",
        endpoint: "fs_wekelijks",
        segment: "all",
        elementClasslist: [
          "img-graph-container",
          "img-graph-grid-tablet-column-start-1",
          "img-graph-grid-tablet-width-6",
          "img-graph-grid-column-start-7",
          "img-graph-grid-width-3",
          "img-graph-grid-height-3",
        ],
      },
      {
        slug: "hea_aanvragen",
        graph: "CijferV2",
        args: [],
        parameters: [
          [
            {
              label: "Herstel met eigen aannemer",
              column: "herstel_hea_cumulatief",
              colour: "orange",
              units: "herstel met eigen aannemer",
            },
          ],
        ],
        header: "",
        description: "", //"Het betreft hier een gemiddelde gebaseerd op alle reacties die sinds de start van diverse metingen zijn binnengekomen. Er wordt daarbij voor verschillende regelingen per e-mail om een reactie gevraagd kort nadat het besluit is bekend gemaakt bij de aanvrager. Na een besluit over de aanvraag tot vergoeding van fysieke schade wordt gevraagd: “Welk rapportcijfer geeft u het besluit dat u ontvangen heeft? (1-10)” Na een besluit over de aanvraag tot vergoeding van waardedaling wordt gevraagd: “Hoe tevreden bent u over het indienen en afhandelen van uw aanvraag?(1-10)” Hoe meer besluiten er zijn genomen bij die specifieke regeling, hoe zwaarder dat gemiddelde vervolgens meetelt bij het tevredenheidscijfer voor het IMG als geheel. Onder het totaalcijfer over de gehele periode, staat het doorlopend gemiddelde totaalcijfer voor die maand weergegeven. Het totaalcijfer wordt wekelijks geüpdatet en is tot op heden gebaseerd op <span data-slug='aantal_respondenten'>xxxxx</span> reacties.",
        endpoint: "fs_wekelijks",
        segment: "all",
        elementClasslist: [
          "img-graph-container",
          "img-graph-grid-tablet-column-start-7",
          "img-graph-grid-tablet-width-6",
          "img-graph-grid-column-start-10",
          "img-graph-grid-width-3",
        ],
      },
    ],
  },
  {
    slug: "wd_header",
    graph: "Grid",
    parameters: [
      [
        {
          label: "Alle regelingen",
          column: "vv",
          colour: "blue",
        },
      ],
    ],
    header: "Waardedaling",
    description: "",
    linkLabel: "Meer over waardedaling",
    linkTopic: "waardedaling",
    endpoint: "meldingen",
    segment: "all",
    elementClasslist: ["img-graph-container", "img-graph-container-12"],
    children: [
      {
        slug: "wd_aanvragen",
        graph: "CijferV2",
        parameters: [
          [
            {
              label: "Aanvragen",
              column: "aanvragen",
              colour: "orange",
              units: "meldingen",
            },
          ],
        ],
        header: "",
        description: "",
        endpoint: "waardedaling",
        segment: "all",
        elementClasslist: [
          "img-graph-container",
          "img-graph-grid-tablet-width-4",
          "img-graph-grid-column-start-1",
          "img-graph-grid-width-3",
          "img-graph-grid-row-start-1",
          "img-graph-grid-height-2",
        ],
      },
      {
        slug: "wd_afgehandeld",
        graph: "CijferV2",
        parameters: [
          [
            {
              label: "Afgehandeld",
              column: "waardedaling_besluiten",
              colour: "moss",
              units: "afgehandeld",
            },
          ],
        ],
        header: "",
        description: "",
        endpoint: "meldingen",
        segment: "all",
        elementClasslist: [
          "img-graph-container",
          "img-graph-grid-tablet-width-4",
          "img-graph-grid-column-start-1",
          "img-graph-grid-column-end-4",
          "img-graph-grid-row-start-3",
          "img-graph-grid-row-end-5",
        ],
      },
      {
        slug: "fs_meldingen",
        graph: "CijferV2",
        parameters: [
          [
            {
              label: "In behandeling",
              column: "waardedaling_in_behandeling",
              colour: "blue",
              units: "in behandeling",
            },
          ],
        ],
        header: "",
        description: "",
        endpoint: "waardedaling",
        segment: "all",
        elementClasslist: [
          "img-graph-container",
          "img-graph-grid-tablet-width-4",
          "img-graph-grid-column-start-1",
          "img-graph-grid-column-end-4",
          "img-graph-grid-row-start-5",
          "img-graph-grid-row-end-7",
        ],
      },
      {
        slug: "trend_in_behandeling",
        graph: "TrendBars",
        parameters: [
          [
            {
              label: "Aanvragen",
              column: "aanvragen",
              colour: "orange",
              short: "meldingen",
            },
            {
              label: "In behandeling",
              column: "waardedaling_in_behandeling",
              colour: "blue",
              short: "in beh.",
            },
          ],
        ],
        header: "",
        description: "",
        endpoint: "waardedaling",
        segment: "all",
        elementClasslist: [
          "img-graph-container",
          "img-graph-grid-tablet-column-start-5",
          "img-graph-grid-tablet-width-7",
          "img-graph-grid-column-start-4",
          "img-graph-grid-column-end-10",
          "img-graph-grid-row-start-1",
          "img-graph-grid-row-end-7",
          "img-mobile-margin-vertical",
        ],
      },
      {
        slug: "bol_tevredenheid_algemeen",
        graph: "CijferV2",
        args: [],
        parameters: [
          [
            {
              label: "Uitgekeerd",
              column: "waardedaling_totaal_verleend",
              colour: "lightBlue",
              format: "currency",
              units: "uitgekeerd",
            },
          ],
        ],
        header: "",
        description: "", //"Het betreft hier een gemiddelde gebaseerd op alle reacties die sinds de start van diverse metingen zijn binnengekomen. Er wordt daarbij voor verschillende regelingen per e-mail om een reactie gevraagd kort nadat het besluit is bekend gemaakt bij de aanvrager. Na een besluit over de aanvraag tot vergoeding van fysieke schade wordt gevraagd: “Welk rapportcijfer geeft u het besluit dat u ontvangen heeft? (1-10)” Na een besluit over de aanvraag tot vergoeding van waardedaling wordt gevraagd: “Hoe tevreden bent u over het indienen en afhandelen van uw aanvraag?(1-10)” Hoe meer besluiten er zijn genomen bij die specifieke regeling, hoe zwaarder dat gemiddelde vervolgens meetelt bij het tevredenheidscijfer voor het IMG als geheel. Onder het totaalcijfer over de gehele periode, staat het doorlopend gemiddelde totaalcijfer voor die maand weergegeven. Het totaalcijfer wordt wekelijks geüpdatet en is tot op heden gebaseerd op <span data-slug='aantal_respondenten'>xxxxx</span> reacties.",
        endpoint: "waardedaling",
        segment: "all",
        elementClasslist: [
          "img-graph-container",
          "img-graph-grid-tablet-column-start-1",
          "img-graph-grid-tablet-width-4",
          "img-graph-grid-tablet-row-start-7",
          "img-graph-grid-column-start-10",
          "img-graph-grid-width-3",
          "img-graph-grid-row-start-1",
          "img-graph-grid-height-2",
        ],
      },
      {
        slug: "bol_tevredenheid_algemeen",
        graph: "Cijfer",
        args: [],
        parameters: [
          [
            {
              label: "Tevredenheidscijfer",
              column: "waardedaling_doorlopend_cijfer",
              colour: "orange",
              format: "decimal",
              units: "waardering",
            },
            {
              label: "Tevredenheidscijfer",
              column: "waardedaling_schade_maandcijfer",
              colour: "orange",
            },
            {
              label: "Tevredenheidscijfer",
              column: "waardedaling_aantal_respondenten",
              colour: "orange",
            },
          ],
        ],
        header: "",
        description: "", //"Het betreft hier een gemiddelde gebaseerd op alle reacties die sinds de start van diverse metingen zijn binnengekomen. Er wordt daarbij voor verschillende regelingen per e-mail om een reactie gevraagd kort nadat het besluit is bekend gemaakt bij de aanvrager. Na een besluit over de aanvraag tot vergoeding van fysieke schade wordt gevraagd: “Welk rapportcijfer geeft u het besluit dat u ontvangen heeft? (1-10)” Na een besluit over de aanvraag tot vergoeding van waardedaling wordt gevraagd: “Hoe tevreden bent u over het indienen en afhandelen van uw aanvraag?(1-10)” Hoe meer besluiten er zijn genomen bij die specifieke regeling, hoe zwaarder dat gemiddelde vervolgens meetelt bij het tevredenheidscijfer voor het IMG als geheel. Onder het totaalcijfer over de gehele periode, staat het doorlopend gemiddelde totaalcijfer voor die maand weergegeven. Het totaalcijfer wordt wekelijks geüpdatet en is tot op heden gebaseerd op <span data-slug='aantal_respondenten'>xxxxx</span> reacties.",
        endpoint: "tevredenheid",
        segment: "all",
        elementClasslist: [
          "img-graph-container",
          "img-graph-grid-tablet-row-start-7",
          "img-graph-grid-tablet-column-start-7",
          "img-graph-grid-tablet-width-3",
          "img-graph-grid-column-start-10",
          "img-graph-grid-width-3",
          "img-graph-grid-row-start-3",
          "img-graph-grid-height-4",
        ],
      },
    ],
  },
  {
    slug: "ims_header",
    graph: "Grid",
    parameters: [
      [
        {
          label: "Immateriële schade",
          column: "vv",
          colour: "blue",
        },
      ],
    ],
    header: "Immateriële schade",
    description: "",
    linkLabel: "Meer over immateriële schade",
    linkTopic: "immateriele_schade",
    endpoint: "meldingen",
    segment: "all",
    elementClasslist: ["img-graph-container", "img-graph-container-12"],
    children: [
      {
        slug: "ims_aanvragen",
        graph: "CijferV2",
        parameters: [
          [
            {
              label: "Aanvragen",
              column: "ims_totaal_ingediend",
              colour: "orange",
              units: "aanvragen",
            },
          ],
        ],
        header: "",
        description: "",
        endpoint: "immateriele_schade",
        segment: "all",
        elementClasslist: [
          "img-graph-container",
          "img-graph-grid-tablet-width-4",
          "img-graph-grid-column-start-1",
          "img-graph-grid-column-end-4",
          "img-graph-grid-row-start-1",
          "img-graph-grid-row-end-3",
        ],
      },
      {
        slug: "wd_afgehandeld",
        graph: "CijferV2",
        parameters: [
          [
            {
              label: "Afgehandeld",
              column: "ims_totaal_afgehandeld",
              colour: "moss",
              units: "afgehandeld",
            },
          ],
        ],
        header: "",
        description: "",
        endpoint: "meldingen",
        segment: "all",
        elementClasslist: [
          "img-graph-container",
          "img-graph-grid-tablet-width-4",
          "img-graph-grid-column-start-1",
          "img-graph-grid-column-end-4",
          "img-graph-grid-row-start-3",
          "img-graph-grid-row-end-5",
        ],
      },
      {
        slug: "fs_meldingen",
        graph: "CijferV2",
        parameters: [
          [
            {
              label: "In behandeling",
              column: "ims_totaal_in_behandeling",
              colour: "blue",
              units: "in behandeling",
            },
          ],
        ],
        header: "",
        description: "",
        endpoint: "waardedaling",
        segment: "all",
        elementClasslist: [
          "img-graph-container",
          "img-graph-grid-tablet-width-4",
          "img-graph-grid-column-start-1",
          "img-graph-grid-column-end-4",
          "img-graph-grid-row-start-5",
          "img-graph-grid-row-end-7",
        ],
      },
      {
        slug: "trend_in_behandeling",
        graph: "TrendBars",
        parameters: [
          [
            {
              label: "Aanvragen",
              column: "ims_totaal_ingediend",
              colour: "orange",
              short: "meldingen",
            },
            {
              label: "In behandeling",
              column: "ims_totaal_in_behandeling",
              colour: "blue",
              short: "in beh.",
            },
          ],
        ],
        header: "",
        description: "",
        endpoint: "waardedaling",
        segment: "all",
        elementClasslist: [
          "img-graph-container",
          "img-graph-grid-tablet-column-start-5",
          "img-graph-grid-tablet-width-7",
          "img-graph-grid-column-start-4",
          "img-graph-grid-column-end-10",
          "img-graph-grid-row-start-1",
          "img-graph-grid-row-end-7",
          "img-mobile-margin-vertical",
        ],
      },
      {
        slug: "bol_tevredenheid_algemeen",
        graph: "CijferV2",
        args: [],
        parameters: [
          [
            {
              label: "Uitgekeerd",
              column: "ims_totaal_verleend",
              colour: "lightBlue",
              format: "currency",
              units: "uitgekeerd",
            },
          ],
        ],
        header: "",
        description: "", //"Het betreft hier een gemiddelde gebaseerd op alle reacties die sinds de start van diverse metingen zijn binnengekomen. Er wordt daarbij voor verschillende regelingen per e-mail om een reactie gevraagd kort nadat het besluit is bekend gemaakt bij de aanvrager. Na een besluit over de aanvraag tot vergoeding van fysieke schade wordt gevraagd: “Welk rapportcijfer geeft u het besluit dat u ontvangen heeft? (1-10)” Na een besluit over de aanvraag tot vergoeding van waardedaling wordt gevraagd: “Hoe tevreden bent u over het indienen en afhandelen van uw aanvraag?(1-10)” Hoe meer besluiten er zijn genomen bij die specifieke regeling, hoe zwaarder dat gemiddelde vervolgens meetelt bij het tevredenheidscijfer voor het IMG als geheel. Onder het totaalcijfer over de gehele periode, staat het doorlopend gemiddelde totaalcijfer voor die maand weergegeven. Het totaalcijfer wordt wekelijks geüpdatet en is tot op heden gebaseerd op <span data-slug='aantal_respondenten'>xxxxx</span> reacties.",
        endpoint: "waardedaling",
        segment: "all",
        elementClasslist: [
          "img-graph-container",
          "img-graph-grid-tablet-column-start-1",
          "img-graph-grid-tablet-width-4",
          "img-graph-grid-tablet-row-start-7",
          "img-graph-grid-column-start-10",
          "img-graph-grid-width-3",
          "img-graph-grid-row-start-1",
          "img-graph-grid-height-2",
        ],
      },
      {
        slug: "bol_tevredenheid_algemeen",
        graph: "Cijfer",
        args: [],
        parameters: [
          [
            {
              label: "Tevredenheidscijfer",
              column: "ims_doorlopend_cijfer",
              colour: "orange",
              format: "decimal",
              units: "waardering",
            },
            {
              label: "Tevredenheidscijfer",
              column: "ims_maandcijfer",
              colour: "orange",
            },
            {
              label: "Tevredenheidscijfer",
              column: "ims_aantal_respondenten",
              colour: "orange",
            },
          ],
        ],
        header: "",
        description: "", //"Het betreft hier een gemiddelde gebaseerd op alle reacties die sinds de start van diverse metingen zijn binnengekomen. Er wordt daarbij voor verschillende regelingen per e-mail om een reactie gevraagd kort nadat het besluit is bekend gemaakt bij de aanvrager. Na een besluit over de aanvraag tot vergoeding van fysieke schade wordt gevraagd: “Welk rapportcijfer geeft u het besluit dat u ontvangen heeft? (1-10)” Na een besluit over de aanvraag tot vergoeding van waardedaling wordt gevraagd: “Hoe tevreden bent u over het indienen en afhandelen van uw aanvraag?(1-10)” Hoe meer besluiten er zijn genomen bij die specifieke regeling, hoe zwaarder dat gemiddelde vervolgens meetelt bij het tevredenheidscijfer voor het IMG als geheel. Onder het totaalcijfer over de gehele periode, staat het doorlopend gemiddelde totaalcijfer voor die maand weergegeven. Het totaalcijfer wordt wekelijks geüpdatet en is tot op heden gebaseerd op <span data-slug='aantal_respondenten'>xxxxx</span> reacties.",
        endpoint: "tevredenheid",
        segment: "all",
        elementClasslist: [
          "img-graph-container",
          "img-graph-grid-tablet-row-start-7",
          "img-graph-grid-tablet-column-start-7",
          "img-graph-grid-tablet-width-3",
          "img-graph-grid-column-start-10",
          "img-graph-grid-width-3",
          "img-graph-grid-row-start-3",
          "img-graph-grid-height-4",
        ],
      },
    ],
  },
  {
    slug: "aos_header",
    graph: "Grid",
    parameters: [
      [
        {
          label: "Acuut onveilige situaties",
          column: "vv",
          colour: "blue",
        },
      ],
    ],
    header: "Acuut onveilige situaties",
    description: "",
    endpoint: "meldingen",
    segment: "all",
    elementClasslist: ["img-graph-container", "img-graph-container-12"],
    children: [
      {
        slug: "aos_meldingen",
        graph: "CijferV2",
        parameters: [
          [
            {
              label: "Meldingen",
              column: "aos_meldingen",
              colour: "orange",
              units: "meldingen",
            },
          ],
        ],
        header: "",
        description: "",
        endpoint: "meldingen",
        segment: "all",
        elementClasslist: [
          "img-graph-container",
          "img-graph-grid-tablet-width-4",
          "img-graph-grid-column-start-1",
          "img-graph-grid-column-end-4",
          "img-graph-grid-row-start-1",
          "img-graph-grid-row-end-3",
        ],
      },
      {
        slug: "wd_afgehandeld",
        graph: "CijferV2",
        parameters: [
          [
            {
              label: "Gegronde meldingen",
              column: "aos_meldingen_gegrond",
              colour: "moss",
              units: "gegrond",
            },
          ],
        ],
        header: "",
        description: "",
        endpoint: "meldingen",
        segment: "all",
        elementClasslist: [
          "img-graph-container",
          "img-graph-grid-tablet-width-4",
          "img-graph-grid-column-start-1",
          "img-graph-grid-column-end-4",
          "img-graph-grid-row-start-3",
          "img-graph-grid-row-end-5",
        ],
      },
      // {
      //     "slug" : "fs_meldingen",
      //     "graph": "CijferV2",
      //     "parameters": [
      //         [
      //             {
      //                 "label": "In behandeling",
      //                 "column": "immateriele_schade_in_behandeling",
      //                 "colour": "blue",
      //                 "units" : "in behandeling"
      //             }
      //         ]
      //     ],
      //     "header": "",
      //     "description" : "",
      //     "endpoint": "waardedaling",
      //     "segment": "all",
      //     "elementClasslist": ['img-graph-container','img-graph-grid-column-start-1','img-graph-grid-column-end-4','img-graph-grid-row-start-5','img-graph-grid-row-end-7']
      // },
      {
        slug: "trend_in_behandeling",
        graph: "TrendBars",
        parameters: [
          [
            {
              label: "Meldingen",
              column: "nieuw_aos_meldingen",
              colour: "orange",
              short: "meldingen",
            },
            {
              label: "Gegrond",
              column: "nieuw_aos_meldingen_gegrond",
              colour: "blue",
              short: "gegrond",
            },
          ],
        ],
        header: "",
        description: "",
        endpoint: "waardedaling",
        segment: "all",
        elementClasslist: [
          "img-graph-container",
          "img-graph-grid-tablet-column-start-5",
          "img-graph-grid-tablet-width-7",
          "img-graph-grid-column-start-4",
          "img-graph-grid-width-9",
          "img-graph-grid-row-start-1",
          "img-graph-grid-height-6",
          "img-mobile-margin-vertical",
        ],
      },
      // {
      //     "slug": "meldingen_taart_aos_meldingen",
      //     "graph": "PieChartSumV2",
      //     "parameters":  [
      //         [
      //             {
      //                 "label": "Wel",
      //                 "column": "aos_meldingen_gegrond",
      //                 "colour": "moss"
      //             },
      //             {
      //                 "label": "Niet",
      //                 "column": ['aos_meldingen','aos_meldingen_gegrond','-'],
      //                 "colour": "blue"
      //             }
      //         ]
      //     ],
      //     "header" : "", // "Wel/niet acuut onveilige situatie",
      //     "description" : "", // "Het aantal meldingen van een mogelijk acuut onveilige situatie in totaal, waarbij ook het aantal meldingen is aangeven waar na een veiligheidsinspectie een acuut onveilige situatie is vastgesteld. Na het vaststellen ervan, neemt het IMG preventieve veiligheidsmaatregelen.",
      //     "endpoint": "meldingen",
      //     "segment": "all",
      //     "elementClasslist": [
      //         'img-graph-container',
      //         'img-graph-grid-column-start-71',
      //         'img-graph-grid-width-3',
      //         'img-graph-grid-row-start-1',
      //         'img-graph-grid-height-6'
      //     ]
      // }
    ],
  },
];
