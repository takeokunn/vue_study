import axios from 'axios';

const MYJSON_URL = "https://api.myjson.com/bins/15psn9";

const get = (path, success, failure) => {
    axios.get(path)
        .then(res => success(res.data))
        .catch(err => failure(err));
};

export const getJson = (success, failure) => get(MYJSON_URL, success, failure)
