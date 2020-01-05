export class ModiumRomani {
    modium: number;
    result: string;
    measure: string = "l";
    collapsed: boolean = true;

    constructor(collapsed: boolean) {
        this.collapsed = collapsed;
    }
}
