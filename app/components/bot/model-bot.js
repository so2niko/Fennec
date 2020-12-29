export default class ModelBot{
    constructor(){
        this.token = localStorage.getItem('bot');
        this.chatId = localStorage.getItem('chat_id');
    }

    get url(){
        return `https://api.telegram.org/bot${ this.token }/sendMessage?chat_id=${ this.chatId }&parse_mode=MarkdownV2&text=`;
    }

    send = msg => {
        fetch(`${ this.url }${ msg }`);
    }
}