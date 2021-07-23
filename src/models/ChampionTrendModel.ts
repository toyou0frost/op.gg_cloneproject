export default class ChapmionTierMode{
    rank: string;
    change: number;
    name: string;
    position: string;
    winRate: string;
    pickRate: string;
    banRate: string;
    tierIcon: string;
    id: number;

    constructor(data: ChapmionTierMode){
        this.id = data.id;
        this.rank = data.rank;
        this.change = data.change;
        this.name = data.name;
        this.position = data.position;
        this.winRate = data.winRate;
        this.pickRate = data.pickRate;
        this.banRate = data.banRate;
        this.tierIcon = data.tierIcon;
    }
}