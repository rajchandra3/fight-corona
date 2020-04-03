import Gb from './ui/global.js';
import Country from './ui/country.js';
import Store from './common/local_storage.js';
import Translate from './ui/translation/translate.js';
import Config from './requests/config.js';
import v from './ui/translation/variables.js';
import Share from '../js/requests/share.js';
import News from './ui/news.js';

Translate.set_langauge_options(); //sets values in choose language 
!Store.getItem('default_language')?Store.setItem('default_language',document.getElementById('choose-language').value):null;
Translate.translate_ui();

const refresh_stats=()=>{
    $('.toast').toast('show');
    Country.setIndianData();
    Country.getPatientStatus();
    Gb.getStatus();
    Gb.getTopN();
    News.getNewsData();
}
window.onload=()=>{
    Share.update_shared_stats();
    refresh_stats();
}
document.querySelector('.refresh_stats').addEventListener('click',refresh_stats);
//share button event listener
if (navigator.share) {
    const shareButton=document.querySelector('#share-button');
    shareButton.addEventListener('click', event => {
        const metas=document.querySelectorAll('meta');
        let description_text=v.SAHRE_DESCRIPTION[Translate.get_language()].replace("<total_deaths_in_india>",document.querySelector('.country-status-total-deaths').textContent);
        description_text=description_text.replace("<total_cases_in_india>",document.querySelector('.country-status-total').textContent);
        description_text=description_text.replace("<total_cases_in_world>",document.querySelector('.gbl-status-total').textContent);
        // for(let meta of metas){
        //     if(meta.getAttribute('name')=='description')
        //         description_text=meta.getAttribute('content');
        // }
        const share_data={
            title: document.title,
            text: description_text,
            url: `${Config.urls.app_url}/redirect/app-coronavirus-tracker?url=${document.URL}&lang=${Translate.get_language()}&medium=in-app`
        };
        
        navigator.share(share_data)
        .then(() => {
            console.log('Thanks for sharing!');
        })
        .catch(console.error);
    });
} else {
    document.querySelector('.share-btn-container').style.display='none';
}

//service worker for PWA
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