import ModelBot from "./model-bot.js";

export default class ControllerBot{
    constructor({ subscribe }){
        this.model = new ModelBot();

        subscribe('SEND_MESSAGE', this.onSend);
    }

    onSend = msg => {
        this.model.send(msg);
    }
}