export default class ViewStat{
    htmlHeader = document.querySelector('header');
    constructor(onSend){
        this.htmlHeader.insertAdjacentHTML('afterbegin', `
        <div class="field">
        <article class="message">
            <div class="message-header">
                <p>Stats </p>
                <button class="button is-info is-light btn_stat-send">send</button>
            </div>  
            <div class="message-body stat-body"></div>
        </article>
        </div>
        `);

        this.htmlStat = document.querySelector('.stat-body');
        this.htmlBtnSend = document.querySelector('.btn_stat-send');

        this.htmlBtnSend.addEventListener('click', onSend);
    }

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