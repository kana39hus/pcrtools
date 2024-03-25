<template>
  <div class="column">
    
      <div class="card" @click="changePage">
        <header class="card-header">
          <p class="card-header-title">
            {{ title }}
          </p>
        </header>
        <div class="card-content">
          <div class="content has-text-centered">
            <b-icon :icon="icon" size="is-large" type="is-tiffany" />
          </div>
        </div>
        <footer class="card-footer">
          <div class="card-footer-item">
            <span>
              <slot />
            </span>
          </div>
        </footer>
      </div>
    
  </div>
</template>

<script>
export default {
  name: "BuefyCard",
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
  },
  methods: {
    changePage(){
      this.$router.push(this.to)
    }
  }
};
</script>

<style lang="scss">
div.card {
  font-family: "Nunito", sans-serif;
  color: #000000;
}

</style>