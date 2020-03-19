import Gb from './ui/global.js';
import Country from './ui/country.js';
// import GbStatus from './ui/global_status.js';
// import GbStatus from './ui/global_status.js';

import Store from './common/local_storage.js';
import Translate from './ui/translation/translate.js';
!Store.getItem('default_language')?Store.setItem('default_language',document.getElementById('choose-language').value):Translate.translate_ui();

window.onload=()=>{
    Country.getStatus();
    Gb.getStatus();
    Country.getTimeline();
    Gb.getTopN();
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