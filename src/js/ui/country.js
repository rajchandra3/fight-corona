import LineChart from './charts/line.js';
import Request from '../requests/main.js';
import variables from '../ui/translation/variables.js';
import Translate from '../ui/translation/translate.js';

const getPatientStatus = ()=>{
    $('.card-carousel .card').remove();
    let promise = Request.getPatient();
    promise.then((data)=>{
        let patientCount=data.length;
        let no_of_paients_to_show=30;
        const container = document.querySelector(".card-carousel");
        let counter = 0;
        for (let i=patientCount-1;counter<no_of_paients_to_show;i--) {
            let patient=data[i];
            if(patient.currentstatus || patient.notes || patient.gender || patient.agebracket || patient.detectedcity || patient.detecteddistrict){
                counter++;
                $('.container').find('.card-carousel').append(`
                    <div class="card" id="${counter}">
                    <div class="card-top row">
                        <img src="${(patient.agebracket!="")?(patient.agebracket>60)?(patient.gender=="F"?'src/images/old-man.png':'src/images/old-woman.png'):((patient.agebracket<10)?'src/images/kid.png':(patient.gender=="M"?'src/images/man.png':'src/images/woman.png')):(patient.gender=="M"?'src/images/man.png':'src/images/woman.png')}" alt="" id="patient-img">
                        <div class="card-top-text">
                            <div class="patientId col" >
                                Patient ID: ${patient.patientnumber}
                            </div>
                            <div class="age gender col">
                                ${(patient.agebracket!="")?patient.agebracket+",":""} ${patient.gender==''?'':(patient.gender=='M'?'male':'female') || ""}
                            </div>
                        </div>
                    </div>
                    <div class="card-bottom row">
                        <div class="card-row" >
                            <div class="card-img-div"><img src="src/images/reportedOn.svg" class="card-img"></div>
                            <div class="card-text-div">Reported on ${patient.dateannounced.slice(0,5) ||''}</div>
                        </div>
                        <div class="card-row">
                            <div class="card-img-div"><img src="src/images/status.svg" class="card-img"></div>
                            <div class="card-text-div">${patient.currentstatus || 'Status unknown'}</div>
                        </div>
                        <div class="card-row">
                            <div class="card-img-div"><img src="src/images/notes.svg" class="card-img"></div>
                            <div class="notes card-text-div">${patient.notes || 'No additional information provided'}</div>
                        </div>
                        <div class="card-row">
                            <div class="card-img-div"><img src="src/images/place.svg" class="card-img "></div>
                            <div class="card-text-div">${patient.detectedcity+(patient.detectedcity && patient.detecteddistrict?', '+patient.detecteddistrict :'') || 'Place unknown'}</div>
                        </div>
                        <div class="card-row">
                            <div class="card-text-div">
                                
                                <ul class="">
                                    <ol>
                                        <a href="${patient.source1}" target="_blank">${patient.source1!=""?"source":''}</a>
                                    </ol>
                                    <ol>
                                        <a href="${patient.source2}" target="_blank">${patient.source2!=""?"source":''}</a>
                                    </ol>
                                    <ol>
                                        <a href="${patient.source3}" target="_blank">${patient.source3!=""?"source":''}</a>
                                    </ol>
                                </ul>
                            </div>
                        </div>
                        </div>
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
            
        }
    })
}

const setTimeline = (indian_data)=>{
    let language = Translate.get_language();
    //get range
    let range=Number(document.querySelector('#choose-range').value || 3);
    indian_data.timeline=indian_data.timeline.slice(indian_data.timeline.length-range,indian_data.timeline.length);
    //make timeline 
    let total_cases_count=[];
    let total_deaths=[];
    let total_recovered=[];
    let x_axis=[];
    for( let day_data of indian_data.timeline){
        total_deaths.push(Number(day_data.totaldeceased));
        total_cases_count.push(Number(day_data.totalconfirmed));
        total_recovered.push(Number(day_data.totalrecovered));
        x_axis.push(day_data.date);
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
        },{
            name: variables.COUNTRY_STATUS_TOTAL_RECOVERED[language],
            marker: {
                symbol: 'circle'
            },
            data: total_recovered
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
}

const setIndianData = ()=>{
    //using rootnet api
    let promise = Request.getIndianStats();
    promise.then((data)=>{
        let indian_data = {
            today:{},
            country:{},
            timeline:[],
            states:[]
        }
        //get statewise data and country data 
        for(let state_data of data.statewise){
            state_data.state==="Total"?
                indian_data.country=state_data:
                indian_data.states.push(state_data);
        }

        //get today's data 
        indian_data.today={
            confirmed:indian_data.country.deltaconfirmed,
            deaths:indian_data.country.deltadeaths,
            recovered:indian_data.country.deltarecovered
        };
        //show indian stats
        document.querySelector('.country-status-total').innerHTML=indian_data.country.confirmed;
        document.querySelector('.country-status-total-recovered').innerHTML=indian_data.country.recovered;
        document.querySelector('.country-status-total-deaths').innerHTML=indian_data.country.deaths;
        document.querySelector('.country-status-total-new-cases').innerHTML=indian_data.country.deltaconfirmed;
        document.querySelector('.country-status-total-new-deaths').innerHTML=indian_data.country.deltadeaths;
        document.querySelector('.country-status-total-active').innerHTML=indian_data.country.active;

        //populate states data 
        $(".indian-stats-tbody tr").remove();
        document.querySelector('.translate-indian-stats-caption').style.display='none';
        for(let state_data of indian_data.states){
            $('table').find('.indian-stats-tbody').append(`
                <tr>
                    <th scope="row">${state_data.state}</th>
                    <td>${state_data.confirmed}<span class="text-tiny font-weight-bold ${state_data.deltaconfirmed<=0?"text-success":"text-danger"}">(${state_data.deltaconfirmed>0?"+"+state_data.deltaconfirmed:state_data.deltaconfirmed})</span></td>
                    <td>${state_data.deaths}<span class="text-tiny font-weight-bold ${state_data.deltadeaths<=0?"text-success":"text-danger"}">(${state_data.deltadeaths>0?"+"+state_data.deltadeaths:state_data.deltadeaths})</span></td>
                    <td>${state_data.active}<span class="text-tiny font-weight-bold ${state_data.deltarecovered>0?"text-success":"text-danger"}">(${state_data.deltarecovered>0?"+"+state_data.deltarecovered:state_data.deltarecovered})</span></td>
                </tr>`);
        }

        //set timeline
        indian_data.timeline=data.cases_time_series;
        document.querySelector('#max-range').innerHTML=`${indian_data.timeline.length-1} Days`;
        document.querySelector('#max-range').value=indian_data.timeline.length-1;
        setTimeline(indian_data);
    })
    //remove toast
    $('.toast').toast('hide');
    //add event listener to select range
    document.querySelector('#choose-range').addEventListener('input',setIndianData);
}


export default { getPatientStatus, setIndianData }