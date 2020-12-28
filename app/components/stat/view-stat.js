export default class ViewStat{
    htmlStat = document.querySelector('.stat-body');

    render = stat => {
        const { shiftDays, shiftMileage, mileagePD  } = stat;

        this.htmlStat.innerHTML =  `
        <nav class="level">
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Mileage</p>
              <p class="title">${ shiftMileage }</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Days</p>
              <p class="title">${ shiftDays }</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Mileage p/d</p>
              <p class="title">${ mileagePD.toFixed(2) }</p>
            </div>
          </div>
        </nav>
        `;
    }
}