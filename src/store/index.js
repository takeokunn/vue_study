import Vue from 'vue';
import Vuex from 'vuex';
import { createModule } from 'vuex-toast';

import * as actions from './action';
import mutations from './mutations';

Vue.use(Vuex);

const state = {
    is_request: false,
    row_data: [],
    now_step: 1,
    formdata: {
        name: "fdafsa",
        email: "",
    }
};

export default new Vuex.Store({
    state,
    actions,
    mutations,
    modules: { toast: createModule({ dismissInterval: 8000 }) },
    strict: process.env.NODE_ENV === 'local',
});
