import * as ajax from '../api/ajax';
import * as types from './mutation-types';

export const get_json = ({ commit }) => {
    commit(types.GET_JSON_REQUEST);
    const success = data => commit(types.GET_JSON_SUCCESS, { data });
    const failure = () => commit(types.GET_JSON_FAILURE);
    ajax.getJson(success, failure);
};

export const next_step = ({ commit }) => commit(types.FORM_NEXT_STEP);
export const prev_step = ({ commit }) => commit(types.FORM_PREV_STEP);

export const first_step = ({ commit }, payload) => {
    console.log(payload);
};
