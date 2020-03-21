import Store from '../common/local_storage.js';
import Config from './config.js';
import Translate from '../ui/translation/translate.js';

const getQueryParams = (url) => {
    let queryParams = {};
  //create an anchor tag to use the property called search
    let anchor = document.createElement('a');
  //assigning url to href of anchor tag
    anchor.href = url;
  //search property returns the query string of url
    let queryStrings = anchor.search.substring(1);
    let params = queryStrings.split('&');

    for (var i = 0; i < params.length; i++) {
        var pair = params[i].split('=');
        queryParams[pair[0]] = decodeURIComponent(pair[1]);
    }
    return queryParams;
};

const make_ui =(count,target)=>{
    let complete_indicator = count/target*100;
    complete_indicator=complete_indicator<30?complete_indicator+20:complete_indicator;
    document.getElementById('complete-pbar').style.width = `${complete_indicator}%`;
    document.getElementById('complete-pbar').setAttribute('aria-valuenow',`${complete_indicator}`);
    document.getElementById('complete-pbar').innerHTML=`<b>shares (${count})</b>`;
    document.getElementById('incomplete-pbar').style.width = `${100 - complete_indicator}%`;
    document.getElementById('incomplete-pbar').setAttribute('aria-valuenow',`${100 - complete_indicator}`);
    document.getElementById('incomplete-pbar').innerHTML=`<b class="text-dark">target (${target - count})</b>`;
}

const update_shared_stats = async ()=>{
    let params = getQueryParams(window.location.href);
    if(params.lang){
        Store.setItem('default_language',params.lang)
        Translate.translate_ui();
    }
    if(params.count && params.target){
        //show in UI
        make_ui(params.count, params.target)
    }else{
        let medium = 'in-app';
        if(params.utm_medium){
            medium=params.utm_medium
        }else if(params.fbclid){
            medium='facebook';
        }
        //send stats and update UI
        let response = await fetch(`${Config.urls.app_url}/redirect/app-coronavirus-tracker/update-views-manually?url=${document.URL}&lang=${Translate.get_language()}&medium=${medium}`);
        if (response.ok) { // if HTTP-status is 200-299
            // get the response body (the method explained below)
            let json = await response.json();
            if(json.code===0){
                //sucess
                let count= json.doc.count;
                let target= json.doc.target;
                make_ui(count,target);
            }else{
                //do nothing
            }
        } else {
            alert("HTTP-Error: " + response.status);
        }
    }
}

export default {update_shared_stats}