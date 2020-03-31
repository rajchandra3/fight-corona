// import Cookie from './cookie.js';
import Config from './config.js';

//Global Statistics API
const getGlobalStatus = async()=>{
    let response = await fetch(`${Config.urls.free_api}?global=stats`);
    if (response.ok) { // if HTTP-status is 200-299
        // get the response body (the method explained below)
        let json = await response.json();
        return json.results;
    } else {
        alert("HTTP-Error: " + response.status);
    }
}

const getGlobalTopN = async()=>{
    let response = await fetch(`${Config.urls.ninja_api}/countries`);
    if (response.ok) { // if HTTP-status is 200-299
        // get the response body (the method explained below)
        let json = await response.json();
        return json;
    } else {
        alert("HTTP-Error: " + response.status);
    }
}

//Country Statistics API
const getCountryStatus = async()=>{
    let response = await fetch(`${Config.urls.free_api}?countryTotal=IN`);
    if (response.ok) { // if HTTP-status is 200-299
        // get the response body (the method explained below)
        let json = await response.json();
        return json;
    } else {
        alert("HTTP-Error: " + response.status);
    }
}

//Full Timeline API
const getGlobalTimeline = async()=>{
    let response = await fetch(`${Config.urls.free_api}?countryTotal=IN`);
    if (response.ok) { // if HTTP-status is 200-299
        // get the response body (the method explained below)
        let json = await response.json();
        console.log(json.countrydata);
    } else {
        alert("HTTP-Error: " + response.status);
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
        alert("HTTP-Error: " + response.status);
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
        alert("HTTP-Error: " + response.status);
    }
}
//News Data

const getNews=async()=>{
    let response=await fetch(`${Config.urls.app_backend_api}/news-api/get?count=5`);
    if(response.ok)
    {
       // console.log(response);
        let json=await response.json();
        // console.log(json.payload);
        return json.payload;
    }
    else
    {
        alert("HTTP-Error: " + response.status);
    }
}

export default { getGlobalStatus, getGlobalTimeline, getGlobalTopN, getCountryStatus, getCountryTimeline, getIndianRegionalData,getNews };