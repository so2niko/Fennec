export default class ViewLoader{
    htmlLoader = document.querySelector('.loader-container');
    hideLoader = _ => {
        this.htmlLoader.innerHTML = '';
        this.htmlLoader.classList.remove('loader-container');
    }
}