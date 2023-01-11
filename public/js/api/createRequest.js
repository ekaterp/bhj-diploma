//Основная функция для совершения запросов любого характера на сервер.

const createRequest = (options = {}) => {

    const xhr = new XMLHttpRequest;
    xhr.responseType = 'json'; 
    
    let url = options.url;
    let formData = null;

    if (options.data) {
        if (options.method === 'GET') {
            url += '?' + Object.entries(options.data).map(
                // ([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
                entry => entry.map(encodeURIComponent).join('=')
            ).join('&');
        } else {
            formData = new FormData();
            Object.entries(options.data).forEach(v => formData.append(...v))
        }
    }

    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            let err = null;
            let resp = null;

            if (xhr.status === 200) {
                const _resp = xhr.response;
                if (_resp && _resp.success) {
                    resp = _resp;
                } else {
                    err = _resp;
                }
            } else {
                err = new Error('...');
            }
            options.callback(err, resp);  // я запуталась -  опять колбек?? откуда и зачем?
        }
    }

    xhr.open (options.method, url);
    xhr.send(formData);
}
