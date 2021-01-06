import ModelAuth from "./model-auth.js";
import ViewAuth from "./view-auth.js";

export default class ControllerAuth{
    constructor({ notify, events }){
        this.view = new ViewAuth(this.onAuth, this.onLogOut);
        this.model = new ModelAuth();
        
        this.notify = notify;
        this.events = events;

        this.onCheck();
    }

    onCheck = _ => {
        if(this.model.isTokens()){
            this.notify(this.events.AUTHORIZED);
        }
    }

    onAuth = _ => {
        const tokens = this.view.getInputs();
        this.model.setTokens(tokens);
        this.onCheck();
    }

    onLogOut = _ => {
        this.model.deleteTokens();
    }
}