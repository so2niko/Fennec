import ModelStat from "./model-stat.js";
import ViewStat from "./view-stat.js";

export default class ControllerStat{
    constructor({ subscribe, notify, events }){
        this.model = new ModelStat();
        this.view = new ViewStat(this.onSend);

        subscribe(events.LOADED_DATA, this.onLoad);
        this.notify = notify;
        this.events = events;
    }

    onLoad = d => {
        const stat = this.model.getStat(d);
        this.view.render(stat);
    }

    onSend = _ => {
        this.notify(this.events.SEND_MESSAGE, JSON.stringify(this.model.getBotStat()));
    }
}