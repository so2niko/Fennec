import ControllerBot from './components/bot/controller-bot.js';
import ContollerLoader from './components/loader/contoller-loader.js';
import ControllerRecord from './components/record/controller-record.js';
import ControllerSortSearch from './components/sort-search/controller-sort-search.js';
import ControllerStat from './components/stat/controller-stat.js';
import Publisher from './helpers/publisher.js';

const publisher = new Publisher();
const loader = new ContollerLoader(publisher.methods);
const bot = new ControllerBot(publisher.methods);
const record = new ControllerRecord(publisher.methods);
const stat = new ControllerStat(publisher.methods);
const sortSearch = new ControllerSortSearch(publisher.methods);