export class LibraRomana {
    libra: number;
    result: string;
    measure: string = "g";
    collapsed: boolean = true;

    constructor(collapsed: boolean) {
        this.collapsed = collapsed;
    }
}
