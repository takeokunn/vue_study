import * as types from './mutation-types';

export default {
    /**
     * fetch get json
     */
    [types.GET_JSON_REQUEST] (state) {
        state.is_request = true;
    },
    [types.GET_JSON_SUCCESS] (state, { data }) {
        state.row_data = data;
        state.is_request = false;
    },
    [types.GET_JSON_FAILURE] (state) {
        state.is_request = false;
    }
};
