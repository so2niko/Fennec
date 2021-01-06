export default class ViewRecord{
    htmlCards = document.querySelector('.cards');

    constructor(onDetails){
        this.onDetails = onDetails;
    }

    render = arr => {
        this.htmlCards.innerHTML = arr.map(this.renderCard).join('');

        [...this.htmlCards.querySelectorAll('.card .btn-details')].forEach(btn => btn.addEventListener('click', this.onDetails));
    }

    renderCard = ({ date, price, mileage, fuel, count, id }) => {
        return `
<div class="card">
    <div class="card-content">
    <div class="content">
        <p>
            <span class="has-text-weight-bold">Type:</span> <span>${ fuel }</span> <span>${ count }</span>L
            <span class="has-text-weight-bold">Price:</span> <span>${ price }</span>
            <span class="has-text-weight-bold">Date:</span> <span>${ date.toLocaleDateString() }</span>
            <span class="has-text-weight-bold">Mileage:</span> <span>${ mileage }</span>
            <button class="button is-info is-light btn-details"
                data-bs-toggle="modal" data-bs-target="#modalDetails" data-details-id="${ id }">...</button>
        </p>
    </div>
    </div>
</div> `;
    }
}