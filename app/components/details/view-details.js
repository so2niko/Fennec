export default class ViewDetails{
    htmlModals = document.querySelector('.modals');

    constructor(){
        this.htmlModals.insertAdjacentHTML('beforeend', `
        <div class="modal fade" id="modalDetails" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Record Detail</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>`);

        this.htmlDetailsContent = document.querySelector('#modalDetails .modal-body');
    }

    render = data => {
        this.htmlDetailsContent.innerHTML = Object.entries(data).map(([name, val]) => `<p>${ name } : ${ val }</p>`).join('');
    }
}