export default class ViewSortSearch{
    htmlHeader = document.querySelector('header');

    constructor(cbSort, cbSearch){
        this.htmlHeader.insertAdjacentHTML('beforeend', `
        <div class="field">
        <input class="input inp-search" type="text" placeholder="Search">
        <div class="control">
          <div class="select is-warning">
            <select class="select-sort">
                <option value="date-late">Latest first</option>
                <option value="date-new">Newest first</option>
                <option value="price-exp">Expensive first</option>
                <option value="price-cheap">Cheap first</option>
            </select>
          </div>
        </div>
      </div>`);

        this.htmlSort = document.querySelector('.select-sort');
        this.htmlSearch = document.querySelector('.inp-search');

        this.htmlSort.addEventListener('input', cbSort);
        this.htmlSearch.addEventListener('input', cbSearch);
    }
}