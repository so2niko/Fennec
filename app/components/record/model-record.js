export default class ModelRecord{
    link = 'https://spreadsheets.google.com/feeds/cells/1xAEHFHVZHHvabXYXMMquZld0urClxbGWxAgJnvB-8cg/1/public/full?alt=json';

    records = [];
    names = [
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

    loadRecords = () => {
        return fetch(this.link)
            .then(r => r.json())
            .then(d => {
                this.records = this.parseData(d.feed.entry);
                return this.records;
            });
    }

    parseData = arr => {
        const shift = this.names.length;
    
        return arr.reduce((acc, { content }, i) => {
            const index = Math.floor(i / shift);
            const { name, type } = this.names[i % shift];
    
            if(!acc[index]){
                acc[index] = {};
            }
    
            acc[index][name] = this.parseContent(content.$t, type);
    
            return acc;       
        }, []);
    }

    parseContent = (content, type = 'string') => {
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

    sort = type => {
        const sortMethods = {
            'date-new' : (a, b) => b.date - a.date,
            'date-late' : (a, b) => a.date - b.date,
            'price-exp' : (a, b) => b.price - a.price,
            'price-cheap' : (a, b) => a.price - b.price
        };

        this.records.sort(sortMethods[type]);

        return this.records;
    }

    search = text => {
        const textL = text.toLowerCase().trim();
        return this.records.filter(({ fuel }) => fuel.toLowerCase().includes(textL));
    }
}