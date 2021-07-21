export default class ChampionModel{
    id?: string;
    key?: string;
    name?: string;
    position: string[];

    constructor({id, key, name, position = []}: ChampionModel){
        this.id= id;
        this.key = key;
        this.name = name;
        this.position = position;
    }
}