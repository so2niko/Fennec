import ModelStat from "./model-stat.js";
import ViewStat from "./view-stat.js";

export default class ControllerStat{
    constructor({ subscribe }){
        this.model = new ModelStat();
        this.view = new ViewStat();

        subscribe('LOADED_DATA', this.onLoad);
    }

    onLoad = d => {
        const stat = this.model.getStat(d);
        this.view.render(stat);
    }
}