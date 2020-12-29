import ModelStat from "./model-stat.js";
import ViewStat from "./view-stat.js";

export default class ControllerStat{
    constructor({ subscribe, notify }){
        this.model = new ModelStat();
        this.view = new ViewStat(this.onSend);

        subscribe('LOADED_DATA', this.onLoad);
        this.notify = notify;
    }

    onLoad = d => {
        const stat = this.model.getStat(d);
        this.view.render(stat);
    }

    onSend = _ => {
        this.notify('SEND_MESSAGE', JSON.stringify(this.model.getBotStat()));
    }
}