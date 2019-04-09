<template>
    <div class="">
        <ag-grid-vue style="width: 500px; height: 500px;"
                    class="ag-theme-balham"
                    :columnDefs="column_defs"
                    :rowData="row_data">
        </ag-grid-vue>
        <button v-on:click="fetch">Fetch</button>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { AgGridVue } from "ag-grid-vue";

const column_defs = [
    { headerName: 'Make', field: 'make', sortable: true, filter: true },
    { headerName: 'Model', field: 'model', sortable: true, filter: true },
    { headerName: 'Price', field: 'price', sortable: true, filter: true }
];

export default {
    name: 'App',
    components: { AgGridVue },
    computed: mapState({ row_data: state => state.row_data }),
    data: () => ({ column_defs }),
    methods: {
        fetch() {
            this.$store.dispatch('getJson');
        }
    }
}
</script>

<style lang="scss">
    $ag-icons-path: "../../node_modules/ag-grid-community/src/styles/ag-theme-balham/icons/";
    @import "../../node_modules/ag-grid-community/src/styles/ag-grid.scss";
    @import "../../node_modules/ag-grid-community/src/styles/ag-theme-balham/sass/ag-theme-balham.scss";
</style>
