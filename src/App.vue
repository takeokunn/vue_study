<template>
    <div id="app">
        <ul>
            <li>
                <router-link to="/form">Go to form</router-link>
            </li>
            <li>
                <router-link to="/ag-grid">Go to ag-grid</router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style></style>
