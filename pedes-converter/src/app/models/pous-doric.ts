export class PousDoric {
    pous: number;
    result: string;
    measure: string = "cm";
    collapsed: boolean;

    constructor(collapsed: boolean) {
        this.collapsed = collapsed;
    }
}