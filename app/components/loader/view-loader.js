export default class ViewLoader{
    htmlLoader = document.querySelector('.loader-container');

    render = _ => {
        this.htmlLoader.innerHTML = `
        <div class="sk-cube-grid">
        <div class="sk-cube sk-cube1"></div>
        <div class="sk-cube sk-cube2"></div>
        <div class="sk-cube sk-cube3"></div>
        <div class="sk-cube sk-cube4"></div>
        <div class="sk-cube sk-cube5"></div>
        <div class="sk-cube sk-cube6"></div>
        <div class="sk-cube sk-cube7"></div>
        <div class="sk-cube sk-cube8"></div>
        <div class="sk-cube sk-cube9"></div>
      </div>`;
    }

    hideLoader = _ => {
        this.htmlLoader.innerHTML = '';
        this.htmlLoader.classList.remove('loader-container');
    }
}