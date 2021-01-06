export default class ViewAuth{
    htmlModal = document.querySelector('.loader-container');
    htmlBtnLogOut = document.querySelector('.btn_log-out');

    constructor(onAuth, onLogOut){
        this.htmlModal.innerHTML = `
<div class="form-auth">
    <div class="field">
        <p class="control has-icons-left has-icons-right">
            <input class="input auth-input" type="text" placeholder="Google Sheet Token" autofocus data-name="google">
            <span class="icon is-small is-left">
                <i class="fas fa-notes-medical"></i>
            </span>
        </p>
    </div>
    <div class="field">
        <p class="control has-icons-left has-icons-right">
            <input class="input auth-input" type="text" placeholder="Telegram Bot Token" data-name="bot">
            <span class="icon is-small is-left">
                <i class="fab fa-telegram"></i>
            </span>
        </p>
    </div>
    <div class="field">
        <p class="control has-icons-left has-icons-right">
            <input class="input auth-input" type="text" placeholder="Telegram chat id" data-name="chat">
            <span class="icon is-small is-left">
                <i class="fab fa-telegram-plane"></i>   
            </span>
        </p>
    </div>
    <div class="field">
        <p class="control">
            <button class="button is-success auth-btn">Auth</button>
        </p>
    </div>
</div>
        `;

        this.htmlAuthBtn = document.querySelector('.auth-btn');
        this.htmlInputs = [...document.querySelectorAll('.auth-input')];

        this.htmlAuthBtn.addEventListener('click', onAuth);
        this.htmlBtnLogOut.addEventListener('click', onLogOut);
    }

    getInputs = _ => {
        return this.htmlInputs.map(inp => {
                return {
                    val : inp.value,
                    name : inp.dataset.name
                };
        });
    }
}