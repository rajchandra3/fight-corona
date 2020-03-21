import LineChart from './charts/line.js';
import Request from '../requests/main.js';
import variables from '../ui/translation/variables.js';
import Translate from '../ui/translation/translate.js';

const getStatus = ()=>{
    let cc='IN';
    let promise = Request.getCountryStatus(cc);
    promise.then((data)=>{
        data=data[0];
        document.querySelector('.country-status-total').innerHTML=data.total_cases;
        document.querySelector('.country-status-total-recovered').innerHTML=data.total_recovered;
        document.querySelector('.country-status-total-unresolved').innerHTML=data.total_unresolved;
        document.querySelector('.country-status-total-deaths').innerHTML=data.total_deaths;
        document.querySelector('.country-status-total-new-cases').innerHTML=data.total_new_cases_today;
        document.querySelector('.country-status-total-new-deaths').innerHTML=data.total_new_deaths_today;
        document.querySelector('.country-status-total-active').innerHTML=data.total_active_cases;
        document.querySelector('.country-status-total-serious').innerHTML=data.total_serious_cases;
    })
}

const getTimeline = ()=>{
    let language = Translate.get_language();
    let cc='in';
    let promise = Request.getCountryTimeline(cc);
    promise.then((data)=>{
        data = data[0];
        const entries = Object.entries(data);
        //get total cases
        let formatted_data=[];
        let x_axis=[];
        for (const [date, local_data] of entries) {
            if(date!=='stat'){
                formatted_data.push(local_data.total_cases);
                x_axis.push(date);
            }
        }
        let chart_attributes = {
            element:'country-timeline',
            title:variables.CHART.TITLE[language],
            source:variables.CHART.SOURCE[language],
            yAxis:{
                title:{text:""}
            },
            xAxis:{
                categories:x_axis
            },
            formatted_data,
            series:{
                name:variables.CHART.SERIES_NAME[language],
                symbol:'circle',
                data:formatted_data
            },
            plotOptions:{
                radius: 4,
                lineColor: '#666',
                lineWidth: 1
            },
            description:variables.CHART.DESCRIPTION[language],
        }
        document.querySelector('.country-timeline-description').innerHTML=chart_attributes.description;
        LineChart.plotChart(chart_attributes,x_axis,formatted_data);
    })
}

const getIndianStats = ()=>{
    let promise = Request.getIndianRegionalData();
    promise.then((res)=>{
        let data=res.data;
        let new_data=data[data.length-1];
        let old_data=data[data.length-2];
        new_data=new_data.regional;
        old_data=old_data.regional;
        $(".indian-stats-tbody tr").remove();
        document.querySelector('.translate-indian-stats-caption').innerHTML=`last updated ${moment(new Date(res.lastOriginUpdate), "YYYYMMDD").fromNow()}`;
        for(let d1 of new_data){
            for(let d2 of old_data){
                if(d1.loc === d2.loc){
                    let difference_indian = d1.confirmedCasesIndian-d2.confirmedCasesIndian;
                    let difference_foreigners = d1.confirmedCasesForeign-d2.confirmedCasesForeign;
                    let difference_deaths = d1.deaths-d2.deaths;
                    $('table').find('.indian-stats-tbody').append(`
                        <tr>
                            <th scope="row">${d1.loc}</th>
                            <td>${d1.confirmedCasesIndian}<span class="text-tiny font-weight-bold ${difference_indian<=0?"text-success":"text-danger"}">(${difference_indian>0?"+"+difference_indian:difference_indian})</span></td>
                            <td>${d1.confirmedCasesForeign}<span class="text-tiny font-weight-bold ${difference_foreigners<=0?"text-success":"text-danger"}">(${difference_foreigners>0?"+"+difference_foreigners:difference_foreigners})</span></td>
                            <td>${d1.deaths}<span class="text-tiny font-weight-bold ${difference_deaths<=0?"text-success":"text-danger"}">(${difference_deaths>0?"+"+difference_deaths:difference_deaths})</span></td>
                        </tr>`);
                }
            }
        }
    })
}

export default {getStatus, getTimeline, getIndianStats}