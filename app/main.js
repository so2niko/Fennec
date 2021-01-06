import Publisher from './helpers/publisher.js';
import ContollerLoader from './components/loader/contoller-loader.js';
import ControllerBot from './components/bot/controller-bot.js';
import ControllerRecord from './components/record/controller-record.js';
import ControllerStat from './components/stat/controller-stat.js';
import ControllerSortSearch from './components/sort-search/controller-sort-search.js';
import ControllerDetails from './components/details/controller-details.js';
import ControllerAuth from './components/auth/controller-auth.js';

const publisher     = new Publisher();
const loader        = new ContollerLoader(publisher.methods);
const bot           = new ControllerBot(publisher.methods);
const record        = new ControllerRecord(publisher.methods);
const stat          = new ControllerStat(publisher.methods);
const sortSearch    = new ControllerSortSearch(publisher.methods);
const details       = new ControllerDetails(publisher.methods);
const auth          = new ControllerAuth(publisher.methods);