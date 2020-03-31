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
    $('.card-carousel .card').remove();
    let promise = Request.getPatient();
    promise.then((data)=>{
        data=data.rawPatientData;
        let patientCount=data.length;
        let no_of_paients_to_show=20;
        const container = document.querySelector(".card-carousel");
        
        for (let i=patientCount-1;i>patientCount-no_of_paients_to_show;i--) {
            let patient=data[i];
            $('.container').find('.card-carousel').append(`
                <div class="card" id="${patientCount-i}">
                <div class="notes">
                    ${patient.notes || ''}
                </div>
                <img src="${(patient.ageEstimate!="")?(patient.ageEstimate>60)?(patient.gender=="male"?'src/images/old-man.png':'src/images/old-woman.png'):((patient.ageEstimate<10)?'src/images/kid.png':(patient.gender=="male"?'src/images/man.png':'src/images/woman.png')):'src/images/patient.svg'}" alt="" id="patient-img">
                <div class="place">
                    ${patient.district || ''} ${patient.city && patient.district?', ':''} ${patient.city? patient.city:''}
                </div>
                <div class="age">
                    Age: ${patient.ageEstimate}
                </div>
                <div class="patientId">
                    ID: ${patient.patientId}
                </div>
                <div>
                    Reported on: ${patient.reportedOn}
                </div>
                <div>
                    ${patient.status}
                </div>    
            </div>
            `);
            if(i+no_of_paients_to_show === patientCount+1){
                var newScript = document.createElement("script");
                newScript.type = "text/javascript";
                newScript.setAttribute("async", "true");
                newScript.setAttribute("src", './src/js/ui/components/patient_card.js');
                
                if(newScript.readyState) {
                    newScript.onreadystatechange = function() {
                        if(/loaded|complete/.test(newScript.readyState)) console.log('loaded script');
                    }
                } else {
                    newScript.addEventListener("load",()=>console.log('added event listener to script'));
                }
                
                document.documentElement.firstChild.appendChild(newScript);
            }
            
        }
    })
}

// (patient.gender==male?'src/images/old-man.png':'src/images/old-woman.png')
{/* <a href="${patient.sources && patient.sources[0]}" target="_blank" class="patient-source">Source</a> */}



export default { getStatus, getTimeline, getIndianStats,getPatientStatus }