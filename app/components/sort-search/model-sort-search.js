export default class ModelSortSearch{
    records = [];

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