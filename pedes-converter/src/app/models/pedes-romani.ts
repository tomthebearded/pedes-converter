export class PedesRomani {
    pedes: number;
    semis: boolean;
    result: string;
    measure: string = "cm";
    collapsed: boolean = false;
    
    constructor(collapsed: boolean){
        this.collapsed = collapsed;
    }
}