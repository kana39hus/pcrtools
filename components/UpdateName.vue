<template>
    <div class="column">
        <b-field label="日文名字">
            <b-input v-model="name"></b-input>
        </b-field>

        <b-field label="中文名字">
            <b-input v-model="nickname"></b-input>
        </b-field>

        <b-button type="is-primary" expanded @click="update">上傳</b-button>
    </div>
</template>

<script>
export default {
    name: "UpdateName",
    data() {
        return {
            name: "",

            nickname: "",
            data: undefined
        };
    },
    methods: {
        async update() {
            var response1 = await this.$fetcher.post("/api/pcr/updateName", { name: this.name, nickname: this.nickname });
            this.data = response1.data;
            console.log(response1);
            if (response1.status == 200) {
                this.$buefy.toast.open({
                    message: "更新成功",
                    type: "is-success",
                    position: "is-bottom"
                });
                this.name = "";
                this.nickname = "";
            }

        },
    }

};
</script>