import * as types from './mutation-types';

const mutations = {
    updateParameter: (state, { key, value }) => {
        switch (key) {
            case "name":
                state.formdata.name = value;
                break;
            case "email":
                state.formdata.email = value;
                break;
        }
    }
};

export default {
    ...mutations,

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
    },

    /**
     * next/prev step
     */
     [types.FORM_NEXT_STEP] (state) {
         state.now_step = state.now_step + 1;
     },
     [types.FORM_PREV_STEP] (state) {
         state.now_step = state.now_step > 2 ? state.now_step - 1 : 1;
     },
};
