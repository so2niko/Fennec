import ModelBot from "./model-bot.js";

export default class ControllerBot{
    constructor({ subscribe, events }){
        this.model = new ModelBot();

        subscribe(events.SEND_MESSAGE, this.onSend);
        subscribe(events.AUTHORIZED, this.onAuth);
    }

    onSend = msg => {
        this.model.send(msg);
    }

    onAuth = _ => {
        this.model.initTokens();
    }
}