import Gb from './ui/global.js';
import Country from './ui/country.js';
// import GbStatus from './ui/global_status.js';
// import GbStatus from './ui/global_status.js';

window.onload=()=>{
    Gb.getStatus();
    Country.getStatus();
    Country.getTimeline();
}


if ('serviceWorker' in navigator) {
    window.addEventListener('load', ()=> {
        navigator.serviceWorker.register('/service_worker.js').then((registration)=> {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, (err)=> {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}