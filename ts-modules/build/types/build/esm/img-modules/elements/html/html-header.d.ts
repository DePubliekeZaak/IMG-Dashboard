export default class HtmlHeader {
    constructor(element: any, label: any);
    element: any;
    label: any;
    draw(): boolean;
    headerElement: HTMLDivElement;
    redraw(): void;
    hide(): void;
    show(): void;
}
