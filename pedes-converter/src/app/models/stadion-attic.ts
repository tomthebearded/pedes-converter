export class StadionAttic {
    stadion: number;
    result: string;
    measure: string = "m";
    collapsed: boolean;
    
    constructor(collapsed: boolean){
        this.collapsed = collapsed;
    }
}