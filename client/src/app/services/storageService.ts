export const storageService = {
    store,
    load,
    clear
}


function clear() {
    sessionStorage.clear();
}

function store(key, value) {
    sessionStorage[key] = JSON.stringify(value);
}

function load(key, defaultValue = null) {
    var value = sessionStorage[key]; 
    if (!value) return defaultValue
    else return JSON.parse(value);
}