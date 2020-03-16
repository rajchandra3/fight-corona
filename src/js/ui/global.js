import LineConfig from './chats/line.js';
import Request from '../requests/main.js';

const getStatus = ()=>{
    let promise = Request.getGlobalStatus();
    promise.then((data)=>{
        data=data[0];
        document.querySelector('.gbl-status-total').innerHTML=data.total_cases;
        document.querySelector('.gbl-status-total-recovered').innerHTML=data.total_recovered;
        document.querySelector('.gbl-status-total-unresolved').innerHTML=data.total_unresolved;
        document.querySelector('.gbl-status-total-deaths').innerHTML=data.total_deaths;
        document.querySelector('.gbl-status-total-new-cases').innerHTML=data.total_new_cases_today;
        document.querySelector('.gbl-status-total-new-deaths').innerHTML=data.total_new_deaths_today;
        document.querySelector('.gbl-status-total-active').innerHTML=data.total_active_cases;
        document.querySelector('.gbl-status-total-serious').innerHTML=data.total_serious_cases;
    })
}

export default {getStatus}