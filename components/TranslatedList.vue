<template>
    <b-table :data="list">

        <b-table-column field="name" label="日文原名" v-slot="props">
            {{ props.row.name }}
        </b-table-column>

        <b-table-column field="nickname" label="中文譯名" v-slot="props">
            {{ props.row.nickname }}
        </b-table-column>

        <!-- <b-table-column field="date" label="Date" :th-attrs="dateThAttrs" :td-attrs="columnTdAttrs" centered v-slot="props">
                <span class="tag is-success">
                    {{ new Date(props.row.date).toLocaleDateString() }}
                </span>
            </b-table-column> -->

    </b-table>
</template>

<script>
export default {
    name: "TranslatedList",
    data() {
        return {
            list: undefined,
            data: undefined
        };
    },
    methods: {


    },

    mounted() {
        this.$fetcher.post("/api/pcr/getNameList", {}).then((response) => {
            this.list = response.data;
            this.list.sort((a, b) => (b.name.length > a.name.length) ? 1 : ((a.name.length > b.name.length) ? -1 : 0))
        });
    },

};
</script>