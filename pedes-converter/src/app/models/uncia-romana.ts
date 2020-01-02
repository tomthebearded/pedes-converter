export class UnciaRomana {
    uncia: number;
    result: string;
    measure: string = "g";
    collapsed: boolean = true;

    constructor(collapsed: boolean) {
        this.collapsed = collapsed;
    }
}
