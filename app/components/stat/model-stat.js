export default class ModelStat{
    getStat = d => {
        d.sort((a, b) => b.mileage - a.mileage);

        const [{ mileage : mileageS, date : dateS }] = d.slice(-1);
        const { mileage : mileageE, date : dateE } = d[0];

        const shiftMileage = mileageE - mileageS;
        const shiftDays = (dateE - dateS) / (1000 * 60 * 60 * 24);
        const mileagePD = shiftMileage / shiftDays;
        this.stat = { shiftDays, shiftMileage, mileagePD  };

        return this.stat;
    }

    getBotStat = _ => {
        const { shiftDays, shiftMileage, mileagePD } = this.stat;
        return encodeURI(`*mileage :* ${ shiftMileage } km
*days :* ${ shiftDays }
*mileage per day :* ${ mileagePD } km/day`.replace(/\./g, ','));
    }
}