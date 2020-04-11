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
    document.querySelector('html').setAttribute("lang",v.AVAILABLE_LANGUAGES[language.toLowerCase()].iso_name);
    document.title=v.TITLE[language];
    document.getElementsByTagName('meta')["twitter:title"].content=v.TITLE[language];
    document.querySelector('meta[property="og:title"][content]').content=v.TITLE[language];
    document.getElementsByTagName('meta')["description"].content=v.DESCRIPTION[language];
    document.querySelector('meta[property="og:description"][content]').content=v.DESCRIPTION[language];
    document.getElementsByTagName('meta')["twitter:description"].content=v.DESCRIPTION[language];
    document.querySelector('meta[property="og:title"][content]').content=v.TITLE[language];
    document.querySelector('.translate-title').textContent=v.TITLE[language];
    document.querySelector('.translate-sub-title').innerHTML=v.SUB_TITLE[language];
    document.querySelector('.translate-language-label').innerHTML=v.LANGUAGE[language];
    document.querySelector('.translate-state').innerHTML=v.INDIAN_STATS_TABLE.STATE[language].toUpperCase();
    document.querySelector('.translate-table-head-cases').innerHTML=v.TOTAL_CASES[language].toUpperCase();
    document.querySelector('.translate-table-head-active').innerHTML=v.COUNTRY_STATUS_TOTAL_ACTIVE[language].toUpperCase();
    document.querySelector('.translate-table-head-deaths').innerHTML=v.INDIAN_STATS_TABLE.DEATHS[language].toUpperCase();
    // document.querySelector('.translate-global-status-headline').innerHTML=v.GLOBAL_STATUS_HEADLINE[language];
    document.querySelector('.translate-gbl-status-total-new-cases').innerHTML=v.GLOBAL_STATUS_TOTAL_NEW_CASES[language];
    document.querySelector('.translate-gbl-status-total-new-deaths').innerHTML=v.GLOBAL_STATUS_TOTAL_NEW_DEATHS[language];
    document.querySelector('.translate-gbl-status-total-deaths').innerHTML=v.GLOBAL_STATUS_TOTAL_DEATHS[language];
    document.querySelector('.translate-gbl-status-total-serious').innerHTML=v.GLOBAL_STATUS_TOTAL_SERIOUS[language];
    document.querySelector('.translate-gbl-status-total-cases').innerHTML=v.GLOBAL_STATUS_TOTAL_CASES[language];
    document.querySelector('.translate-gbl-status-total-active').innerHTML=v.GLOBAL_STATUS_TOTAL_ACTIVE[language];
    document.querySelector('.translate-gbl-status-total-recovered').innerHTML=v.GLOBAL_STATUS_TOTAL_RECOVERED[language];
    document.querySelector('.translate-gbl-status-total-unresolved').innerHTML=v.GLOBAL_STATUS_TOTAL_UNRESOLVED[language];
    // document.querySelector('.translate-country-status-headline').innerHTML=v.COUNTRY_STATUS_HEADLINE[language];
    document.querySelector('.translate-country-status-total-new-cases').innerHTML=v.COUNTRY_STATUS_NEW_CASES[language];
    document.querySelector('.translate-country-status-total-new-deaths').innerHTML=v.COUNTRY_STATUS_NEW_DEATHS[language];
    document.querySelector('.translate-country-status-total-deaths').innerHTML=v.COUNTRY_STATUS_TOTAL_DEATHS[language];
    document.querySelector('.translate-country-status-total-serious').innerHTML=v.COUNTRY_STATUS_TOTAL_SERIOUS[language];
    document.querySelector('.translate-country-status-total-cases').innerHTML=v.COUNTRY_STATUS_TOTAL_CASES[language];
    document.querySelector('.translate-country-status-total-active').innerHTML=v.COUNTRY_STATUS_TOTAL_ACTIVE[language];
    document.querySelector('.translate-country-status-total-recovered').innerHTML=v.COUNTRY_STATUS_TOTAL_RECOVERED[language];
    document.querySelector('.translate-country-status-total-unresolved').innerHTML=v.COUNTRY_STATUS_TOTAL_UNRESOLVED[language];
    // document.querySelector('.translate-country-timeline-headline').innerHTML=v.COUNTRY_TIMELINE_HEADLINE[language];
    // document.querySelector('.translate-gov-link-container-text').innerHTML=v.GOV_LINK_TEXT[language];
    document.querySelector('.translate-country').innerHTML=v.COUNTRY[language].toUpperCase();
    document.querySelector('.translate-total-cases').innerHTML=v.TOTAL_CASES[language].toUpperCase();
    document.querySelector('.translate-total-cases-today').innerHTML=v.TOTAL_CASES_TODAY[language].toUpperCase();
    document.querySelector('.translate-total-deaths').innerHTML=v.TOTAL_DEATHS[language].toUpperCase();
    // document.querySelector('.translate-take-care-stay-safe').innerHTML=v.TAKE_CARE_STAY_SAFE[language];
    // document.querySelector('.translate-github-cta-text').innerHTML=v.GITHUB_CTA_TEXT[language];
    document.querySelector('.translate-share-cta-text').innerHTML=v.SHARE_CTA_TEXT[language];
    // document.querySelector('.translate-does-donts-poster').setAttribute('src',`./src/documents/prevention_measures/${["ENGLISH","HINDI"].includes(language)?language.toLowerCase():"english"}_dos_donts.png`)
    // document.querySelector('.translate-').innerHTML=;
    // country_ui.getTimeline();
    document.querySelector('#district-cta').innerHTML=v.district_page_cta[language];
    //update language value incase of reload
    let options = document.getElementById('choose-language').options;
    for(let option of options){
        if(option.value===language){
            options.selectedIndex=option.index;
            option.defaultSelected=true;
            option.selected=true;
        }
    }
    //headlines
    let arr = [
        document.querySelectorAll('.translate-iss'),
        document.querySelectorAll('.translate-is'),
        document.querySelectorAll('.translate-gs'),
        document.querySelectorAll('.translate-it'),
        document.querySelectorAll('.translate-gtac'),
        document.querySelectorAll('.translate-gg'),
        document.querySelectorAll('.translate-news'),
        document.querySelectorAll('.translate-donate'),
        document.querySelectorAll('.translate-ss')
    ];
    for(let nodes of arr){
        let type = nodes[1].classList[0].split('-')[1];
        for(let node of nodes){
            node.textContent=v[type][language].toUpperCase();
        }
    }

}

const upadate_language = ()=>{
    let selected_language=document.getElementById('choose-language').value;
    Store.setItem('default_language',selected_language);
    translate_ui();
}

const set_langauge_options = ()=>{
    let current_language=get_language() || "ENGLISH";
    const select_language_element = document.getElementById('choose-language');
    const entries = Object.entries(v.AVAILABLE_LANGUAGES);
    for(let [name, lang]  of entries){
        let option = document.createElement('option');
        option.appendChild( document.createTextNode(lang.label) );
        option.value = lang.name;
        if(option.value===current_language){
            // options.selectedIndex=option.index;
            option.defaultSelected=true;
            option.selected=true;
        }
        select_language_element.appendChild(option); 
        document.querySelector('.translate-language-label').innerHTML=v.LANGUAGE[current_language];
    }
}

//add event listener to select
document.querySelector('#choose-language').addEventListener('input',upadate_language);
export default {get_language,translate_ui,set_langauge_options,v}
