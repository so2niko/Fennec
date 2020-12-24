export default class ViewRecord{
    htmlCards = document.querySelector('.cards');

    render = arr => {
        this.htmlCards.innerHTML = arr.map(this.renderCard).join('');
    }

    renderCard = ({ date, price, mileage, fuel, count }) => {
        return `
<div class="card">
    <div class="card-content">
    <div class="content">
        <p><span class="has-text-weight-bold">Type:</span> <span>${ fuel }</span> <span>${ count }</span>L</p>
        <p><span class="has-text-weight-bold">Price:</span> <span>${ price }</span></p>
        <p><span class="has-text-weight-bold">Date:</span> <span>${ date }</span></p>
        <p><span class="has-text-weight-bold">Mileage:</span> <span>${ mileage }</span></p>
    </div>
    </div>
</div> `;
    }
}