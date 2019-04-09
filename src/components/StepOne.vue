<template>
    <div>
        <p>step1</p>
        <div class="form-group">
            <label for="">名前</label>
            <input type="text" name="name" :value="name" @change="updateParameters('name', $event)">
        </div>
        <div class="form-group">
            <label for="">メールアドレス</label>
            <input type="email" name="email" :value="email" @change="updateParameters('email', $event)">
        </div>
        <div class="form-group">
            <button v-bind:disabled="this.is_disabled" v-on:click="next()">次へ</button>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'StepOne',
    computed: mapState({ name: state => state.formdata.name, email: state => state.formdata.email }),
    data: () => ({ is_disabled: false }),
    created: function () {
        this.changeButton();
    },
    methods: {
        next() {
            this.$store.dispatch('first_step', { name: this.name, email: this.email });
            this.$store.dispatch('next_step');
        },
        validate() {
            return this.$store.state.formdata.name === "" || this.$store.state.formdata.email === "";
        },
        changeButton() {
            this.is_disabled = this.validate();
        },
        updateParameters (key, e) {
            this.$store.commit('updateParameter', { key, value: e.target.value })
            this.changeButton();
        }
    }
}
</script>

<style></style>
