export default class ModelRecord{
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

    initTokens = _ => {
        const token = localStorage.getItem('google');
        this.link = `https://spreadsheets.google.com/feeds/cells/${ token }/1/public/full?alt=json`;
    }

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
}