let url = 'http://13.124.179.186';
if (process.env.NODE_ENV === 'production') {
    url = 'http://13.124.179.186';
}

export const BASE_URL = url + ':8080/';
