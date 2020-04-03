import LineConfig from './charts/line.js';
import Request from '../requests/main.js';

const getStatus = ()=>{
    let promise = Request.getGlobalStatus();
    promise.then((data)=>{
        if(data){
            data=data[0];
            document.querySelector('.gbl-status-total').innerHTML=data.total_cases;
            document.querySelector('.gbl-status-total-recovered').innerHTML=data.total_recovered;
            document.querySelector('.gbl-status-total-unresolved').innerHTML=data.total_unresolved;
            document.querySelector('.gbl-status-total-deaths').innerHTML=data.total_deaths;
            document.querySelector('.gbl-status-total-new-cases').innerHTML=data.total_new_cases_today;
            document.querySelector('.gbl-status-total-new-deaths').innerHTML=data.total_new_deaths_today;
            document.querySelector('.gbl-status-total-active').innerHTML=data.total_active_cases;
            document.querySelector('.gbl-status-total-serious').innerHTML=data.total_serious_cases;
        }else{
            document.getElementById('gs').style.display='none';
            document.querySelector('.translate-gs').style.display='none';
            document.querySelector('.gbl-status-container').style.display='none';
        }
    })
}

const getTopN = ()=>{
    let promise = Request.getGlobalTopN();
    promise.then((data)=>{
        $(".global-infeceted-countries-tbody tr").remove(); 
        for(let i=0;i<data.length;i++){
            $('table').find('.global-infeceted-countries-tbody').append(`
                <tr>
                    <th scope="row">${data[i].country}</th>
                    <td>${data[i].cases}</td>
                    <td>${data[i].todayCases}</td>
                    <td>${data[i].deaths}</td>
                </tr>`);
            if(i===10) break;
        }
    })
}

export default {getStatus,getTopN}