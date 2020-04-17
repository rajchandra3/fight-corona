// import Cookie from './cookie.js';

const toggler = window.location.hostname === 'fight-corona.rajchandra.me' || window.location.hostname === 'corona-go.info' ? 1 : 0;
const env=toggler?'production':'development';

const urls={
    covid19India_api:`https://api.covid19india.org/`,
    health_api:`https://health-api.com/api/v1/covid-19`,
    free_api:`https://thevirustracker.com/free-api`,
    ninja_api:`https://corona.lmao.ninja/v2`,
    rootnet_api:`https://api.rootnet.in/covid19-in`,
    app_backend_api:`${env==="production"?'https://api.corona-go.info':'http://localhost:8061'}`, //internal APIs
    app_url:`${env==="production"?'https://www.rajchandra.me':'http://localhost:8060'}`
}

export default { env, urls };
