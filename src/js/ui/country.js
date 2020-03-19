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

export default {getStatus, getTimeline}