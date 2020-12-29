import ViewLoader from "./view-loader.js";

export default class ContollerLoader{
    constructor({ subscribe, unsubscribe }){
        this.view = new ViewLoader();

        subscribe('LOADED_DATA', this.onLoad);
        this.unsubscribe = unsubscribe;
    }

    onLoad = _ => {
        this.unsubscribe('LOADED_DATA', this.onLoad);
        this.view.hideLoader();
    }
} 