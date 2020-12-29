import ControllerRecord from './components/record/controller-record.js';
import ControllerStat from './components/stat/controller-stat.js';
import Publisher from './helpers/publisher.js';

const publisher = new Publisher();
const record = new ControllerRecord(publisher.methods);
const stat = new ControllerStat(publisher.methods);
