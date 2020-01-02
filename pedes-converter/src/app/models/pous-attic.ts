export class PousAttic {
    pedes: number;
    semis: boolean;
    result: string;
    measure: string = "cm";
    collapsed: boolean;
    
    constructor(collapsed: boolean){
        this.collapsed = collapsed;
    }
}