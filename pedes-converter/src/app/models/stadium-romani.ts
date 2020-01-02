export class StadiumRomani {
    stadium: number;
    result: string;
    measure: string = "m";
    collapsed: boolean;
    
    constructor(collapsed: boolean){
        this.collapsed = collapsed;
    }
}