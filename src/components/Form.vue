<template>
    <div id="wrapper">
        <ul class="left-block">
            <li v-bind:class="{ active: this.now_step === 1 }">step1</li>
            <li v-bind:class="{ active: this.now_step === 2 }">step2</li>
            <li v-bind:class="{ active: this.now_step === 3 }">step3</li>
        </ul>
        <div class="right-block">
            <step-one v-if="this.now_step === 1" />
            <step-two v-if="this.now_step === 2" />
            <step-three v-if="this.now_step === 3" />
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

import StepOne from "./StepOne.vue";
import StepTwo from "./StepTwo.vue";
import StepThree from "./StepThree.vue";

export default {
    name: 'Form',
    computed: mapState({ now_step: state => state.now_step }),
    components: { StepOne, StepTwo, StepThree },
}
</script>

<style scoped>
#wrapper {
    display: grid;
    grid-template-columns: 150px 4fr;
}

#wrapper ul.left-block li.active {
    font-weight: bold;
}
</style>
