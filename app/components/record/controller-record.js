import ModelRecord from "./model-record.js";
import ViewRecord from "./view-record.js";

export default class ControllerRecord{
    constructor(){
        this.model = new ModelRecord();
        this.view = new ViewRecord(this.onSort, this.onSearch);

        this.init();
    }

    init = () => {
        this.model.loadRecords()
            .then(d => {
                this.view.render(d);
            });
    }

    onSort = ev => {
        const records = this.model.sort(ev.target.value);

        this.view.render(records);
    }

    onSearch = ev => {
        const records = this.model.search(ev.target.value);
        this.view.render(records);
    }

}
