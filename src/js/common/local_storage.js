/**
 * Fetches the data from local storage
 * @param {String} key name of the value in local storage
 * @param {Object|String} value value to be stored
 */
const setItem = (key,value)=>{
    localStorage.setItem(key, JSON.stringify(value));
}

/**
 * Puts data in local storage
 * @param {String} key name of the key in local storage
 * @returns {Object} 
 */
const getItem = (key)=>{
    return JSON.parse(localStorage.getItem(key));
}

const empty = ()=>{
    localStorage.clear();
}

export default {getItem, setItem, empty};