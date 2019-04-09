<template>
    <div class="wrapper">
        <p>step2</p>
        <div class="form-group">
            <label for="">名前</label>
            <input type="text" name="name" :value="name" @change="updateParameters('name', $event)">
        </div>
        <div class="form-group">
            <button v-on:click="prev">前へ</button>
            <button v-on:click="next">次へ</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'StepTwo',
    methods: {
        next() {
            this.$store.dispatch('next_step');
        },
        prev() {
            this.$store.dispatch('prev_step');
        }
    }
}
</script>

<style></style>
