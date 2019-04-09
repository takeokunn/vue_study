<template>
    <div>
        <p>step3</p>
        <div class="form-group">
            <button v-on:click="prev">前へ</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'StepThree',
    methods: {
        prev() {
            this.$store.dispatch('prev_step');
        }
    }
}
</script>

<style></style>
