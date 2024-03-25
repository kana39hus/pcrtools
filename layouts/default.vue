<template>
  <div>
    <div class="sidebar-page">
      <section class="sidebar-layout">
        <div class="p-1">
          <NavBar />
          <Nuxt class="main-panel" style="margin-bottom: 2em" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "DefaultLayout",
  components: {
    NavBar,
  },
  data() {
    return {
      currentRole: undefined,
      items: [],
      roles: [],
      keyCode: 9251,
      isEditing: true,
    };
  },

  methods: {
    
  },
  async mounted() {

  },
  beforeMount() {
    //window.addEventListener("beforeunload", this.preventNav)
  },

  beforeDestroy() {
    //window.removeEventListener("beforeunload", this.preventNav);
  },
  beforeRouteLeave(to, from, next) {
    
  },
};
</script>

<style lang="scss">
body {
  //background: var(--mist);
  min-width: fit-content;
}

.p-1 {
  padding: 1em;
  width: 100%;
  min-height: 100vh;
}

.main-panel {
  min-height: 100vh;
}
</style>