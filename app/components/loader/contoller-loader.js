import ViewLoader from "./view-loader.js";

export default class ContollerLoader{
    constructor({ subscribe, unsubscribe, events }){
        this.view = new ViewLoader();

        subscribe(events.LOADED_DATA, this.onLoad);
        this.unsubscribe = unsubscribe;

        this.events = events;

        subscribe(events.AUTHORIZED, this.onAuthorized);
        console.log('inloader');
    }

    onLoad = _ => {
        this.unsubscribe(this.events.LOADED_DATA, this.onLoad);
        this.view.hideLoader();
    }

    onAuthorized = _ => {
        this.view.render();
    }
} 