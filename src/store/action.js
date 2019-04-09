import * as ajax from '../api/ajax';
import * as types from './mutation-types';

export const getJson = ({ commit }) => {
    commit(types.GET_JSON_REQUEST);
    const success = data => commit(types.GET_JSON_SUCCESS, { data });
    const failure = () => commit(types.GET_JSON_FAILURE);
    ajax.getJson(success, failure);
};
