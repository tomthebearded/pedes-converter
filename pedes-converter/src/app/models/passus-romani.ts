export class PassusRomani {
    passus: number;
    semis: boolean;
    result: string;
    measure: string = "m";
    collapsed: boolean;

    constructor(collapsed: boolean) {
        this.collapsed = collapsed;
    }
}
