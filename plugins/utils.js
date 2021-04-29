import crypto from 'crypto-js'
const formatDate = (date, format) => {
    format = format.replace(/yyyy/g, date.getUTCFullYear());
    format = format.replace(/MM/g, ('0' + (date.getUTCMonth() + 1)).slice(-2));
    format = format.replace(/dd/g, ('0' + date.getUTCDate()).slice(-2));
    format = format.replace(/HH/g, ('0' + date.getUTCHours()).slice(-2));
    format = format.replace(/mm/g, ('0' + date.getUTCMinutes()).slice(-2));
    format = format.replace(/ss/g, ('0' + date.getUTCSeconds()).slice(-2));
    format = format.replace(/SSS/g, ('00' + date.getUTCMilliseconds()).slice(-3));
    return format;
}
/* https://developer.mozilla.org/ja/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API */
const storageAvailable = (type) => {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}
const AppIdentity = 'akukin';
const AppDataVersion = '0.1';
const setLocalStorage = (key, value, type = 'cache') => {
    if(storageAvailable('localStorage')) {
        console.log('save:'+key);
        try {
            const jsonString = JSON.stringify({
                    app:AppIdentity,
                    type:type,
                    value:value,
                    storedAt:(new Date()).getTime(),
                    version:AppDataVersion
                });
            const encryptString = crypto.AES.encrypt(jsonString, 'UC1opHUrw8rvnsadT-iGp7Cg');
            window['localStorage'].setItem(
                key,
                encryptString.toString()
            );
        } catch(e) {
            console.log(e);
            let time = checkOldestLocalStorageCacheTime();
            if(time) {
                let range = (new Date()).getTime() - time;
                refreshLocalStorage(Math.floor(range / 2));
            }
            return false;
        }
        return true;
    }
    return false;
}
const getLocalStorage = (key, cacheTime = 0, reqRaw = false) => {
    if(storageAvailable('localStorage')) {
        const raw = window['localStorage'].getItem(key);
        if(raw === null)return undefined;
        const decryptObj = crypto.AES.decrypt(raw, 'UC1opHUrw8rvnsadT-iGp7Cg');


        let lsObj = null;
        try {
            lsObj = JSON.parse(decryptObj.toString(crypto.enc.Utf8));
        } catch (e) {
            console.log(e);
        }
        if( lsObj
            && lsObj.storedAt
            && lsObj.value !== undefined
            && (    cacheTime == 0
                    || lsObj.storedAt >= ((new Date()).getTime() - cacheTime)
                )
            ) {
            console.log('load:'+key);
            return reqRaw ? lsObj : lsObj.value;
        }
        console.log('remove:'+key);
        window['localStorage'].removeItem(key);
        return null;
    }
    return false;
}
const checkOldestLocalStorageCacheTime = () => {
    if(storageAvailable('localStorage')) {
        let time = false;
        for(let i = 0; i < window['localStorage'].length; i++) {
            let lsKey = window['localStorage'].key(i);
            let lsData = getLocalStorage(lsKey, 0, true);
            if(lsData && (time === false || time > lsData.storedAt)) {
                time = lsData.storedAt;
            }
        }
        return time;
    }
    return false;
}
const refreshLocalStorage = (cacheTime = (1000 * 60 * 60 * 24)) => {
    if(storageAvailable('localStorage')) {
        let idx = 0, limit = 100;
        let timeout = (new Date()).getTime() - cacheTime;
        while (idx < window['localStorage'].length && limit > 0) {
            let lsKey = window['localStorage'].key(idx);
            let lsData = getLocalStorage(lsKey, 0, true);
            if( lsData
                && lsData.app == AppIdentity
                && (
                    (lsData.type == 'cache' && lsData.storedAt < timeout)
                    || lsData.version !== AppDataVersion
                )
            ) {
                console.log('flush:'+lsKey);
                window['localStorage'].removeItem(lsKey);
            } else {
                idx++;
            }
            limit--;
        }
        console.log('refreshLS:'+(100 - limit));
    }
}
const setUserData = (changefunc = false) => {
    let userData = getLocalStorage('userData');
    if(userData && changefunc) {
        userData = changefunc(userData);
        setLocalStorage('userData',userData,'save');
    }
}

class API {
    constructor (axios) {
        this.axios = axios;
    }
    get API_ROOT() {
        return "";
    }

    async request (apiInterface, params = {}) {
        return await this.axios.get(
            this.API_ROOT + apiInterface, {
                params: params
            })
            .catch((e) => {
                console.log("catch request error");
                console.log(e);
                return false;
            });
    }

    async cRequest(apiInterface, cSeconds = 0, params = {}) {
        let storeKey = apiInterface;
        for(let [key, value] of Object.entries(params)) {
            storeKey += "${key}:${value}";
        }
        let cache = getLocalStorage(storeKey, 1000 * cSeconds);
        let resultData = false;

        if(!cache) {
            let response = await this.request(apiInterface, params)
                .then(res => { return res.data; })
                .catch(e=>{
                    console.log("catch request error", e);
                    return false;
                });

            if(response) {
                resultData = response;
                setLocalStorage(storeKey, resultData);
            }
        } else {
            resultData = cache;
        }
        return resultData;
    }
}
export default function ({ $axios }, inject) {
  const api = new API($axios);
  inject('api', api);
  inject('formatDate', formatDate);

  inject('storageAvailable', storageAvailable);
  inject('setLocalStorage', setLocalStorage);
  inject('getLocalStorage', getLocalStorage);
  inject('checkOldestLocalStorageCacheTime', checkOldestLocalStorageCacheTime);
  inject('refreshLocalStorage', refreshLocalStorage);

  inject('setUserData', setUserData);
  
}