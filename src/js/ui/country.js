import LineChart from './charts/line.js';
import Request from '../requests/main.js';
import variables from '../ui/translation/variables.js';
import Translate from '../ui/translation/translate.js';

const getStatus = ()=>{
    let promise = Request.getCountryStatus();
    promise.then((data)=>{
        data=data.countrydata[0];
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
    let promise = Request.getCountryTimeline();
    promise.then((data)=>{
        //using thevirustacker api
        // data = data[0];
        // const entries = Object.entries(data);
        // let total_cases_count=[];
        // let x_axis=[];
        // for (const [date, local_data] of entries) {
        //     if(date!=='stat'){
        //         total_cases_count.push(local_data.total_cases);
        //         x_axis.push(date);
        //     }
        // }
        //using rootnet api
        let total_cases_count=[];
        let total_deaths=[];
        let x_axis=[];
        for( let regional_data of data){
            total_deaths.push(regional_data.summary.deaths);
            total_cases_count.push(regional_data.summary.total);
            x_axis.push(regional_data.day);
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
            total_cases_count,
            series:[{
                name: variables.CHART.SERIES_NAME[language],
                marker: {
                    symbol: 'circle'
                },
                data: total_cases_count
            },{
                name: variables.TOTAL_DEATHS[language],
                marker: {
                    symbol: 'circle'
                },
                data: total_deaths
            }],
            plotOptions:{
                radius: 4,
                lineColor: '#666',
                lineWidth: 1
            },
            description:variables.CHART.DESCRIPTION[language],
        }
        document.querySelector('.country-timeline-description').innerHTML=chart_attributes.description;
        LineChart.plotChart(chart_attributes,x_axis,total_cases_count);
    })
}

const getIndianStats = ()=>{
    //using rootnet api
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

const getPatientStatus = ()=>{
    let promise = Request.getPatient();
    promise.then((data)=>{
        data=data.rawPatientData;
        var nPatients=20;
        let patientId=data.patietnId;
        let patientAge=data.ageEstimate;
        let city = data.city;
        let state= data.state;
        let patientNotes = data.notes;
        let patientSource=data.sources;

        for (var i = data.length-1; i > data.length-1-nPatients; i--) {
            $('.container').find('.card-carousel').append(`
            <div class="card">
            <div class="place">
                ${city},${state}
            </div>
            <img src="./src/images/patient.svg" alt="" class="patient-img">

            <div class="patientId">
                ${patientId}
            </div>
            <div class="age">
                ${patientAge}
            </div>
            <div class="notes">
                ${patientNotes}
            </div>
            <a href="${patientSource}" class="patient-source">Source</a>
        </div>`);
        }
    });
}


export default { getStatus, getTimeline, getIndianStats,getPatientStatus }