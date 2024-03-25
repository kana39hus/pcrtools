
<template>
  <p>Good Bye!</p>
</template>

<script>
export default {
  name: "Logout",
  components: {},
  async mounted() {
    await this.$auth.logout();
    this.$store.commit("localStorage/logout", true);

    window.location = "/";
  },
};
</script>
