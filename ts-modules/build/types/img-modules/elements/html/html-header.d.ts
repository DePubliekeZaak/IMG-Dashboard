export default class HtmlHeader {
    private element;
    private label;
    headerElement: any;
    constructor(element: any, label: any);
    draw(): boolean;
    redraw(): void;
    hide(): void;
    show(): void;
}
