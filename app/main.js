document.querySelector('#getData').addEventListener('click', () => {
    const link = 'https://spreadsheets.google.com/feeds/cells/1xAEHFHVZHHvabXYXMMquZld0urClxbGWxAgJnvB-8cg/1/public/full?alt=json';

    fetch(link)
        .then(r => r.json())
        .then(d => render(parseData(d.feed.entry)));
});

function parseData(arr){
    const names = [
        {
            name : 'date',
            type : 'date'
        },
        { 
            name : 'fuel',
            type : 'string'
        }, 
        {
            name : 'count',
            type : 'float'
        }, 
        {
            name : 'price',
            type : 'float'
        },
        {
            name : 'mileage',
            type : 'float'
        }
    ];
    const shift = names.length;

    return arr.reduce((acc, { content }, i) => {
        const index = Math.floor(i / shift);
        const { name, type } = names[i % shift];

        if(!acc[index]){
            acc[index] = {};
        }

        acc[index][name] = parseContent(content.$t, type);

        return acc;       
    }, []);
}

function parseContent(content, type = 'string'){
    let answ = content;
    switch(type){
        case 'float' :{
            answ = +(content.replace(',', '.'));
            break;
        }
        case 'date' : {
            answ = new Date(content);
            break;
        }
        default: {
            answ = content;
            break;
        }
    }

    return answ;
}

function render(arr){
    console.log(arr);
    document.querySelector('.cards').innerHTML = arr.map(renderCard).join('');
}

function renderCard({ date, price, mileage, fuel, count }){
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