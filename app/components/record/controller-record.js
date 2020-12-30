import ModelRecord from "./model-record.js";
import ViewRecord from "./view-record.js";

export default class ControllerRecord{
    constructor({ notify, events, subscribe }){
        this.model = new ModelRecord();
        this.view = new ViewRecord();

        this.notify = notify;
        this.events = events;

        subscribe(events.AFTER_SEARCH, this.onSortSearch);
        subscribe(events.AFTER_SORT, this.onSortSearch);
        subscribe(events.AUTHORIZED, this.init);
    }

    init = () => {
        this.model.initTokens();
        
        this.model.loadRecords()
            .then(d => {
                this.view.render(d);
                this.notify(this.events.LOADED_DATA, d);
            });
    }

    onSortSearch = data => {
        this.view.render(data);
    }
}
