import { DataPart } from "@local/d3_types";
export declare class HtmlPopupV2 {
    private element;
    private description;
    popupElement: HTMLElement;
    data: DataPart[];
    constructor(element: HTMLElement, description: string);
    pop(event: any): void;
    attachData(data: DataPart[]): void;
    close(): void;
    create(): void;
    formule(): HTMLDivElement;
    populateFormula(): void;
}
