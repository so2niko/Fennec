import ModelSortSearch from "./model-sort-search.js";
import ViewSortSearch from "./view-sort-search.js";

export default class ControllerSortSearch{
    constructor({ subscribe, events, notify }){
        this.view = new ViewSortSearch(this.onSort, this.onSearch);
        this.model = new ModelSortSearch();

        subscribe(events.LOADED_DATA, this.onLoad);

        this.notify = notify;
        this.events = events;
    }

    onLoad = data => {
        this.model.records = data;
    }

    onSort = ev => {
        const records = this.model.sort(ev.target.value);

        this.notify(this.events.AFTER_SORT, records);
    }

    onSearch = ev => {
        const records = this.model.search(ev.target.value);
        this.notify(this.events.AFTER_SEARCH, records);
    }
}