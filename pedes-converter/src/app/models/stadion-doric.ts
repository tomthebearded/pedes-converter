export class StadionDoric {
    stadion: number;
    result: string;
    measure: string = "m";
    collapsed: boolean;

    constructor(collapsed: boolean) {
        this.collapsed = collapsed;
    }
}