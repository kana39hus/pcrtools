<template>
<b-navbar type="is-dark">
        <template #brand>
        </template>
        <template #start>
            <b-navbar-item href="/">
                Home
            </b-navbar-item>
        </template>

        <template #end>
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-dark" href="/logout">
                        <strong>Bye</strong>
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {

    };
  },
  methods: {

  },
  async mounted() {

  },
};
</script>

<style scoped>
nav.navbar.is-fixed-top {
  background: transparent;
}
</style>

