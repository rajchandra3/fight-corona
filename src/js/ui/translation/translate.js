import v from './variables.js';
import country_ui from '../country.js';
import Store from '../../common/local_storage.js';

//handle language change here
const get_language = ()=>{
    return Store.getItem('default_language');
}

const translate_ui = ()=>   {
    //get language value 
    let language = get_language();
    //set text in document
    document.title=v.TITLE[language];
    document.getElementsByTagName('meta')["twitter:title"].content=v.TITLE[language];
    document.querySelector('meta[property="og:title"][content]').content=v.TITLE[language];
    document.getElementsByTagName('meta')["description"].content=v.DESCRIPTION[language];
    document.querySelector('meta[property="og:description"][content]').content=v.DESCRIPTION[language];
    document.getElementsByTagName('meta')["twitter:description"].content=v.DESCRIPTION[language];
    document.querySelector('meta[property="og:title"][content]').content=v.TITLE[language];
    document.querySelector('.translate-title').textContent=v.TITLE[language];
    document.querySelector('.translate-sub-title').innerHTML=v.SUB_TITLE[language];
    document.querySelector('.translate-global-status-headline').innerHTML=v.GLOBAL_STATUS_HEADLINE[language];
    document.querySelector('.translate-gbl-status-total-new-cases').innerHTML=v.GLOBAL_STATUS_TOTAL_NEW_CASES[language];
    document.querySelector('.translate-gbl-status-total-new-deaths').innerHTML=v.GLOBAL_STATUS_TOTAL_NEW_DEATHS[language];
    document.querySelector('.translate-gbl-status-total-deaths').innerHTML=v.GLOBAL_STATUS_TOTAL_DEATHS[language];
    document.querySelector('.translate-gbl-status-total-serious').innerHTML=v.GLOBAL_STATUS_TOTAL_SERIOUS[language];
    document.querySelector('.translate-gbl-status-total-cases').innerHTML=v.GLOBAL_STATUS_TOTAL_CASES[language];
    document.querySelector('.translate-gbl-status-total-active').innerHTML=v.GLOBAL_STATUS_TOTAL_ACTIVE[language];
    document.querySelector('.translate-gbl-status-total-recovered').innerHTML=v.GLOBAL_STATUS_TOTAL_RECOVERED[language];
    document.querySelector('.translate-gbl-status-total-unresolved').innerHTML=v.GLOBAL_STATUS_TOTAL_UNRESOLVED[language];
    document.querySelector('.translate-country-status-headline').innerHTML=v.COUNTRY_STATUS_HEADLINE[language];
    document.querySelector('.translate-country-status-total-new-cases').innerHTML=v.COUNTRY_STATUS_NEW_CASES[language];
    document.querySelector('.translate-country-status-total-new-deaths').innerHTML=v.COUNTRY_STATUS_NEW_DEATHS[language];
    document.querySelector('.translate-country-status-total-deaths').innerHTML=v.COUNTRY_STATUS_TOTAL_DEATHS[language];
    document.querySelector('.translate-country-status-total-serious').innerHTML=v.COUNTRY_STATUS_TOTAL_SERIOUS[language];
    document.querySelector('.translate-country-status-total-cases').innerHTML=v.COUNTRY_STATUS_TOTAL_CASES[language];
    document.querySelector('.translate-country-status-total-active').innerHTML=v.COUNTRY_STATUS_TOTAL_ACTIVE[language];
    document.querySelector('.translate-country-status-total-recovered').innerHTML=v.COUNTRY_STATUS_TOTAL_RECOVERED[language];
    document.querySelector('.translate-country-status-total-unresolved').innerHTML=v.COUNTRY_STATUS_TOTAL_UNRESOLVED[language];
    document.querySelector('.translate-country-timeline-headline').innerHTML=v.COUNTRY_TIMELINE_HEADLINE[language];
    document.querySelector('.translate-gov-link-container-text').innerHTML=v.GOV_LINK_TEXT[language];
    document.querySelector('.translate-country').innerHTML=v.COUNTRY[language];
    document.querySelector('.translate-total-cases').innerHTML=v.TOTAL_CASES[language];
    document.querySelector('.translate-total-cases-today').innerHTML=v.TOTAL_CASES_TODAY[language];
    document.querySelector('.translate-total-deaths').innerHTML=v.TOTAL_DEATHS[language];
    document.querySelector('.translate-take-care-stay-safe').innerHTML=v.TAKE_CARE_STAY_SAFE[language];
    document.querySelector('.translate-github-cta-text').innerHTML=v.GITHUB_CTA_TEXT[language];
    document.querySelector('.translate-does-donts-poster').setAttribute('src',`./src/documents/prevention_measures/${language.toLowerCase()}_dos_donts.png`)
    // document.querySelector('.translate-').innerHTML=;
    country_ui.getTimeline();
    //update language value incase of reload
    let options = document.getElementById('choose-language').options;
    for(let option of options){
        if(option.value===language){
            options.selectedIndex=option.index;
            option.defaultSelected=true;
            option.selected=true;
        }
    }

}

const upadate_language = ()=>{
    let selected_language=document.getElementById('choose-language').value;
    Store.setItem('default_language',selected_language);
    translate_ui();
}
//add event listener to select
document.querySelector('#choose-language').addEventListener('input',upadate_language);
export default {get_language,translate_ui}
