// import Cookie from './cookie.js';

const toggler = window.location.hostname === 'fight-corona.rajchandra.me' ? 1 : 0;
const env=toggler?'production':'development';

const urls={
    health_api:`https://health-api.com/api/v1/covid-19`,
    free_api:`https://thevirustracker.com/free-api`,
    ninja_api:`https://corona.lmao.ninja`,
    root_api:`https://api.rootnet.in/covid19-in`,
    app_url:`${env==="production"?'https://www.rajchandra.me':'http://localhost:8060'}`
}

const getAuthConfig = ()=>{
    //return auth headers
    return {
        x:1
    }
}

export default { env, urls, getAuthConfig };
