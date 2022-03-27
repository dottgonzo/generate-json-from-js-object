export var storybookArgs = {
    size: { control: { type: "range", min: 1, max: 100 } },
    page: { control: { type: "number" } },
    enableselect: { control: { type: "boolean" } },
    selectrow: { control: { type: "boolean" } },
    disablepagination: { control: { type: "boolean" } },
    rows: { control: { type: "array" } },
    headers: { control: { type: "array" } },
    actions: { control: { type: "array" } },
    selectactions: { control: { type: "array" } },
    pagechange: { action: "pagechangeEvent" },
    tableaction: { action: "tableactionEvent" },
    tableCustomActionClick: { action: "tableCustomActionClickEvent" },
    cellclick: { action: "cellclickEvent" },
    actiononselected: { action: "actiononselectedEvent" },
    clickonrow: { action: "clickonrowEvent" },
    confirmActionModal: { action: "confirmActionModalEvent" },
    showConfirmModal: { action: "showConfirmModal" },
    externalfilter: { control: { type: "boolean" } },
    pages: { control: { type: "number" } }
};
var cssVars = [
    { name: "--bs-primary", valueType: "color", theme: "bootstrap", defaultValue: "#07689f" },
    { name: "--bs-secondary", valueType: "color", theme: "bootstrap", defaultValue: "#c9d6df" },
    { name: "--bs-success", valueType: "color", theme: "bootstrap", defaultValue: "#11d3bc" },
    { name: "--bs-info", valueType: "color", theme: "bootstrap", defaultValue: "#a2d5f2" },
    { name: "--bs-warning", valueType: "color", theme: "bootstrap", defaultValue: "#ffc107" },
    { name: "--bs-danger", valueType: "color", theme: "bootstrap", defaultValue: "#f67280" },
];
export var cssParts = [];
export var htmlSlots = [];
export var i18nLanguages = [];
export var styleSetup = {
    vars: cssVars,
    parts: cssParts
};
export var variable = {
    storybookArgs: storybookArgs,
    styleSetup: styleSetup,
    htmlSlots: htmlSlots,
    i18n: i18nLanguages,
    examples: []
};
//# sourceMappingURL=docs.js.map