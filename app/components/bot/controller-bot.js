import ModelBot from "./model-bot.js";

export default class ControllerBot{
    constructor({ subscribe, events }){
        this.model = new ModelBot();

        subscribe(events.SEND_MESSAGE, this.onSend);
    }

    onSend = msg => {
        this.model.send(msg);
    }
}