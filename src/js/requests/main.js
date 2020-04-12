// import Cookie from './cookie.js';
import Config from './config.js';

//Global Statistics API
const getGlobalStatus = async()=>{
    try{
        let response = await fetch(`${Config.urls.free_api}?global=stats`);
        if (response.ok) { // if HTTP-status is 200-299
            // get the response body (the method explained below)
            let json = await response.json();
            return json.results;
        } else {
            console.log("HTTP-Error: " + response.status);
        }
    }
    catch{
        return null;
    }
}

const getGlobalTopN = async()=>{
    let response = await fetch(`${Config.urls.ninja_api}/countries`);
    if (response.ok) { // if HTTP-status is 200-299
        // get the response body (the method explained below)
        let json = await response.json();
        return json.sort((a, b)=>{return b.cases-a.cases});
    } else {
        console.log("HTTP-Error: " + response.status);
    }
}

//Country Statistics API
const getCountryStatus = async()=>{
    let response = await fetch(`${Config.urls.covid19India_api}/`);
    if (response.ok) { // if HTTP-status is 200-299
        // get the response body (the method explained below)
        let json = await response.json();
        return json;
    } else {
        console.log("HTTP-Error: " + response.status);
    }
}

//Full Timeline API
const getGlobalTimeline = async()=>{
    let response = await fetch(`${Config.urls.free_api}?countryTotal=IN`);
    if (response.ok) { // if HTTP-status is 200-299
        // get the response body (the method explained below)
        let json = await response.json();
    } else {
        console.log("HTTP-Error: " + response.status);
    }
}

//Country Timeline API
const getCountryTimeline = async()=>{
    let response = await fetch(`${Config.urls.rootnet_api}/stats/daily`);
    if (response.ok) { // if HTTP-status is 200-299
        // get the response body (the method explained below)
        let json = await response.json();
        return json.data;
    } else {
        console.log("HTTP-Error: " + response.status);
    }
}

//Country Timeline API
const getIndianRegionalData = async()=>{
    let response = await fetch(`${Config.urls.rootnet_api}/stats/daily`);
    if (response.ok) { // if HTTP-status is 200-299
        // get the response body (the method explained below)
        $('.toast').toast('hide');
        let json = await response.json();
        return json;
    } else {
        console.log("HTTP-Error: " + response.status);
    }
}
//News Data

//Patient API
const getPatient = async()=>{
    let response = await fetch(`${Config.urls.covid19India_api}/raw_data.json`);
    if (response.ok) { 
        // if HTTP-status is 200-299
        // get the response body (the method explained below)
        let json = await response.json();
        return json.raw_data;
    } else {
        console.log("HTTP-Error: " + response.status);
    }
}

//news data
const getNews=async()=>{
    let response=await fetch(`${Config.urls.app_backend_api}/news-api/get?count=10`);
    if(response.ok)
    {
       // console.log(response);
        let json=await response.json();
        return json.payload;
    }
    else
    {
        console.log("HTTP-Error: " + response.status);
    }
}


//get indian data 
const getIndianStats = async ()=>{
    let response=await fetch(`${Config.urls.covid19India_api}/data.json`);
    if(response.ok)
    {
       // console.log(response);
        let json=await response.json();
        return json;
    }
    else
    {
        console.log("HTTP-Error: " + response.status);
    }
}

export default { 
    getGlobalStatus, 
    getGlobalTimeline, 
    getGlobalTopN, 
    getCountryStatus, 
    getCountryTimeline, 
    getIndianRegionalData, 
    getNews, 
    getPatient, 
    getIndianStats
};
